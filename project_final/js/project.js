import { _supabase } from './clientSupabase_10.js';

let project_10 = [];

const getprojectsSupabase_10 = async () => {
  try {
    let { data, error } = await _supabase.from('project_10').select('*');
    if (error) throw error;
    console.log('project data', data);
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

const tilesCenter = document.querySelector('.tiles-center');

const displayprojects = (projects) => {
  let tilescenters = projects.map((project) => {
    const {name, id, img ,link} = project;
    return `
    <section class="tile-${id}">
      <div class="homeimg-container">
        <img src="${img}" alt="${id}" class="homeimg">
        <a class="img-text" href="${link}">${name}</a>
      </div>
    </section>
    `;
  }).join('');
  tilesCenter.innerHTML = tilescenters;
s
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
};

document.addEventListener('DOMContentLoaded', async () => {
  project_10 = await getprojectsSupabase_10();
  console.log('Loaded project_10', project_10);
  displayprojects(project_10);
});


