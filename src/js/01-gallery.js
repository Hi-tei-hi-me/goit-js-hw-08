import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryMarkup = galleryItems.map(picture => {
  return /*html*/ `<li><a class="gallery__item" href="${picture.original}" onclick="event.preventDefault()">
    <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
  </a></li>`;
});

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', galleryMarkup.join(''));

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
