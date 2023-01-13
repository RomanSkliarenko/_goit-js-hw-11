import ApiServiceClass from './apiServiceClass.js';
import createCard from './createGalleryItem';
import Notiflix from 'notiflix';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const { gallery, searchQueryForm, moreBtn } = {
  gallery: document.querySelector('.gallery'),
  searchQueryForm: document.querySelector('#search-form'),
  moreBtn: document.querySelector('.load-more'),
};

const fetchService = new ApiServiceClass();

const searchQuery = async function(e) {
  e.preventDefault();
  moreBtn.classList.add('is-hidden')
  gallery.innerHTML = '';
  fetchService.page = 1;
  fetchService.query = e.target.elements.searchQuery.value;

  try {
    const { data } = await fetchService.searchImageFetch();
    const { hits, totalHits } = data;

    if (hits.length > 0) {
      totalHits > 40 ? moreBtn.classList.remove('is-hidden') : null
      Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
      hits.forEach((item) => createCard(item));
      new SimpleLightbox('.card a', {
        'captions':true,
        'captionsData':'alt',
        'captionPosition':'bottom',
        'captionDelay':250,
      })
    } else {
      Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again.`);
    }
  } catch ({ message }) {
    Notiflix.Notify.failure(`${message}`);
  }
};

const moreImage = async function(e) {
  fetchService.page += 1;
  try {
    const { data } = await fetchService.searchImageFetch();
    const { hits } = data;
    if (hits.length > 0) {
      hits.forEach((item) => createCard(item));
      const slb = new SimpleLightbox('.card a', {
        'captions':true,
        'captionsData':'alt',
        'captionPosition':'bottom',
        'captionDelay':250,
      })
      slb.refresh()
    } else {
      Notiflix.Notify.failure(`We're sorry, but you've reached the end of search results.`);
      moreBtn.classList.add('is-hidden')
      return;
    }
  } catch ({ message }) {
    Notiflix.Notify.failure(`${message}`);
  }
  setTimeout(() => {
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }, 500);
};

searchQueryForm.addEventListener('submit', searchQuery);
moreBtn.addEventListener('click', moreImage);
