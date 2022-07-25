// time & Date
var currentDay = moment().format("dddd, MMMM Do");

// text hour
var fivePm = moment().hour(17);
var fourPm = moment().hour(16);
var threePm = moment().hour(15);
var twoPm = moment().hour(14);
var onePm = moment().hour(13);
var twelvePm = moment().hour(12);
var elevenAm = moment().hour(11);
var tenAm = moment().hour(10);
var nineAm = moment().hour(9);
var eightAm = moment().hour(8);

var hours = [
  hour9,
  hour10,
  hour11,
  hour12,
  hour13,
  hour14,
  hour15,
  hour16,
  hour17,
];

// var fivePm = $("#17pm");
// var fourPm = $("#16pm");
// var threePm = $("#15pm");
// var twoPm = $("#14pm");
// var onePm = $("#13pm");
// var twelvePm = $("#12pm");
// var elevenAm = $("#11am");
// var tenAm = $("#10am");
// var nineAm = $("#9am");
// var eightAm = $("#8am");

// local storage
var event17 = JSON.parse(localStorage.getItem("fivePm")) || "";
var event16 = JSON.parse(localStorage.getItem("fourPm")) || "";
var event15 = JSON.parse(localStorage.getItem("threePm")) || "";
var event14 = JSON.parse(localStorage.getItem("twoPm")) || "";
var event13 = JSON.parse(localStorage.getItem("onePm")) || "";
var event12 = JSON.parse(localStorage.getItem("twelvePm")) || "";
var event11 = JSON.parse(localStorage.getItem("elevenAm")) || "";
var event10 = JSON.parse(localStorage.getItem("tenAm")) || "";
var event9 = JSON.parse(localStorage.getItem("nineAm")) || "";
var event8 = JSON.parse(localStorage.getItem("eightAm")) || "";

// $("init8").val(localStorage.getItem("08:00 am"));
// $("init9").val(localStorage.getItem("09:00 am"));
// $("init10").val(localStorage.getItem("10:00 am"));
// $("init11").val(localStorage.getItem("11:00 am"));
// $("init12").val(localStorage.getItem("12:00 pm"));
// $("init1").val(localStorage.getItem("1:00 pm"));
// $("init2").val(localStorage.getItem("2:00 pm"));
// $("init3").val(localStorage.getItem("3:00 pm"));
// $("init4").val(localStorage.getItem("4:00 pm"));
// $("init5").val(localStorage.getItem("5:00 pm"));

$("currentDay").text(currentDay);

var auditTime = function () {
  currentTime - moment().format("hh:mm:ss");
};

// Timeblock w/ color for 9AM
if (moment().isBetween(eightAm, nineAm)) {
  $("#timeblock8").addClass("present");
} else if (moment().isAfter(tenAm)) {
  $("#timeblock8").addClass("past");
} else {
  $("#timeblock8").addClass("future");
}

// Timeblock w/ color for 9AM
if (moment().isBetween(nineAm, tenAm)) {
  $("#timeblock9").addClass("present");
} else if (moment().isAfter(elevenAm)) {
  $("#timeblock9").addClass("past");
} else {
  $("#timeblock9").addClass("future");
}

// Timeblock w/ color for 10AM
if (moment().isBetween(tenAm, elevenAm)) {
  $("#timeblock10").addClass("present");
} else if (moment().isAfter(elevenAm)) {
  $("#timeblock10").addClass("past");
} else {
  $("#timeblock10").addClass("future");
}

// Timeblock w/ color for 11AM
if (moment().isBetween(elevenPm, twelvePm)) {
  $("#timeblock11").addClass("present");
} else if (moment().isAfter(twelvePm)) {
  $("#timeblock11").addClass("past");
} else {
  $("#timeblock11").addClass("future");
}

// Timeblock w/ color for 12PM
if (moment().isBetween(twelvePm, onePm)) {
  $("#timeblock12").addClass("present");
} else if (moment().isAfter(onePm)) {
  $("#timeblock12").addClass("past");
} else {
  $("#timeblock12").addClass("future");
}

// Timeblock w/ color for 1PM
if (moment().isBetween(onePm, twoPm)) {
  $("#timeblock13").addClass("present");
} else if (moment().isAfter(twoPm)) {
  $("#timeblock13").addClass("past");
} else {
  $("#timeblock13").addClass("future");
}

// Timeblock w/ color for 2PM
if (moment().isBetween(twoPm, threePm)) {
  $("#timeblock14").addClass("present");
} else if (moment().isAfter(threePm)) {
  $("#timeblock14").addClass("past");
} else {
  $("#timeblock14").addClass("future");
}

// Timeblock w/ color for 3PM
if (moment().isBetween(threePm, fourPm)) {
  $("#timeblock15").addClass("present");
} else if (moment().isAfter(fourPm)) {
  $("#timeblock15").addClass("past");
} else {
  $("#timeblock15").addClass("future");
}

// Timeblock w/ color for 4PM
if (moment().isBetween(fourPm, fivePm)) {
  $("#timeblock16").addClass("present");
} else if (moment().isAfter(fivePm)) {
  $("#timeblock16").addClass("past");
} else {
  $("#timeblock16").addClass("future");
}

// Timeblock w/ color for 5PM
if (moment().isBetween(fivePm, sixPm)) {
  $("#timeblock17").addClass("present");
} else if (moment().isAfter(sixPm)) {
  $("#timeblock17").addClass("past");
} else {
  $("#timeblock17").addClass("future");
}

