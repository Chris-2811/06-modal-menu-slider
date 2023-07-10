const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const ctaBtn = document.getElementById('open-modal');
const modalContainer = document.getElementById('modal-container');
const form = document.getElementById('submit');
const modal = document.getElementById('modal');

// Add Eventlistener
toggleBtn.addEventListener('click', (e) => {
  document.body.classList.toggle('show-nav');
});

ctaBtn.addEventListener('click', (e) => {
  modalContainer.classList.add('show-modal');
});

closeBtn.addEventListener('click', (e) => {
  modalContainer.classList.remove('show-modal');
});

window.addEventListener('click', (e) => {
  e.target == modalContainer
    ? modalContainer.classList.remove('show-modal')
    : false;
});
