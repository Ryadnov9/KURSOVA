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


document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  let query = document.getElementById("searchInput").value; // Получаем значение поискового запроса
  // Здесь можно выполнить какие-то действия с поисковым запросом, например, отправить его на сервер или обработать локально
  console.log("Поиск:", query);
  // В данном примере просто выводим запрос в консоль
});