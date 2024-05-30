import { _supabase } from './clientSupabase_10.js';

let products_10 = [];

const getProductsSupabase_10 = async () => {
  try {
    let { data, error } = await _supabase.from('product_10').select('*');
    console.log('product data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const tilesCenter = document.querySelector('.tiles-center');
 
console.log('products_10', products_10);
 
const displayProducts = (products) => {
  let tilescenters = products.map((product) => {
    const { name,  id, img } = product.fields;
    return `
    <section class="tile-${id}">
    <div class="homeimg-container">
        <img src="${img}" alt="${id}" class="homeimg">
        <a class="img-text">${name}</a>
    </div>
</section>
    `;
  }).join('');
  tilesCenter.innerHTML = tilescenters;
 };
 
document.addEventListener('DOMContentLoaded', async () => {
    products_10 = await getProductsSupabase_10();
  displayProducts(products_10);
});

const images = document.querySelectorAll('.homeimg-container');

images.forEach(imageContainer => {
    const imgText = imageContainer.querySelector('.img-text');

    imageContainer.addEventListener('mouseenter', () => {
        imgText.classList.add('visible');
    });

    imageContainer.addEventListener('mouseleave', () => {
        imgText.classList.remove('visible');
    });
});


