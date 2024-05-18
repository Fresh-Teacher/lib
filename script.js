const itemsPerPage = 12;
let currentPage = 1;
let searchTerm = '';
let allItems = [];
let loading = false;

async function fetchItems() {
    try {
        const response = await fetch('data.json');
        allItems = await response.json();
        displayItems();
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

function displayItems() {
    const container = document.getElementById('item-container');
    const loadingElement = document.getElementById('loading');
    const noResultsElement = document.getElementById('no-results');

    if (currentPage === 1) {
        container.innerHTML = ''; // Clear previous items if it's a new search
    }

    const filteredItems = allItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredItems.length === 0 && currentPage === 1) {
        noResultsElement.style.display = 'block';
        loadingElement.style.display = 'none';
        return;
    } else {
        noResultsElement.style.display = 'none';
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = filteredItems.slice(start, end);

    itemsToShow.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-4', 'mb-4');
        itemElement.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text"><strong>Price:</strong> $${item.price}</p>
                    <a href="${item.pdfUrl}" class="btn btn-primary" target="_blank">View PDF</a>
                </div>
            </div>
        `;
        container.appendChild(itemElement);
    });

    if (filteredItems.length > end) {
        loadingElement.style.display = 'none';
        loading = false;
    } else {
        loadingElement.style.display = 'none'; // Hide loading message if no more items
    }
}

function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        const loadingElement = document.getElementById('loading');
        loading = true;
        loadingElement.style.display = 'block';
        currentPage++;
        setTimeout(displayItems, 1000); // Simulate loading delay
    }
}

function handleSearch(event) {
    searchTerm = event.target.value;
    currentPage = 1;
    displayItems();
}

document.getElementById('search').addEventListener('input', handleSearch);
window.addEventListener('scroll', handleScroll);

fetchItems();
