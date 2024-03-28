import menu from './data_10.js';

const sectionCenter = document.querySelector('.section-center');

console.log('menu', menu);

const displayMenuItems = (menu) => {
  let displayMenuItems = menu
    .map((item) => {
      const { id, title, category, price, img, desc } = item;
      return `
        <article class="menu-item">
          <img
            src=${img}
            alt="${title}"
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>${title}</h4>
              <h4 class="price">$${price}</h4>
            </header>
            <p class="item-text">
              ${desc}
            </p>
          </div>
        </article>
      `;
    })
    .join('');
  // console.log('displayMenu', displayMenuItems);
  sectionCenter.innerHTML = displayMenuItems;
};

const btnContainer = document.querySelector('.btn-container');
// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];
const menuCategories = new Set(
  menu.map((item) => {
    return item.category;
  })
);
console.log('menuCategories', menuCategories);

const categories = ['all', ...menuCategories];
console.log('categories', categories);

// categories.forEach((category) => {
//   const button = document.createElement('button');
//   button.type = 'button';
//   button.classList.add('filter-btn');
//   button.dataset.id = category;
//   button.textContent = category;

//   btnContainer.appendChild(button);
// });

const displayMenuButtons = () => {
  let menuButtons = categories
    .map((category) => {
      return `
    <button type="button" class="filter-btn" data-id="${category}">${category}</button
    >
    `;
    })
    .join('');
  console.log('menuButtons', menuButtons);
  btnContainer.innerHTML = menuButtons;
};

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});
