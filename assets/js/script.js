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

/*Обновление страницы*/
window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});


/*Поиск*/
function performSearch(query) {
  var searchResults = document.getElementById('searchResults');
  var results = [];

  // Очистка результатов предыдущего поиска
  searchResults.innerHTML = '';

  if (query.trim() !== '') {
      // Поиск элементов на странице, содержащих запрос
      var elements = document.querySelectorAll('*:contains("' + query + '")');
      
      // Перебор найденных элементов
      elements.forEach(function(element) {
          // Создание ссылки для перехода к элементу
          var link = document.createElement('a');
          link.textContent = 'Найдено: ' + element.tagName;
          link.href = '#' + element.id;
          link.classList.add('searchResultLink');

          // Добавление ссылки к результатам поиска
          searchResults.appendChild(link);

          // Добавление найденного элемента к результатам поиска (необязательно)
          searchResults.appendChild(document.createElement('br'));
      });
  } else {
      // В случае пустого запроса можно предпринять соответствующие действия, например, отображение сообщения об ошибке
      searchResults.textContent = 'Введите текст для поиска';
  }
}



