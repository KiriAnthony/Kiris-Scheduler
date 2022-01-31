
var eventArray = [];
var clickedTextArea = $("timeId");

var displayTodaysDate = function() {
    var date = moment().format("dddd, MMM Do");
    $("#currentDay").text(date);
}

// function to generate blocks for hours 0 - 24
var generateBlocks = function() {
    var currentHour = moment(new Date()).format("HH");
    for (var i = 0; i < 24; i++) {
        var hourBlock = $("<div>").addClass("row").attr("id", i);
        if (i<10) {
            var time = "0"+i+":00";
        } else {
            var time = i+":00";
        }
        var militaryTime = moment(time, "HH:mm").format("HH");
        var updatedTime = moment(time, "HH:mm").format("hh:mm A");
        var timeSection = $("<p>").addClass("hour time-block").text(updatedTime);
        var textSection = $("<textArea>").addClass("textarea col-8").attr("id", i, "txtarea");
        //console.log(textSection);
        var saveButton = $("<button>").addClass("saveBtn").text("Save").attr("id", i);
        // create if statement to determine background color of calander text section
        if (currentHour - militaryTime > 0) {
            textSection.addClass("past");
        } else if (currentHour - militaryTime < 0) {
            textSection.addClass("future");
        } else if (currentHour - militaryTime === 0){
            textSection.addClass("present");
        }

        hourBlock.append(timeSection, textSection, saveButton);
        $(".container").append(hourBlock);
    };
    displayTodaysDate();
};

generateBlocks();

$(".saveBtn").click(function(event) {
    var numClicked = $(this).attr("id");
    
});

