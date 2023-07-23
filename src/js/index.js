import * as basicLightbox from 'basiclightbox';
// API
const apiKey = '38418747-ec354076649bfa1b688ea2611';
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&safesearch=true`;

const gallery = document.querySelector('.gallery');
const searchForm = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let searchQuery = '';

const fetchImages = async (query, page) => {
  try {
    const response = await fetch(`${apiUrl}&q=${query}&page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const createGalleryItem = ({ previewURL, largeImageURL, tags, likes, views, comments, downloads }) => {
  return `
    <div class="photo-card">
      <a class="gallery__link" href="${largeImageURL}">
        <img
          class="gallery__image"
          src="${previewURL}"
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

const openModal = (url) => {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
  `);
  instance.show();
};

const renderImageCards = (images) => {
  const cardsHTML = images.map(createGalleryItem).join('');
  gallery.innerHTML += cardsHTML;

  gallery.querySelectorAll('.gallery__image').forEach((image) => {
    image.addEventListener('click', (event) => {
      event.preventDefault();
      const largeImageURL = event.target.dataset.source;
      openModal(largeImageURL);
    });
  });

  loadMoreBtn.style.display = images.length > 0 ? 'block' : 'none';
};

const handleFormSubmit = async (event) => {
  event.preventDefault();
  searchQuery = event.target.searchQuery.value.trim();
  currentPage = 1;

  const data = await fetchImages(searchQuery, currentPage);

  if (data && data.hits.length > 0) {
    renderImageCards(data.hits);
  } else {
    gallery.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    alert('Sorry, there are no images matching your search query. Please try again.');
  }
};

const handleLoadMoreClick = async () => {
  currentPage++;
  const data = await fetchImages(searchQuery, currentPage);

  if (data && data.hits.length > 0) {
    const newImages = data.hits;
    renderImageCards(newImages);
  } else {
    loadMoreBtn.style.display = 'none';
    alert("We're sorry, but you've reached the end of search results.");
  }
};

searchForm.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', handleLoadMoreClick);