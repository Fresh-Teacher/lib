$(document).ready(function() {
    let items = [];
    let filteredItems = [];
    let currentIndex = 0;
    const itemsPerPage = 10;
  
    // Fetch the data
    $.getJSON('data.json', function(data) {
      items = data;
      filteredItems = items;
      loadItems();
    });
  
    // Load items
    function loadItems() {
      const container = $('#items-container');
      const spinner = $('.spinner');
      const endMessage = $('#end-of-content');
      const noResultsMessage = $('#no-results');
  
      if (filteredItems.length === 0) {
        noResultsMessage.show();
        spinner.hide();
        endMessage.hide();
        return;
      } else {
        noResultsMessage.hide();
      }
  
      // Show spinner while loading
      spinner.show();
  
      setTimeout(() => {
        const endIndex = currentIndex + itemsPerPage;
  
        filteredItems.slice(currentIndex, endIndex).forEach((item, index) => {
          const pdfId = "read" + (currentIndex + index + 1);
          const pdfUrl = item.pdfUrl;
          const fileName = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1).replace(".pdf", "");
          const title = fileName.toUpperCase(); // Capitalize the extracted file name
          const description = item.description;
  
          const pdfSection = `
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <h3 id="title${currentIndex + index + 1}">${title}</h3>
                  <p class="description">${description}</p>
                  <p>Price: <span class="price"><del>${item.price}</del></span> <span class="free-text">FREE</span></p>
                  <div class="button">
                    <a id="${pdfId}" class="btn btn-primary mt-2 mr-2 text-white">View File <i class="fas fa-book-reader fa-lg"></i></a>
                    <a href="${pdfUrl}" class="btn btn-info mt-2 text-white" download>Download File <i class="fas fa-download fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>`;
  
          container.append(pdfSection);
  
          $("#" + pdfId).flipBook({
            pdfUrl: pdfUrl,
            lightBox: true,
            layout: 3,
            currentPage: {
              vAlign: "bottom",
              hAlign: "left"
            },
            btnShare: { enabled: false },
            btnPrint: { enabled: false },
            btnDownloadPages: { enabled: false },
            btnColor: 'rgb(255,120,60)',
            sideBtnColor: 'rgb(255,120,60)',
            sideBtnSize: 60,
            sideBtnBackground: "rgba(0,0,0,.7)",
            sideBtnRadius: 60,
            btnSound: {
              vAlign: "top",
              hAlign: "left"
            },
            btnAutoplay: {
              vAlign: "top",
              hAlign: "left"
            },
          });
        });
  
        currentIndex = endIndex;
        spinner.hide();
  
        if (currentIndex >= filteredItems.length) {
          endMessage.show();
        } else {
          endMessage.hide();
        }
      }, 500); // Simulate loading time
    }
  
    // Infinite scroll
    $(window).scroll(function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
        loadItems();
      }
    });
  
    // Search functionality
    $('#search').on('input', function() {
      const searchTerm = $(this).val().toLowerCase();
      filteredItems = items.filter(item => {
        const title = item.pdfUrl.substring(item.pdfUrl.lastIndexOf("/") + 1).replace(".pdf", "").toLowerCase();
        const description = item.description.toLowerCase();
        return title.includes(searchTerm) || description.includes(searchTerm);
      });
      currentIndex = 0;
      $('#items-container').empty();
  
      if (filteredItems.length === 0) {
        $('#no-results').show();
        $('#end-of-content').hide();
      } else {
        $('#no-results').hide();
        loadItems();
      }
    });
  });
  