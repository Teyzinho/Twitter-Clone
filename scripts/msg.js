function sendMessage(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Obtém o valor do campo de entrada de texto
    var messageInput = document.getElementById("texto");
    var messageText = messageInput.value;

    // Cria um novo elemento <p> com a classe 'msg-me' e insere o texto dentro
    var newMessage = document.createElement("p");
    newMessage.className = "msg-me";
    newMessage.textContent = messageText;

    // Obtém a <div class="body"> usando o identificador único e anexa o novo elemento <p>
    var messageBody = document.getElementById("messageBody");
    messageBody.appendChild(newMessage);

    // Limpa o campo de entrada de texto
    messageInput.value = "";
}

//Abrir e fechar msg container

const msgProfile = document.querySelector('.msg-content');
const msgSelected = document.querySelector('.selected');
const nonSelected = document.querySelector('.non-selected');
const pflContainer = document.querySelector('.msgs-persons');
const msgContainer = document.querySelector('.msgs-container');
const closeBtn = document.querySelector('.close-btn');

var ativo = false;

msgProfile.addEventListener('click', () => {
    var altura = window.screen.width;

    msgSelected.style.display = 'block';
    nonSelected.style.display = 'none';

    if (altura < 1000) {
        pflContainer.style.display = 'none';
        msgContainer.style.display = 'block';
    }
    ativo = true;

});

closeBtn.addEventListener('click', () =>{
    var altura = window.screen.width;
    msgSelected.style.display = 'none';
    nonSelected.style.display = 'flex';

    if (altura < 1000) {
        pflContainer.style.display = 'block';
        msgContainer.style.display = 'none';
    }
    ativo = false;
});



window.addEventListener('resize', () => {
    var altura = window.screen.width;
    if (altura > 1000) {
        pflContainer.style.display = 'block';
    }
    if(ativo && altura < 1000){
        pflContainer.style.display = 'none';
        msgContainer.style.display = 'block';
    }else{
        pflContainer.style.display = 'block';
    }

    if(!ativo && altura < 1000){
        msgContainer.style.display = 'none';
    }else{
        msgContainer.style.display = 'block';
    }
});