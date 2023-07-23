// API
const apiKey = '38418747-ec354076649bfa1b688ea2611';
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&safesearch=true`;

const gallery = document.querySelector('.gallery');

let currentPage = 1;
let searchQuery = '';
// the API request
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

// render image cards
const renderImageCards = (images) => {
  const cardsHTML = images.map((image) => `
    <div class="photo-card">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${image.likes}</p>
        <p class="info-item"><b>Views:</b> ${image.views}</p>
        <p class="info-item"><b>Comments:</b> ${image.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </div>
  `).join('');

  gallery.innerHTML = cardsHTML;
};

const loadMoreBtn = document.querySelector('.load-more');
loadMoreBtn.style.display = 'block';

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

// "Load more" 
const handleLoadMoreClick = async () => {
  const searchQuery = document.querySelector('[name="searchQuery"]').value.trim();
  const currentPage = document.querySelectorAll('.photo-card').length / 20 + 1; // Залежно від кількості завантажених зображень

  const data = await fetchImages(searchQuery, currentPage);

  if (data && data.hits.length > 0) {
    const newImages = data.hits;
    renderImageCards(newImages);
  } else {
    const loadMoreBtn = document.querySelector('.load-more');
    loadMoreBtn.style.display = 'none';
    alert("We're sorry, but you've reached the end of search results.");
  }
};

const searchForm = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', handleLoadMoreClick);
 