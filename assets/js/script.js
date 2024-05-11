document.querySelectorAll('#footer-custom-style .col').forEach(col => col.style.marginBottom = '0');
document.querySelectorAll('#footer-custom-style .nav-item').forEach(item => item.style.marginBottom = '0');
document.querySelectorAll('#footer-custom-style .nav-link').forEach(link => {
    link.style.paddingTop = '0';
    link.style.paddingBottom = '0';
});
/*Стрелка */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
}

document.getElementById("scroll-to-top").onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*Скрол*/
/*Скрол*/
window.addEventListener('scroll', function() {
  var container = document.querySelector('.container');
  var scrollPosition = window.scrollY;
  var containerOffsetTop = container.offsetTop;
  var windowHeight = window.innerHeight;

  if (scrollPosition > containerOffsetTop - windowHeight / 2) {
    container.style.opacity = '1';
  } else {
    container.style.opacity = '0';
  }
});

window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});

const searchForm = document.getElementById('search-form');
const searchQueryInput = document.getElementById('search-query');
const searchResultsDiv = document.getElementById('search-results');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const query = searchQueryInput.value.toLowerCase();
  const results = [];

  // Replace this with your actual search logic (consider using libraries like Lunr.js for better performance)
  // This is a basic example searching for the query in page titles

  const pageTitles = document.querySelectorAll('title');
  for (const title of pageTitles) {
    if (title.textContent.toLowerCase().includes(query)) {
      results.push({
        url: location.href, // Assuming the search happens on the current page
        title: title.textContent
      });
    }
  }

  // Display search results
  searchResultsDiv.innerHTML = '';
  if (results.length === 0) {
    searchResultsDiv.innerHTML = '<p>Ничего не найдено.</p>';
  } else {
    const ul = document.createElement('ul');
    for (const result of results) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = result.url;
      link.textContent = result.title;
      li.appendChild(link);
      ul.appendChild(li);
    }
    searchResultsDiv.appendChild(ul);
  }
});




