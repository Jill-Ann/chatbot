console.log("Hello world!");

const responses = ["Hello", "Bleh", "Goodbye", "I'm hungry", "I'm tired", "Who are you?", "Nice to meet you!", "Go away!", "You're ugly"];

const getMessageText = () => {
  let message = $("#text-area").val();
  return message;
}

const createBubble = (message) => {
  let bubble = $("<p>");
  bubble.text(message)
        .addClass("bubble")
        .appendTo("#chat-container");
}

const selectAnswer = (responses) => {
  let random = Math.random() * 10;
  let index = Math.floor(random);
  return responses[index];
}

const displayAnswer = (answer) => {
  let bubble = $("<p>");
  bubble.text(answer)
        .addClass("bubble")
        .appendTo("#chat-container");
}

$("#form").on("submit", (event) => {
  event.preventDefault();
  createBubble(getMessageText());
  displayAnswer(selectAnswer(responses));
  $('#chat-container').scrollTop($('#chat-container')[0].scrollHeight);
})