// Add delete event function for each time block
$("#save-delete8").on("click", "i.fa-trash", function () {
  localStorage.removeItem("eightAm");
  $("#eventblock8").val("");
});
$("#save-delete9").on("click", "i.fa-trash", function () {
  localStorage.removeItem("nineAm");
  $("#eventblock9").val("");
});
$("#save-delete10").on("click", "i.fa-trash", function () {
  localStorage.removeItem("tenAm");
  $("#eventblock10").val("");
});
$("#save-delete11").on("click", "i.fa-trash", function () {
  localStorage.removeItem("elevenAm");
  $("#eventblock11").val("");
});
$("#save-delete12").on("click", "i.fa-trash", function () {
  localStorage.removeItem("twelveAm");
  $("#eventblock12").val("");
});
$("#save-delete13").on("click", "i.fa-trash", function () {
  localStorage.removeItem("onePm");
  $("#eventblock13").val("");
});
$("#save-delete14").on("click", "i.fa-trash", function () {
  localStorage.removeItem("twoPm");
  $("#eventblock14").val("");
});
$("#save-delete15").on("click", "i.fa-trash", function () {
  localStorage.removeItem("threePm");
  $("#eventblock15").val("");
});
$("#save-delete16").on("click", "i.fa-trash", function () {
  localStorage.removeItem("fourPm");
  $("#eventblock16").val("");
});
$("#save-delete17").on("click", "i.fa-trash", function () {
  localStorage.removeItem("fivePm");
  $("#eventblock17").val("");
});

// Add save event function for each time block
$("#save-delete8").on("click", "i.fa-save", function () {
  var event9 = $("#eventblock8").val().trim();
  localStorage.setItem("eightAm", JSON.stringify(event8));
});
$("#save-delete9").on("click", "i.fa-save", function () {
  var events9 = $("#eventblock10").val().trim();
  localStorage.setItem("nineAm", JSON.stringify(event9));
});
$("#save-delete10").on("click", "i.fa-save", function () {
  var event10 = $("#eventblock11").val().trim();
  localStorage.setItem("tenAm", JSON.stringify(event10));
});
$("#save-delete11").on("click", "i.fa-save", function () {
  var event11 = $("#eventblock12").val().trim();
  localStorage.setItem("elevenAm", JSON.stringify(event11));
});
$("#save-delete12").on("click", "i.fa-save", function () {
  var event12 = $("#eventblock13").val().trim();
  localStorage.setItem("twelvePm", JSON.stringify(event12));
});
$("#save-delete13").on("click", "i.fa-save", function () {
  var event13 = $("#eventblock14").val().trim();
  localStorage.setItem("onePm", JSON.stringify(event13));
});
$("#save-delete14").on("click", "i.fa-save", function () {
  var event14 = $("#eventblock14").val().trim();
  localStorage.setItem("twoPm", JSON.stringify(event14));
});
$("#save-delete15").on("click", "i.fa-save", function () {
  var event15 = $("#eventblock15").val().trim();
  localStorage.setItem("threePm", JSON.stringify(event15));
});
$("#save-delete16").on("click", "i.fa-save", function () {
  var event16 = $("#eventblock16").val().trim();
  localStorage.setItem("fourPm", JSON.stringify(event16));
});
$("#save-delete17").on("click", "i.fa-save", function () {
  var event17 = $("#eventblock17").val().trim();
  localStorage.setItem("fivePm", JSON.stringify(event17));
});

// function background() {
//   $(".form-control").each(function () {
//     var timeTest = parseInt($(this).attr("id"));
//     hour = parseInt(hour);
//     console.log(timeTest);
//     console.log(hour);
//     //      console.log(this);
//     if (hour > timeTest) {
//       $(this).addClass("past");
//     } else if (hour < timeTest) {
//       $(this).addClass("future");
//     } else {
//       $(this).addClass("present");
//     }
//   });
// }

$.each(hours, function (index, value) {
  event = [
    event9,
    event10,
    event11,
    event12,
    event13,
    event14,
    event15,
    event16,
    event17,
  ];
  $(".container").append(
    "<div class='row'><div class='col-2 hour text-right' id='hour" +
      (index + 9) +
      "'><span>" +
      value.format("h A") +
      "</span></div><div class='col-8 event-group' id='timeblock" +
      (index + 9) +
      "'><textarea class='events col-12' id='eventblock" +
      (index + 9) +
      "'>" +
      events[index] +
      "</textarea></div>" +
      "<div class='col-2 save-delete' id='save-delete" +
      (index + 9) +
      "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>"
  );
});

$(document).ready(function () {
  colorHours();
  reloadPage();
});

$(document).ready(function () {
  initPage();
  background();

//   // Buttons (save to Local Storage)
//   $(".saveBtn").on("click", function () {
//     userInput = $(this).siblings(".form-control").val().trim();
//     console.log(userInput);
//     hourSpan = $(this).siblings(".input-group").text().trim();
//     console.log(hourSpan);
//     localStorage.setItem(hourSpan, JSON.stringify(userInput));
//   });
//   // Button for clear the day
//   $(".clearDay").on("click", function () {
//     localStorage.clear();
//     location.reload();
//   });
// });

// This function runs but the time is never refreshed?
setInterval(function () {
  $(".event-group .events").each(function (index, el) {
      auditTime(el);
      //console.log(currentTime);
  });

}, (1000 * 60)); // 1000ms x 60 = 1 minute x 30 = 30 minutes

auditTime();