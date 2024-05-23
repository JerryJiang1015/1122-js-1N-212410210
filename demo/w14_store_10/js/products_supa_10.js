// import { products_10, all_products_10 } from './p1_data_10.js';

import { _supabase } from './clientSupabase_10.js';

let products_10 = [];

const getProductsSupabase_10 = async () => {
  try {
    let { data, error } = await _supabase.from('products_10').select('*');
    console.log('products data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const productContainer = document.querySelector('.products-container');

console.log('products_10', products_10);

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const {title, price,localImg} = product;
      return `
        <div class="single-product">
        <img
          src=${localImg}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${title}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_10 = await getProductsSupabase_10();
  displayProducts(products_10);
});
