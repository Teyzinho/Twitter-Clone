
//Função de "Focus" na search
const searchform = document.querySelector(".search-form");
const search = document.getElementById("search");

search.addEventListener('focus', function () {
    searchform.style.border = "1px solid rgb(29, 155, 240)";
    searchform.style.color = "rgb(29, 155, 240)";
});

search.addEventListener('blur', function () { // Remove as propriedade
    searchform.style.border = "none"; 
    searchform.style.color = "darkgrey";
});

//Função de scroll do lado Direito
const scrollDiv = document.querySelector('.search-content-box');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    scrollDiv.style.transform = 'translateY(-100px)';
  } else {
    scrollDiv.style.transform = 'translateY(0)';
  }
});