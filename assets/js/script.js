// grab and format the current date
var todayDate = moment().format('dddd, MMM Do YYYY');
// add current date on the page
$("#currentDay").append(todayDate);




var saveButton = $(".saveBtn");
saveButton.on("click", function(event) {
    console.log(event);
    // select the save button (floppy disc image)
    var clickedButton = $(event.target);

    // selecting the text box for the event
    var textArea = clickedButton.prev();

    // selecting the work hour
    var timeDiv = textArea.prev();
    // add to local storage

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
timeTracker();