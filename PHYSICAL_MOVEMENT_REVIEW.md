# Physical Movement lab review

## Architecture and integration

Draft [PR #1](https://github.com/jinichintalapoodi-a11y/neural-orchard-mvp-qa/pull/1) originally changed only `index.html`. The reviewed head was `6cb617bfa4df31c29c6f7b87756b8678f8086c07`, based on `main` at `11f19f82ab9dbae81ddc1c2f0caf9e444ab806de`. GitHub reported the PR as mergeable at inspection. The repository is a static site. At inspection, the only remote heads were main and the movement feature branch. No workflow files were present in either checkout.

The entrance mounts a movement view inside the existing portal and uses the shared arch geometry. Category buttons are in reading order across the two doors. Returning from a collection restores focus to its category, and returning home restores focus to the entrance. The module depends on the existing home entrance, content portal and breathing cancellation method. Serve the repository using an HTTP static server because the movement script imports a JavaScript module.

To add a reviewed video, add a record to `physical-movement-content.js` with the category ID, exact title, attributed creator, official watch URL and review status. Only entries marked approved appear. Keep the decision, reviewer, review date and safety/accessibility notes in the review record. The channel reference is separately identified in the UI.

## Founder selections

On November 18, 2026, the founder approved these Eligned Movement selections for the collection review. The lymphatic reference was matched provisionally to the official **NEURO-LYMPH 2.0** upload.

| Founder reference | Official watch page | Review status |
| --- | --- | --- |
| Cerebellar | [CEREBELLUM UPGRAGE](https://www.youtube.com/watch?v=U1HsnRQyJ2U) | Founder selected. Full video and claims review pending. |
| Lymphatic drainage | [NEURO-LYMPH 2.0](https://www.youtube.com/watch?v=lZSN2UET1GQ) | Provisional title match. Screen the full video for drainage or detox claims and assess whether its movements fit the collection. |
| Hormonal brain | [Neuro-movement for hormonal brains](https://www.youtube.com/watch?v=BnnBt67tuqE) | Founder selected. Full video and claims review pending. |
| Waking up the brain | [TURN YOUR BRAIN ON](https://www.youtube.com/watch?v=Pju2LEAOG9w) | Founder selected. Full video and claims review pending. |

Public catalog approval requires review of the full video, claims, accessibility and safety. Clinical claims and higher-risk content require qualified review. The catalog is still empty.

## Eyes, Head & Body candidate screening

The official channel video listing and the four watch-page metadata responses were retrieved. Each watch page reported playback availability in its metadata and advertised automatically generated English captions. Playback, caption accuracy, full movements, symptom provocation, alternatives and claims spoken in the video remain unverified. No video has completed the publication review.

| Official watch page | Duration | What to review before deciding |
| --- | --- | --- |
| [Neuro-movement for hormonal brains](https://www.youtube.com/watch?v=BnnBt67tuqE) | 23:57 | Description references perimenopause, menopause and brain fog, with movement starting around 4:00. Check whether the demonstration fits general coordination and whether the spoken claims go beyond the evidence. |
| [TURN YOUR BRAIN ON](https://www.youtube.com/watch?v=Pju2LEAOG9w) | 30:47 | Description mentions using a ball. Check for controlled hand–eye drills, seated options and whether the title implies a benefit the content cannot support. |
| [CEREBELLUM UPGRAGE](https://www.youtube.com/watch?v=U1HsnRQyJ2U) | 23:53 | Title appears this way on the official page. The metadata does not establish exercise selection or safety. Screen any clinical or brain-function claims before advancing. |
| [BRAIN EXERCISES FOR KIDS, TEENS AND ADULTS](https://www.youtube.com/watch?v=PdB5-aVewFU) | 22:01 | Broad intended audience. Verify a direct fit for midlife users, cueing and modifications before advancing. |

Screen the entire video for movement breakdown, pace, equipment, floor clearance, support, seated alternatives, visual and spoken cueing, caption quality and claims. Favor low-complexity general coordination. Route symptom-provoking gaze work, vestibular treatment claims and higher-risk standing or directional drills to an appropriately qualified clinician. Exclude brain detox and lymphatic clearance claims from this collection.

## Evidence and source shortlist

| Category | Candidate source or content | Evidence and limits |
| --- | --- | --- |
| Strength for Tomorrow | [NHS Strength exercises](https://www.nhs.uk/live-well/exercise/strength-exercises/), including sit-to-stand and wall press-up | WHO supports muscle-strengthening activity in adults. LIFTMOR studied supervised high-intensity training in selected postmenopausal women with low bone mass. Its findings on bone density and physical function do not establish the safety or efficacy of an unsupervised app routine. |
| Balance Before You Need It | [NHS Balance exercises](https://www.nhs.uk/live-well/exercise/balance-exercises/), screen supported static and stepping options individually | The Cochrane review found a 23% lower fall rate across exercise programs in community-dwelling older adults (rate ratio 0.77, 95% CI 0.71–0.83). This is evidence for that population and those programs. It cannot predict decades-later fall risk from midlife participation. |
| Eyes, Head & Body | Eligned candidate shortlist above and Hall et al. for the clinical boundary | Hall et al. addresses diagnosed peripheral vestibular hypofunction. General coordination is a separate use case. Transfer to daily attention, relief of perimenopausal brain fog and prevention of vestibular disease remain unestablished here. |
| Move Through Space | [NHS Balance exercises](https://www.nhs.uk/live-well/exercise/balance-exercises/), screen the sideways walking option first | Directional stepping fits functional practice. Evidence from multicomponent older-adult programs is indirect for any single spatial drill, midlife outcomes and cognitive transfer. Review crossing and backward stepping separately for fall risk. |
| Heart & Brain Movement | [NHS Walking for health](https://www.nhs.uk/live-well/exercise/walking-for-health/) and [CDC activity intensity guidance](https://www.cdc.gov/physical-activity-basics/measuring/index.html) | Aerobic activity is established public-health guidance. The talk test can communicate relative intensity. The sources do not validate a Neural Orchard dose or demonstrate dementia prevention. |
| Flow & Restore | [NHS Flexibility exercises](https://www.nhs.uk/live-well/exercise/flexibility-exercises/), screen comfortable seated options first | This is a source for gentle mobility content. Long-term functional or cognitive benefit from any proposed app routine remains an evidence gap. |

### Core references

- World Health Organization. *WHO guidelines on physical activity and sedentary behaviour*. Geneva, 2020. ISBN 9789240015128. [WHO](https://www.who.int/publications/i/item/9789240015128/)
- Sherrington C, Fairhall NJ, Wallbank GK, et al. Exercise for preventing falls in older people living in the community. *Cochrane Database Syst Rev*. 2019;1:CD012424. [DOI](https://doi.org/10.1002/14651858.CD012424.pub2)
- Hall CD, Herdman SJ, Whitney SL, et al. Vestibular Rehabilitation for Peripheral Vestibular Hypofunction. *J Neurol Phys Ther*. 2022;46(2):118–177. [PubMed](https://pubmed.ncbi.nlm.nih.gov/34864777/)
- Watson SL, Weeks BK, Weis LJ, Harding AT, Horan SA, Beck BR. High-Intensity Resistance and Impact Training Improves Bone Mineral Density and Physical Function in Postmenopausal Women With Osteopenia and Osteoporosis. *J Bone Miner Res*. 2018;33(2):211–220. [DOI](https://doi.org/10.1002/jbmr.3284)

These sources support the design scope. They do not establish effectiveness or safety of the app itself. All six guided collections remain in development pending content review.

## Verification and remaining gates

- Headless Chromium through Playwright tested the checkout at 1440 × 900, 390 × 844, 320 × 568 and 844 × 390. Each passed entrance activation, paired row geometry, six destination headings, safety copy, collection status, the external channel link target, return actions and keyboard focus restoration.
- At each size the PPS doorway opened, Stargazer and Sentinel were enabled, and Breathe started and exited. Nourish Me and Sleep Sanctuary retained their existing unavailable states. At desktop size both games launched their own pages. Direct studio and Breathe entry URLs were smoke-tested.
- The regression run caught movement initialization on direct Breathe entry, where the home menu has already been replaced. The fix skips attaching an event listener when the movement entrance is absent. The subsequent run passed.
- Static assets were served from the checkout through Playwright request routing. The test used fallback fonts. It did not cover real mobile devices, screen readers, full game sessions, or YouTube playback.
- JavaScript syntax checks and the Git whitespace check passed. The movement module adds no external scripts, embeds, tracking, credentials, or personal data collection. The channel link opens a separate tab with opener protection.
- Before public release, review full videos and verify accessible instructions, caption quality, safety and attribution. Clinical claims or higher-risk movements need qualified review. Complete assistive technology and real-device checks before requesting release approval.
