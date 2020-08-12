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

// typing indicator

const createTypingIndicator = () => {
  let tiContainer = $("<div>").addClass("ti-container");
  let tiBlock = $("<div>").addClass("ti-block").appendTo(tiContainer);
  $("<div>").addClass("ti-dot").appendTo(tiBlock);
  $("<div>").addClass("ti-dot").appendTo(tiBlock);
  $("<div>").addClass("ti-dot").appendTo(tiBlock);
  return tiContainer;
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
  let typeIndicator = createTypingIndicator();
  typeIndicator.appendTo("#chat-area");
  bubble.addClass("bubble bubble-left")
        .appendTo("#chat-area")
        .hide()
        .delay(2700)
        .show(10, () => {
          typeIndicator.hide();
          timeStamp.addClass("time-stamp").insertAfter(bubble);
          $("#chat-area").animate({ scrollTop: 5000 }, 500);
        });
  bubbleText.text(answer)
            .appendTo(bubble);
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
