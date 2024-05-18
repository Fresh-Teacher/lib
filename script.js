let currentPage = 1;
const itemsPerPage = 10;
const bufferSize = 30;
const container = document.getElementById('item-container');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

// Function to fetch data from local data.json file
const fetchData = async () => {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
};

const loadItems = async (page, data) => {
  loading.style.display = 'block';
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * itemsPerPage;
      const end = page * itemsPerPage;
      const items = data.slice(start, end);
      loading.style.display = 'none';
      resolve(items);
    }, 500); // Simulate a delay
  });
};

const renderItems = (items) => {
  items.forEach(item => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4 mb-4';
    colDiv.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text">Price: $${item.price}</p>
          <a href="${item.pdfUrl}" class="btn btn-primary" target="_blank">View PDF</a>
        </div>
      </div>
    `;
    container.appendChild(colDiv);
  });
};

const handleScroll = (data) => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loadMoreItems(data);
  }
};

const loadMoreItems = async (data) => {
  if (container.childElementCount >= data.length) {
    return;
  }

  try {
    const items = await loadItems(currentPage, data);
    renderItems(items);
    currentPage++;
  } catch (error) {
    showError();
  }
};

const showError = () => {
  error.style.display = 'block';
};

const initialize = async () => {
  try {
    const data = await fetchData();
    loadMoreItems(data);
    window.addEventListener('scroll', () => handleScroll(data));
  } catch (error) {
    showError();
  }
};

// Initial load
initialize();
