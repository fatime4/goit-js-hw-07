'use strict';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBoxEl = document.querySelector('.gallery');

const galleryItemsEl = galleryItems.map(el => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`;
});

galleryBoxEl.insertAdjacentHTML('afterbegin', galleryItemsEl.join(''));

const imageClickEvent = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largePicture = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largePicture}" width="800" height="600">
`);

  instance.show();

  window.addEventListener('keydown', onEscBtnPush);

  function onEscBtnPush(event) {
    if (event.code !== 'Escape') {
      return;
    }
    instance.close();
  }
};
galleryBoxEl.addEventListener('click', imageClickEvent);
