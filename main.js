
//ELEMENTS
var sendBtn = document.getElementById('sendBtn');

var textbox = document.getElementById('textbox');

var chatContainer = document.getElementById('chatContainer');


setTimeout(function() {
    chatbotSendMessage('i am chatbot');
   
},2000);


function chatbotSendMessage(messageText){
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-start');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('border');
    messageElement.style.margin ="10px";
    messageElement.style.padding ="5px";

    messageElement.innerHTML = "<span>chatbot: </span>"+
    "<span style="+"margin-top:10px; padding:10px"+">" + messageText +"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});

    chatContainer.appendChild(messageElement);





}


function sendMessage(messageText){
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-end');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('border');
    messageElement.style.margin ="10px";
    messageElement.style.padding ="5px";

    messageElement.innerHTML = "<span>you: </span>"+
    "<span style="+"margin-top:10px; padding:10px"+">" + messageText +"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
    chatContainer.appendChild(messageElement);

    makerRequest(messageText);





}

function makerRequest(messageText){
    //ajax

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET','',true);
    httpRequest.send();
    httpRequest.onreadystatechange = chatbotSendMessage;



}







sendBtn.addEventListener('click', function(e){

    if(textbox.value == ""){
        alert("please text message");
    }else{
    let messageText = textbox.value;
    sendMessage(messageText);
    textbox.value = "";
    }


});
