$(document).ready(function() {
    let products = [];
    let filteredProducts = [];
    let itemsPerPage = 10;
    let currentPage = 1;
  
    function fetchProducts() {
      $.getJSON('data.json', function(data) {
        products = data;
        filteredProducts = products;
        displayProducts();
      });
    }
  
    function displayProducts() {
      let startIndex = (currentPage - 1) * itemsPerPage;
      let endIndex = startIndex + itemsPerPage;
      let itemsToShow = filteredProducts.slice(startIndex, endIndex);
  
      itemsToShow.forEach(item => {
        $('#product-grid').append(`
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">Price: $${item.price}</p>
                <a href="${item.pdfUrl}" class="btn btn-primary">View PDF</a>
              </div>
            </div>
          </div>
        `);
      });
  
      if (endIndex >= filteredProducts.length) {
        $('#loading-message').hide();
        $('#no-more-items-message').show();
      } else {
        $('#loading-message').show();
        $('#no-more-items-message').hide();
      }
  
      if (filteredProducts.length === 0) {
        $('#no-matches-message').show();
      } else {
        $('#no-matches-message').hide();
      }
  
      currentPage++;
    }
  
    function resetDisplay() {
      $('#product-grid').empty();
      currentPage = 1;
      displayProducts();
    }
  
    function handleSearch() {
      let query = $('#search-input').val().toLowerCase();
      filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
      resetDisplay();
    }
  
    $(window).scroll(function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
        displayProducts();
      }
    });
  
    $('#search-input').on('input', handleSearch);
  
    fetchProducts();
  });
  