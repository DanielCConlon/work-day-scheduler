var saveButton = $(".save-btn");

saveButton.on("click", function(event) {
    console.log(event);
    // select the save button (floppy disc image)
    var clickedButton = $(event.target);

    // selecting the text box for the event
    var textArea = clickedButton.prev();

    // selecting the work hour
    var timeDiv = textArea.prev();
});