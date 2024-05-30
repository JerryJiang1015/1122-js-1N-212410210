// import { products_xx, all_products_xx } from './p1_data_xx.js';
 
import { _supabase } from './clientSupabase_10.js';
 
let products_10 = [];
 
// console.log('products_10', products_10);
const productContainer = document.querySelector('.products-container');
const companyBtns = document.querySelectorAll('.company-btn');
 
 
const getProductsSupabase_10 = async () => {
  try {
    let { data, error } = await _supabase.from('products_10').select('*, company_10(*)');
    // console.log('products data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
 
companyBtns.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    const companyName = e.currentTarget.dataset.id;
    console.log('companyName', companyName)
    const products = await getProductsSupabase_10();
    if (companyName === 'all') {  
      products_10 = products;  
    } else {
      products_10 = products.filter((product) => product.company_10.name ===
       companyName
      );
    }
    console.log(`${companyName} products`, products_10);
    displayProducts(products_10);
  });
});
 
const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { title, price, localImg } = product;
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