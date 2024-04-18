import { products_10, all_products_10 } from './p1_data_10.js';

const productContainer = document.querySelector('.products-container');

console.log('products_10', products_10);

const DisplayProducts = (products_10) => {
  let DisplayProducts = products_10
    .map((item) => {
      const { id, title, price, category, img } = item;
      return `
      <div class="single-product">
        <img
          src="${img}"
          class="single-product-img img"
          alt="high-back bench"
        />
        <footer>
          <h3 class="name">${title} (${id})</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    </div>
     `;
    })
    .join('');
  productContainer.innerHTML = DisplayProducts;
};

document.addEventListener('DOMContentLoaded', () => {
  DisplayProducts(products_10);
});
