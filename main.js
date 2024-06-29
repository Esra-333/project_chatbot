//ELEMENTS
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');
var httpRequest = new XMLHttpRequest();

setTimeout(function() {
    chatbotSendMessage('I am a chatbot');
}, 1000);

function chatbotSendMessage() {
    if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
        var result = JSON.parse(httpRequest.responseText);

        var messageElement = document.createElement('div');
        messageElement.classList.add('w-50');
        messageElement.classList.add('float-start');
        messageElement.classList.add('shadow-sm');
        messageElement.classList.add('border');
        messageElement.style.margin = "10px";
        messageElement.style.padding = "5px";

        messageElement.innerHTML = "<span>chatbot: </span>" +
            "<span style='margin-top:10px; padding:10px'>" + result.response_message + "</span>";

        messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 });

        chatContainer.appendChild(messageElement);
    } else {
        //alert('error');
    }
}

function sendMessage(messageText) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-end');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('border');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>you: </span>" +
        "<span style='margin-top:10px; padding:10px'>" + messageText + "</span>";

    messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 });
    chatContainer.appendChild(messageElement);

    makerRequest(messageText);
}

function makerRequest(messageText) {
    httpRequest.onreadystatechange = chatbotSendMessage;
    httpRequest.open('GET', 'chatbot.php?message=' + encodeURIComponent(messageText), true);
    httpRequest.send();
}

sendBtn.addEventListener('click', function (e) {
    if (textbox.value == "") {
        alert("please text message");
    } else {
        let messageText = textbox.value;
        sendMessage(messageText);
        textbox.value = "";
    }
});