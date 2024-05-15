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



