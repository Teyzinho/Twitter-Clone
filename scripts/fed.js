
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

// //Função de scroll do lado Direito
// const scrollDiv = document.querySelector('.search-content-box');

// window.addEventListener('scroll', function() {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > 0) {
//     scrollDiv.style.transform = 'translateY(-100px)';
//   } else {
//     scrollDiv.style.transform = 'translateY(0)';
//   }
// });

// *************************************Abrir post*************************************


const posts = document.querySelectorAll('.postage');
const postModal = document.getElementById('fullscreen-postage');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.querySelector('.close');

// Função para abrir o post em tela cheia
function openPostModal(postContent) {
  postModal.style.display = 'block';
  postModal.querySelector('.profile-id').textContent = postContent.querySelector('.profile-id').textContent;
  postModal.querySelector('.postage-title').textContent = postContent.querySelector('.postage-title').textContent;
  postModal.querySelector('.profile-name').textContent = postContent.querySelector('.profile-name').textContent;
  postModal.querySelector('.profile-picture').src = postContent.querySelector('.profile-picture').src;
  postModal.querySelector('.postage-img').src = postContent.querySelector('.postage-img').src;

}

// Função para fechar o post em tela cheia
function closePostModal() {
  postModal.style.display = 'none';
}

// Adicionando eventos de clique nos posts
posts.forEach(post => {
  post.addEventListener('click', () => {
    openPostModal(post);
  });
});

closeBtn.addEventListener('click', closePostModal);

// msg-container
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

function changeButtonStyle(button) {
  // Remova a classe "active" de todos os botões dentro da div
  var buttons = document.querySelectorAll('.forU-follow-btn button');
  buttons.forEach(function(btn) {
    btn.classList.remove('btn-active');
  });

  // Adicione a classe "active" ao botão clicado
  button.classList.add('btn-active');
}