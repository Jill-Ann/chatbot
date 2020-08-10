console.log("Hello world!");

const responses = ["Hello", "Bleh", "Goodbye", "I'm hungry", "I'm tired", "Who are you?", "Nice to meet you!", "Go away!", "You're ugly", "Zzzzzzzz"];

const getMessageText = () => {
  let message = $("#text-area").val();
  return message;
}

const createBubble = (message) => {
  let bubble = $("<div>");
  let bubbleText = $("<p>")
  bubble.addClass("bubble bubble-right")
        .appendTo("#chat-area");
  bubbleText.text(message).appendTo(bubble);
}

const selectChatbotAnswer = (responses) => {
  let random = Math.random() * 10;
  let index = Math.floor(random);
  return responses[index];
}

const displayChatbotAnswer = (answer) => {
  let bubble = $("<div>");
  let bubbleText = $("<p>")
  bubble.addClass("bubble bubble-left")
        .appendTo("#chat-area");
  bubbleText.text(answer).appendTo(bubble);
}

$("#form").on("submit", (event) => {
  event.preventDefault();
  createBubble(getMessageText());
  displayChatbotAnswer(selectChatbotAnswer(responses));
  $('#chat-area').scrollTop($('#chat-area')[0].scrollHeight);
})
