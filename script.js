console.log("Hello world!");

const responses = ["Hello", "Bleh", "Goodbye", "I'm hungry", "I'm busy", "Who are you?", "Nice to meet you, I suppose.", "Go away!", "You're ugly", "Zzzzzzzz"];

// time

const timeNow = () => {
  let currentDate = new Date($.now());
  let hours = currentDate.getHours();
  let mins = ('0' + currentDate.getMinutes()).slice(-2);
  let time = hours + ":" + mins;
  return time;
}

const displayTime = (time) => {
  let timeStamp = $("<p>");
  timeStamp.addClass("time-stamp")
           .text(time);
  return timeStamp;
}

// user input

const getMessageText = () => {
  let message = $("textarea").val();
  return message;
}

const createBubble = (message) => {
  let bubble = $("<div>");
  let bubbleText = $("<p>");
  bubble.addClass("bubble bubble-right")
        .appendTo("#chat-area");
  bubbleText.text(message)
            .appendTo(bubble);
  let timeStamp = displayTime(timeNow());
  timeStamp.addClass("time-stamp time-stamp-right")
           .insertAfter(bubble);
}

// chatbot response

const selectChatbotAnswer = (responses) => {
  let random = Math.random() * 10;
  let index = Math.floor(random);
  return responses[index];
}

const displayChatbotAnswer = (answer) => {
  let bubble = $("<div>");
  let bubbleText = $("<p>");
  let timeStamp = displayTime(timeNow());
  bubble.addClass("bubble bubble-left")
        .appendTo("#chat-area")
        .hide()
        .delay(800)
        .fadeIn(400, () => {
          timeStamp.addClass("time-stamp").insertAfter(bubble);
          $("#chat-area").animate({ scrollTop: 300 }, 500);
        });
  bubbleText.text(answer).appendTo(bubble);
}

// clear
const clearTextArea = () => {
  $("textarea").val("");
}

// submit on enter
$("textarea").keypress( (event) => {
  if (event.which == 13) {
    event.preventDefault();
    $("form").submit();
  }
});

// submit
$("#form").on("submit", (event) => {
  event.preventDefault();
  createBubble(getMessageText());
  displayChatbotAnswer(selectChatbotAnswer(responses));
  clearTextArea();
  $('#chat-area').scrollTop($('#chat-area')[0].scrollHeight);
})
