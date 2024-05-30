// import { products_xx, all_products_xx } from './p1_data_xx.js';
 
import { _supabase } from './clientSupabase_10.js';
 
let products_10 = [];
 
const getProductsSupabase_10 = async () => {
  try {
    let { data, error } = await _supabase.from('products_10').select('*, company_10(*)');
    console.log('products data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
 
const productContainer = document.querySelector('.products-container');
const companyBtns = document.querySelectorAll('.company-btn');
 
console.log('products_10', products_10);
 
const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { title, price, remoteImg } = product;
      return `
        <div class="single-product">
        <img
          src=${remoteImg}
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
 
companyBtns.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    const companyName = e.currentTarget.dataset.id;
    console.log('companyName', companyName)
    if (companyName === 'all') {  
      products_10 = await getProductsSupabase_10();
    } else {
      let { data: company, error1 } = await _supabase
        .from('company_10')
        .select('id')
        .eq('name', companyName);
      console.log('company id', company[0].id);
      let { data, error2 } = await _supabase
      .from('products_10')
      .select('*')
      .eq('companyId', company[0].id);
    console.log(`${companyName} products`, data);
    products_10 = data;
    }
    displayProducts(products_10);
  });
});
 
document.addEventListener('DOMContentLoaded', async () => {
  products_10 = await getProductsSupabase_10();
  displayProducts(products_10);
});