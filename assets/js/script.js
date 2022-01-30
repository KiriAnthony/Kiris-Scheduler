
var clickedTextArea = $("timeId");
var clickedSaveButton = $("saveBtn");

var displayTodaysDate = function() {
    var date = moment().format("dddd, MMM Do");
    $("#currentDay").text(date);
}

// function to generate blocks for hours 0 - 24
var generateBlocks = function() {
    for (var i = 0; i < 24; i++) {
        var hourBlock = $("<div>").addClass("row");
        if (i<10) {
            var time = "0"+i+":00";
        } else {
            var time = i+":00";
        }
        var updatedTime = moment(time, "HH:mm").format("hh:mm A");
        var timeSection = $("<p>").addClass("hour time-block").text(updatedTime);
        var textSection = $("<textArea>").addClass("present textarea").attr("id", i);
        var saveButton = $("<button>").addClass("saveBtn");
        // update using moment.js to display i as an hour 1-12 with am/pm
        // add id that corresponds to i
        //textSection.textContent = "";
        // create if statement to determine background color of calander text section
        // if (time is past) {
        //     textSection.addClass("past");
        // } else if (time is present) {
        //     textSection.addClass("present");
        // } else {
        //     textSection.addClass("future");
        // }

        hourBlock.append(timeSection, textSection, saveButton);
        $(".container").append(hourBlock);
    };
    displayTodaysDate();
};

generateBlocks();
