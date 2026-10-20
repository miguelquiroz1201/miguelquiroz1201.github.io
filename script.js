const viewer = document.querySelector('.lightbox');
const viewerImage = viewer.querySelector('img');
const viewerCaption = viewer.querySelector('p');
const closeButton = viewer.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    viewerImage.src = button.dataset.lightbox;
    viewerImage.alt = button.querySelector('img').alt;
    viewerCaption.textContent = button.dataset.caption || '';
    viewer.showModal();
  });
});

closeButton.addEventListener('click', () => viewer.close());
viewer.addEventListener('click', (event) => {
  if (event.target === viewer) viewer.close();
});
viewer.addEventListener('close', () => viewerImage.removeAttribute('src'));
