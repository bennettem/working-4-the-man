// create function to display current date/day

var today = moment().format("LLLL");
$("#currentDay").html(today);

$(document).ready(function () {
  // save button on click listner
  $(".saveBtn").on("click", function () {
    // get values in JQuery for text and time
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // save task in local storage
    localStorage.setItem(time, text);
  });

  // time tracker with current times
  function tracker() {
    var currentTime = moment().hour();
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
      if (timeBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeclass("past");
        $(this).addClass("future");
      }
    });
  }
  // need to retrive local storage
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  tracker();
});
