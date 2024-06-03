import { _supabase } from './clientSupabase_10.js';

let project_10 = [];
let currentVideoIndex = 0;

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

const getAlbumSupabase = async () => {
  try {
    let { data, error } = await _supabase.from('Album').select('*');
    if (error) throw error;
    console.log('album data', data);
    return data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    return [];
  }
};

const tilesCenter = document.querySelector('.tiles-center');
const videoContainer = document.querySelector('#video-container');
const Btn = document.querySelectorAll('.btn');

Btn.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    const Name = e.currentTarget.dataset.id;
    console.log('Name', Name);
    if (Name === 'Video') {
      displayNextVideo();
    } else {
      let project = [];
      if (Name === 'Album') {
        project = await getAlbumSupabase();
      } else {
        project = await getprojectsSupabase_10();
        if (Name !== 'all') {
          project = project.filter((product) => product.company_10.name === Name);
        }
      }
      console.log(`${Name} project`, project);
      displayprojects(project);
    }
  });
});

const displayNextVideo = () => {
  if (project_10.length === 0) return;

  currentVideoIndex = (currentVideoIndex + 1) % project_10.length;
  const nextVideo = project_10[currentVideoIndex].video;
  videoContainer.innerHTML = nextVideo;
};

const displayprojects = (projects) => {
  let tilescenters = projects.map((project) => {
    const { name, id, img, link } = project;
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
