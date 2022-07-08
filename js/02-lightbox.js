import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryBoxEl = document.querySelector('.gallery');

const galleryItemsEl = galleryItems.map(el => {
  return `
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>`;
});

galleryBoxEl.insertAdjacentHTML('afterbegin', galleryItemsEl.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
