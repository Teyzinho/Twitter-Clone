
// Função de "Focus" na search
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


//  Dunção abrir msg-container
const msgheader = document.querySelector('.msg-header');
const msgBody = document.querySelector('.msg-body');
const arrows = document.querySelector('.arrows');
var open;

msgheader.addEventListener('click', () =>{
  msgOpen();
});

function msgOpen(){
  if(open){
    msgBody.style.height ='500px';
    arrows.style.transform = 'rotateX(180deg)'
    open = false
    console.log(true);
  }else{
    msgBody.style.height ='0';
    arrows.style.transform = 'rotateX(0deg)'
    open = true;
    console.log(false);
  }
}

//Função Stilização buttons
function changeButtonStyle(button) {
  // Remova a classe "active" de todos os botões dentro da div
  var buttons = document.querySelectorAll('.forU-follow-btn button');
  buttons.forEach(function(btn) {
    btn.classList.remove('btn-active');
  });

  // Adicione a classe "active" ao botão clicado
  button.classList.add('btn-active');
}