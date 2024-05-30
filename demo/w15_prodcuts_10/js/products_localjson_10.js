// import { products_10, all_products_10 } from './p1_data_10.js';
 
import { _supabase } from './clientSupabase_10.js';
 
const url = './api/productsData.json'
 
let products_10 = [];
 
const fetchData = async (url) => {
  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    console.log('fetchData', data);
    return data ;
  } catch (error) {
    console.log('error', error);
  }
}
 
const productContainer = document.querySelector('.products-container');
 
console.log('products_10', products_10);
 
const displayProducts = (products) => {
  let productsContent = products.map((product) => {
    const { name,  price, image } = product.fields;
    return `
 <div class="single-product">
 <img
          src="${image[0].url}"
          class="single-product-img img"
          alt="${name}"
        />
 <footer>
 <h3 class="name">${name}</h3>
 <span class="price">${price}</span>
 </footer>
 </div>
    `;
  }).join('');
  productContainer.innerHTML = productsContent;
 };
 
document.addEventListener('DOMContentLoaded', async () => {
  products_10 = await fetchData(url);
  displayProducts(products_10);
});