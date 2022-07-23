// time & Date
var currentDate =
  moment().format("dddd") + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format("h:mm:ss a");

// text hour
var fivePm = $("#17pm");
var fourPm = $("#16pm");
var threePm = $("#15pm");
var twoPm = $("#14pm");
var onePm = $("#13pm");
var twelvePm = $("#12pm");
var elevenAm = $("#11am");
var tenAm = $("#10am");
var nineAm = $("#9am");
var eightAm = $("#8am");

var hour = moment().hours();
var userInput;
var hourSpan;

// date & hour
var interval = setInterval(function () {
  var momentNow = moment();
  $("currentDay").html(
    momentNow.format("YYYY MMMM DD") +
      " " +
      momentNow.format("dddd").substring(0, 3).toUpperCase()
  );

  $("currentDay").html(currentDate + " " + momentNow.format("hh:mm:ss a"));
}, 100);

function initPage() {
  console.log("Current Hour " + hour);
  var init8 = JSON.parse(localStorage.getItem("08:00 am"));
  eightAm.val(init8);

  var init9 = JSON.parse(localStorage.getItem("9:00 am"));
  nineAm.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10:00 am"));
  tenAm.val(init10);

  var init11 = JSON.parse(localStorage.getItem("11:00 pm"));
  elevemPm.val(init11);

  var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
  twelvePm.val(init12);

  var init1 = JSON.parse(localStorage.getItem("01:00 pm"));
  onePm.val(init1);

  var init2 = JSON.parse(localStorage.getItem("02:00 pm"));
  twoPm.val(init3);

  var init3 = JSON.parse(localStorage.getItem("03:00 pm"));
  threePm.val(init4);

  var init4 = JSON.parse(localStorage.getItem("04:00 pm"));
  fourPm.val(init4);

  var init5 = JSON.parse(localStorage.getItem("05:00 pm"));
  fivePm.val(init5);
}

function background() {
  $(".form-control").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(timeTest);
    console.log(hour);
    //      console.log(this);
    if (hour > timeTest) {
      $(this).addClass("past");
    } else if (hour < timeTest) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

$(document).ready(function () {
  initPage();
  background();

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function () {
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  });
  // Button for clear the day
  $("#clearDay").on("click", function () {
    localStorage.clear();
    initPage();
  });
});
