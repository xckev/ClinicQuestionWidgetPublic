var collap = document.getElementsByClassName("collapsible");
var open = false;

for (let i = 0; i < collap.length; i++) {
  collap[i].addEventListener("click", function () {
    this.classList.toggle("active");
    if(this.classList.contains("active")){
      document.getElementById("chat-button").innerHTML = 'Collapse Clinic Chatbot <i style="color: #fff;" class="fa fa-fw fa-comments-o"></i>';
    }
    else{
      document.getElementById("chat-button").innerHTML = 'Expand Clinic Chatbot <i style="color: #fff;" class="fa fa-fw fa-comments-o"></i>';
    }

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

  });
}

function firstBotMessage() {
  let firstMessage = "Hello! Ask me any question about the clinic!"
  document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

  document.getElementById("userInput").scrollIntoView(false);
}
firstBotMessage();

function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    alert("Ensure you input a value!");
  }

  let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000)

}

function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});