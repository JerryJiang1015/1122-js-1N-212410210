const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModals = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = (modalId) => {
  const pModal = document.querySelector(`.${modalId}`);
  console.log('pModal', pModal);
  pModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModals = () => {
  modals.forEach((modal) => {
    modal.classList.add('hidden');
  });
  console.log('modals', modals);
  overlay.classList.add('hidden');
};



const closeAllModals = () => {
  modals.forEach((modal) => {
    modal.classList.add('hidden');
  });
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const modalId = e.currentTarget.dataset.id;
    console.log('modalId', modalId);
    openModal(modalId);
  });
});

btnCloseModals.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    closeModals(e.currentTarget.closest('.modal').dataset.id);
  });
});

overlay.addEventListener('click', closeAllModals);
