// grab and format the current date
var todayDate = moment().format('dddd, MMM Do YYYY');
// add current date on the page
$("#currentDay").append(todayDate);




var buttonSaveEl = $(".saveBtn");
var saveButton = $(document).ready(function() {
    // add button save listener
    buttonSaveEl.on("click", function() {
        // get the nearby values
        var textArea = $(this).siblings(".description").val();
        var timeDiv = $(this).parent().attr("id");

        // save to local storage
        localStorage.setItem(timeDiv, textArea);
    })
});


var timeTracker = function() {
    // get the current hour
    var timeNow = moment().hour();

    // go through each timeblock
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id"));

        // compare time-block time to the actualy time and add css based off that
        if (timeBlock < timeNow) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else if (timeBlock === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })

};

// get local storage items
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));

// call the function for getting the colors for the time-block
timeTracker();
