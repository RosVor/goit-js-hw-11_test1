import Notiflix from 'notiflix';
import * as basicLightbox from 'basiclightbox';
import axios from 'axios';
const apiKey = '38418747-ec354076649bfa1b688ea2611';
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&safesearch=true`;

const gallery = document.querySelector('.gallery');
const searchForm = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let searchQuery = '';

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(`${apiUrl}&q=${query}&page=${page}&per_page=40`);
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const createGalleryItem = ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
  return `
    <div class="photo-card">
      <a class="gallery__link" href="#">
        <img
          class="gallery__image"
          src="${webformatURL}"
          data-source="${largeImageURL}"
          alt="${tags}"
        />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${likes}</p>
        <p class="info-item"><b>Views:</b> ${views}</p>
        <p class="info-item"><b>Comments:</b> ${comments}</p>
        <p class="info-item"><b>Downloads:</b> ${downloads}</p>
      </div>
    </div>
  `;
};

const appendImageCards = (images) => {
  const cardsHTML = images.map(createGalleryItem).join('');
  gallery.insertAdjacentHTML('beforeend', cardsHTML);

  loadMoreBtn.style.display = images.length > 0 ? 'block' : 'none';
};

const renderImageCards = (images) => {
  if (gallery.childElementCount === 0) {
    appendImageCards(images);
  } else {
    loadMoreBtn.style.display = images.length > 0 ? 'block' : 'none';
  }
};

const handleFormSubmit = async (event) => {
  event.preventDefault();
  searchQuery = event.target.searchQuery.value.trim();
  currentPage = 1;

  try {
    const data = await fetchImages(searchQuery, currentPage);

    if (data && data.hits.length > 0) {
      renderImageCards(data.hits);
    } else {
      gallery.innerHTML = '';
      loadMoreBtn.style.display = 'none';
      Notiflix.Notify.warning('Sorry, there are no images matching your search query. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    Notiflix.Notify.failure('Error fetching images. Please try again later.');
  }
};

const handleLoadMoreClick = async () => {
  currentPage++;

  try {
    const data = await fetchImages(searchQuery, currentPage);

    if (data && data.hits.length > 0) {
      appendImageCards(data.hits);
    } else {
      loadMoreBtn.style.display = 'none';
      Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    Notiflix.Notify.failure('Error fetching images. Please try again later.');
  }
};

searchForm.addEventListener('submit', handleFormSubmit);

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target;

  if (target.classList.contains('gallery__image')) {
    const largeImageURL = target.dataset.source;
    openModal(largeImageURL);
  }
});

loadMoreBtn.addEventListener('click', handleLoadMoreClick);

const openModal = (url) => {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="900">
  `);
  instance.show();
};