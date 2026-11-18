import { categories, exerciseCatalog } from './physical-movement-content.js';

const entrance = document.getElementById('enter-movement');
const portal = document.getElementById('content-portal');
const movement = document.createElement('main');
movement.id = 'physical-movement';
movement.hidden = true;
portal.append(movement);

function element(tag, text, className) {
  const node = document.createElement(tag);
  node.textContent = text;
  if (className) node.className = className;
  return node;
}

function button(text, onClick) {
  const node = element('button', text, 'studio-btn');
  node.type = 'button';
  node.addEventListener('click', onClick);
  return node;
}

function externalLink(text, href) {
  const link = element('a', text + ' (opens in a new tab)');
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function show(title, backLabel, goBack) {
  const header = element('header', '', 'movement-header');
  const heading = element('h1', title);
  heading.tabIndex = -1;
  header.append(heading, button(backLabel, goBack));
  movement.replaceChildren(header);
  movement.scrollTop = 0;
  return heading;
}

function returnHome() {
  movement.hidden = true;
  document.body.classList.remove('show-movement', 'show-studio-grid');
  entrance.focus();
}

function approvedExercises(category) {
  return exerciseCatalog.filter(exercise =>
    exercise.categoryId === category.id && exercise.reviewStatus === 'approved'
  );
}

function showCategories(previousId) {
  const heading = show('Physical Movement', 'Return to Neural Orchard', returnHome);
  heading.after(element('p', 'Move well today. Stay strong for tomorrow.'));
  const grid = element('div', '', 'movement-doors');
  for (const category of categories) {
    const categoryButton = button(category.name, () => showCollection(category));
    const status = approvedExercises(category).length ? 'Exercises available' : 'In development';
    categoryButton.append(element('span', status, 'movement-status'));
    categoryButton.dataset.category = category.id;
    grid.append(categoryButton);
  }
  movement.append(grid);
  const previousButton = [...grid.children].find(node => node.dataset.category === previousId);
  (previousButton ?? heading).focus();
}

function showCollection(category) {
  const heading = show(category.name, 'Back to exercise categories', () => showCategories(category.id));
  const collection = element('section', '', 'movement-collection');
  collection.append(
    element('p', category.description),
    element('h2', 'Move safely'),
    element('p', category.safety),
    element('p', 'Stop exercising if you develop chest pain, feel faint, or experience unusual shortness of breath. Seek emergency help for chest pain, fainting, or severe shortness of breath.'),
    element('h2', 'Exercise collection'),
  );
  const exercises = approvedExercises(category);
  if (exercises.length) {
    const list = document.createElement('ul');
    for (const exercise of exercises) {
      const entry = document.createElement('li');
      entry.append(externalLink(exercise.title + ' · ' + exercise.creator, exercise.url));
      list.append(entry);
    }
    collection.append(list);
  } else {
    collection.append(element('p', 'In development. Guided exercises will appear here after review.'));
  }
  if (category.creator) {
    collection.append(
      element('p', 'The creator channel is a reference while individual videos are reviewed.'),
      externalLink(category.creator.name + ' on YouTube', category.creator.channel),
    );
  }
  movement.append(collection);
  heading.focus();
}

entrance?.addEventListener('click', () => {
  Studio.cancelBreathing();
  document.body.classList.add('show-studio-grid', 'show-movement');
  movement.hidden = false;
  showCategories();
});
