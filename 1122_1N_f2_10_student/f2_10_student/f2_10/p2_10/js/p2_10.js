import { _supabase } from './clientSupabase_10.js';

let mens_10 = [];

const getProductsSupabase_10 = async () => {
  try {
    let { data, error } = await _supabase.from('store_f2_10');
    console.log('store_f2_10 data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const items = document.querySelector('.items');

console.log('mens_10', mens_10);

const displaymens = (mens) => {
  let mensContent = mens
    .map((men) => {
      const { id, name, category_id, price, local_img, remote_img } = men;
      return `
        <div class="collection-item">
            <img class="image" src="${remote_img}" />
            <div class="collection-footer">
              <span class="name">${name} Vest</span>
              <span class="price">${price}</span>
            </div>
            <button class="custom-button">Add to Cart</button>
          </div>
    `;
    })
    .join('');
  items.innerHTML = mensContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_10 = await getProductsSupabase_10();
  displaymens(products_10);
});
