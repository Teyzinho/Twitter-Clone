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