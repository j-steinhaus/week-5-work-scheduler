// time & Date
var currentDate =
  moment().format("dddd") + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format("h:mm:ss a");

// text hour
var sevenPm = $("#19pm");
var sixPm = $("#18pm");
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
