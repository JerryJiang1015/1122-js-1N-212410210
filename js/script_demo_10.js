function showdemo(week) {
  const p = document.querySelector('.show-classdemo');
  console.log('p', p);
  switch (week) {
    case 'projects':
      p.innerHTML = `<iframe src="./project/products_supa_10.html" width="100%" height="100%" />`;
      break;
    case 'w1':
      p.innerHTML = `<iframe src="./demo/w01_dom_10/index.html" width="100%" height="100%" />`;
      break;
    case 'w2':
      p.innerHTML = `<iframe src="./demo/w02_titactoe_10/tictactoe.html" width="100%" height="100%" />`;
      break;
    case 'w3-p1':
      p.innerHTML = `<iframe src="./demo/w03_basics_10/p1_10/p1_10.html" width="100%" height="100%" />`;
      break;
    case 'w3-p2':
      p.innerHTML = `<iframe src="./demo/w03_basics_10/p2_10/p2_10.html" width="100%" height="100%" />`;
      break;
    case 'w3-p3':
      p.innerHTML = `<iframe src="./demo/w03_basics_10/p3_10/p3_10.html" width="100%" height="100%" />`;
      break;
    case 'w4-p4':
      p.innerHTML = `<iframe src="./demo/w04_basics_10/p4_10/p4_10.html" width="100%" height="100%" />`;
      break;
    case 'w4-p5':
      p.innerHTML = `<iframe src="./demo/w04_basics_10/p5_10/p5_10.html" width="100%" height="100%" />`;
      break;
    case 'w4-p6':
      p.innerHTML = `<iframe src="./demo/w04_basics_10/p6_10/p6_10.html" width="100%" height="100%" />`;
      break;
    case 'w5':
      p.innerHTML = `<iframe src="./demo/w05_menu_10/index_10.html" width="100%" height="100%" />`;
      break;
      case 'w6':
        p.innerHTML = `<iframe src="./demo/w06_menu_10/index_10.html" width="100%" height="100%" />`;
        break;
    case 'mid21_10-1':
      p.innerHTML = `<iframe src="./1122-1N-mid21/mid21_10/p1_10/p1_10.html" width="100%" height="100%" />`;
      break;
    case 'mid21_10-2':
      p.innerHTML = `<iframe src="./1122-1N-mid21/mid21_10/p2_10/p2_10.html" width="100%" height="100%" />`;
      break;
    case 'mid21_10-3':
      p.innerHTML = `<iframe src="./1122-1N-mid21/mid21_10/p3_10/p3_10.html#" width="100%" height="100%" />`;
      break;
      case 'w11-1':
      p.innerHTML = `<iframe src="./demo/w11-async_js_10/1-synchronous/index.html" width="100%" height="100%" />`;
      break;
      case 'w11-2':
        p.innerHTML = `<iframe src="./demo/w11-async_js_10/2-recipe-example/index.html" width="100%" height="100%" />`;
        break;
        case 'w11-3':
      p.innerHTML = `<iframe src="./demo/w11-async_js_10/3-async-cb-hell/index.html" width="100%" height="100%" />`;
      break;
      case 'w11-4':
      p.innerHTML = `<iframe src="./demo/w11-async_js_10/4-dom-cb-example/index.html" width="100%" height="100%" />`;
      break;
      case 'w11-5':
      p.innerHTML = `<iframe src="./demo/w11-async_js_10/5-promise-demo/index.html" width="100%" height="100%" />`;
      break;
      case 'w11-6':
      p.innerHTML = `<iframe src="./demo/w11-async_js_10/6-promise-astnc-await/index.html" width="100%" height="100%" />`;
      break;
      case 'w12-1':
      p.innerHTML = `<iframe src="./demo/w12_ajax_10/1_sample-txt/index.html" width="100%" height="100%" />`;
      break;
      case 'w12-2':
        p.innerHTML = `<iframe src="./demo/w12_ajax_10/2_sample-txt/index.html" width="100%" height="100%" />`;
        break;
        case 'w12-3':
          p.innerHTML = `<iframe src="./demo/w12_ajax_10/3_json-people/index.html" width="100%" height="100%" />`;
      break;
      case 'w12-4':
        p.innerHTML = `<iframe src="./demo/w12_ajax_10/4_json-people_fetch_api/index.html" width="100%" height="100%" />`;
      break;
      case 'w12-5':
        p.innerHTML = `<iframe src="./demo/w12_ajax_10/5_json-people_async_await/index.html" width="100%" height="100%" />`;
      break;
      case 'w13-1':
        p.innerHTML = `<iframe src="./demo/w13_menu_10/menuLocalJson_10.html" width="100%" height="100%" />`;
      break;
      case 'w13-2':
        p.innerHTML = `<iframe src="./demo/w13_menu_10/menuSupa.html" width="100%" height="100%" />`;
      break;
      case 'w14-1':
        p.innerHTML = `<iframe src="./demo/w14_store_10/p1_supa_10.html" width="100%" height="100%" />`;
      break;
      case 'w14-2':
        p.innerHTML = `<iframe src="./demo/w14_store_10/products_api_10.html" width="100%" height="100%" />`;
      break;
      case 'w14-3':
        p.innerHTML = `<iframe src="./demo/w14_store_10/products_localJson_10.html" width="100%" height="100%" />`;
      break;
      case 'w14-4':
        p.innerHTML = `<iframe src="./demo/w14_store_10/products_supa_10.html" width="100%" height="100%" />`;
      break;
      case 'w15-1':
        p.innerHTML = `<iframe src="./demo/w15_prodcuts_10/products_supa_10.html" width="100%" height="100%" />`;
      break;
  }
}
