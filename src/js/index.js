import * as basicLightbox from 'basiclightbox';
// API
const apiKey = '38418747-ec354076649bfa1b688ea2611';
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&safesearch=true`;

const gallery = document.querySelector('.gallery');

let currentPage = 1;
let searchQuery = '';

// Fetch images from the API
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

// HTML markup 
const createGalleryItem = ({ preview, original, description }) => {
  return `
    <div class="photo-card">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
  `;
};

// open the image in a lightbox
const openModal = (url) => {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
  `);
  instance.show();
};

// render image cards 
const renderImageCards = (images) => {
  const cardsHTML = images.map(createGalleryItem).join('');
  gallery.innerHTML = cardsHTML;

  gallery.querySelectorAll('.gallery__image').forEach((image) => {
    image.addEventListener('click', (event) => {
      event.preventDefault();
      const largeImageURL = event.target.dataset.source;
      openModal(largeImageURL);
    });
  });

  const loadMoreBtn = document.querySelector('.load-more');
  loadMoreBtn.style.display = 'block';
};

// form submission
const handleFormSubmit = async (event) => {
  event.preventDefault();
  searchQuery = event.target.searchQuery.value.trim();
  currentPage = 1;

  const data = await fetchImages(searchQuery, currentPage);

  if (data && data.hits.length > 0) {
    renderImageCards(data.hits);
    loadMoreBtn.style.display = 'block';
  } else {
    gallery.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    alert('Sorry, there are no images matching your search query. Please try again.');
  }
};

// handle "Load more" 
const handleLoadMoreClick = async () => {
  const searchQuery = document.querySelector('[name="searchQuery"]').value.trim();
  const currentPage = document.querySelectorAll('.photo-card').length / 20 + 1; 

  const data = await fetchImages(searchQuery, currentPage);

  if (data && data.hits.length > 0) {
    const newImages = data.hits;
    renderImageCards(newImages);
  } else {
    loadMoreBtn.style.display = 'none';
    alert("We're sorry, but you've reached the end of search results.");
  }
};

const searchForm = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', handleLoadMoreClick);
 