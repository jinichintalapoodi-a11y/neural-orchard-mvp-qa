import { chromium, firefox, webkit, devices } from 'playwright';
import fs from 'node:fs/promises';
const out='qa-screenshots';await fs.mkdir(out,{recursive:true});
const base='http://127.0.0.1:4173/';
const report={source:'QA frontend served locally from GitHub Actions',realDevice:false,checks:[],errors:[]};
function record(browser,name,pass,detail=''){report.checks.push({browser,name,pass,detail})}
async function suite(kind,browser,options){
 const context=await browser.newContext(options);
 const page=await context.newPage();page.setDefaultTimeout(12000);
 page.on('pageerror',e=>report.errors.push({browser:kind,message:e.message}));
 const pfx=kind.replace(/[^a-z0-9]+/g,'-');
 try{
  await page.goto(base+'index.html',{waitUntil:'domcontentloaded'});
  await page.waitForTimeout(900);
  record(kind,'Landing loads',await page.title()!==''&&await page.locator('#studio-stage').count()===1);
  await page.screenshot({path:`${out}/${pfx}-landing.png`,fullPage:true});
  await page.goto(base+'index.html?action=studio',{waitUntil:'domcontentloaded'});
  await page.waitForTimeout(900);
  record(kind,'PPS navigation loads',await page.locator('#practice-grid').count()===1);
  await page.screenshot({path:`${out}/${pfx}-studio.png`,fullPage:true});
  await page.goto(base+'Stargaizer.html',{waitUntil:'domcontentloaded'});
  await page.waitForTimeout(1100);
  record(kind,'Stargazer game page loads',await page.locator('#room-gate').count()===1);
  record(kind,'Stargazer background image loaded',await page.evaluate(async()=>{let path=innerWidth<=480?'star_gazer_mobile.jpeg':'star_gazer.jpeg';let img=new Image();img.src=path;try{await img.decode();return img.naturalWidth>0}catch{return false}}));
  record(kind,'Feedback hidden',await page.locator('.no-feedback').count()===0);
  await page.screenshot({path:`${out}/${pfx}-stargazer.png`,fullPage:true});
  await page.goto(base+'Sentinel.html',{waitUntil:'domcontentloaded'});
  await page.waitForTimeout(750);
  record(kind,'Sentinel initial instruction visible',await page.locator('#card.instruction-card h1').count()===1);
  record(kind,'Sentinel audio toggle present',await page.locator('#sound').count()===1);
  await page.screenshot({path:`${out}/${pfx}-sentinel-level1.png`,fullPage:true});
  // Preserve portrait instruction evidence, then rotate mobile emulation for the game's landscape-only flow.
  if(options.isMobile){await page.setViewportSize({width:844,height:390});record(kind,'Landscape viewport enabled for mobile gameplay',true)}
  for(let level=2;level<=5;level++){
   await page.goto(base+'Sentinel.html',{waitUntil:'domcontentloaded'});
   await page.evaluate(lv=>localStorage.setItem('sentinelLevel',String(lv)),level);
   await page.reload({waitUntil:'domcontentloaded'});
   const resume=page.locator('#resume');
   if(await resume.count())await resume.click();
   const title=await page.locator('#card.instruction-card h1').textContent().catch(()=>null);
   const instr=await page.locator('#card.instruction-card .instruction-example').textContent().catch(()=>null);
   record(kind,'Sentinel level '+level+' instruction',Boolean(title?.includes(['','Remember the Last','Remember Two','Remember Three','Remember Four','Remember Five'][level])&&instr?.includes('Example:')),title||'missing');
   await page.screenshot({path:`${out}/${pfx}-sentinel-level${level}.png`,fullPage:true});
  }
  await page.goto(base+'Sentinel.html',{waitUntil:'domcontentloaded'});
  await page.evaluate(()=>localStorage.setItem('sentinelLevel','1'));
  await page.reload({waitUntil:'domcontentloaded'});
  await page.locator('#begin').click();
  await page.waitForTimeout(950);
  record(kind,'Sentinel begins gameplay',await page.locator('#stage.playing').count()===1);
  await page.screenshot({path:`${out}/${pfx}-sentinel-playing.png`,fullPage:true});
  await page.locator('#exit').click();
  await page.waitForTimeout(900);
  record(kind,'Sentinel exit controls available',await page.locator('#exitOrchard').count()===1&&await page.locator('#exitStudio').count()===1);
  record(kind,'Feedback still hidden after exit',await page.locator('.no-feedback').count()===0);
  await page.screenshot({path:`${out}/${pfx}-sentinel-exit.png`,fullPage:true});
 }catch(e){record(kind,'Scenario error',false,e.message);report.errors.push({browser:kind,message:e.message})}
 await context.close();
}
for(const [name,engine,options] of [
 ['Chrome-desktop',chromium,{viewport:{width:1440,height:900}}],
 ['Chrome-Android-emulation',chromium,{...devices['Pixel 7']}],
 ['Safari-iPhone-emulation',webkit,{...devices['iPhone 13']}],
 ['Firefox-desktop',firefox,{viewport:{width:1440,height:900}}]
]){
 let b;
 try{b=await engine.launch({headless:true});await suite(name,b,options)}
 catch(e){record(name,'Browser launch',false,e.message)}
 finally{await b?.close()}
}
report.passed=report.checks.filter(x=>x.pass).length;report.failed=report.checks.filter(x=>!x.pass).length;
await fs.writeFile(out+'/qa-report.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({passed:report.passed,failed:report.failed,errors:report.errors.slice(0,10)},null,2));
// Exit 0 to collect screenshots despite discovered product defects.
