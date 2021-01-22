// WHEN I refresh the page
// THEN the saved events persist


// Adding the date to the webpage
var date = new Date();

var currentMonth = date.toLocaleString('default', { month: 'long' })
var currentDay = date.getDate();
var currentYear = date.getFullYear();

$("#currentDay").append(currentMonth + " " + currentDay + ", " + currentYear);

// Changing the color of the textbox
var currentHour = date.getHours(); // Return index 0 through 23
console.log(currentHour);

// If/Else Statement - conditions for the hours
if (currentHour < 9) {
    // All textboxes will be green
    $(".textbox").css("background-color", "lightgreen");
} else if (currentHour === 9) {
    //  9:00 AM textbox will be red
    $("#9AM").css("background-color", "yellow");

} else if (currentHour === 10) {
    //  9:00 AM textbox will be red
    $("#9AM").css("background-color", "red");

    // 10:00 AM textbox will be red
    $("#10AM").css("background-color", "yellow");

} else if (currentHour === 11) {
    //  9:00 AM textbox will be red
    $("#9AM").css("background-color", "red");

    // 10:00 AM textbox will be red
    $("#10AM").css("background-color", "red");

    // 11:00 AM textbox will be red
    $("#11AM").css("background-color", "yellow");

} else if (currentHour === 12) {
    //  9:00 AM textbox will be red
    $("#9AM").css("background-color", "red");

    // 10:00 AM textbox will be red
    $("#10AM").css("background-color", "red");

    // 11:00 AM textbox will be red
    $("#11AM").css("background-color", "red");

    // 12:00 PM textbox will be red
    $("#12PM").css("background-color", "yellow");

} else if (currentHour === 13) {
    //  9:00 AM textbox will be red
    $("#9AM").css("background-color", "red");

    // 10:00 AM textbox will be red
    $("#10AM").css("background-color", "red");

    // 11:00 AM textbox will be red
    $("#11AM").css("background-color", "red");

    // 12:00 PM textbox will be red
    $("#12AM").css("background-color", "red");

    // 1:00 PM textbox will be red
    $("#1PM").css("background-color", "yellow");

} else if (currentHour === 14) {
    //  9:00 AM textbox will be red
    $("#9AM").css("background-color", "red");

    // 10:00 AM textbox will be red
    $("#10AM").css("background-color", "red");

    // 11:00 AM textbox will be red
    $("#11AM").css("background-color", "red");

    // 12:00 PM textbox will be red
    $("#12AM").css("background-color", "red");

    // 1:00 PM textbox will be red
    $("#1PM").css("background-color", "red");

    // 2:00 PM textbox will be red
    $("#2PM").css("background-color", "yellow");

} else if (currentHour === 15) {
    //  9:00 AM textbox will be red
    $("#9AM").css("background-color", "red");

    // 10:00 AM textbox will be red
    $("#10AM").css("background-color", "red");

    // 11:00 AM textbox will be red
    $("#11AM").css("background-color", "red");

    // 12:00 PM textbox will be red
    $("#12AM").css("background-color", "red");

    // 1:00 PM textbox will be red
    $("#1PM").css("background-color", "red");

    // 2:00 PM textbox will be red
    $("#2PM").css("background-color", "red");

    // 3:00 PM textbox will be red
    $("#3PM").css("background-color", "yellow");

} else if (currentHour === 16) {
    //  9:00 AM textbox will be red
    $("#9AM").css("background-color", "red");

    // 10:00 AM textbox will be red
    $("#10AM").css("background-color", "red");

    // 11:00 AM textbox will be red
    $("#11AM").css("background-color", "red");

    // 12:00 PM textbox will be red
    $("#12AM").css("background-color", "red");

    // 1:00 PM textbox will be red
    $("#1PM").css("background-color", "red");

    // 2:00 PM textbox will be red
    $("#2PM").css("background-color", "red");

    // 3:00 PM textbox will be red
    $("#3PM").css("background-color", "red");

    // 4:00 PM textbox will be red
    $("#4PM").css("background-color", "yellow");
} else {
    // All textboxes will be red
    $(".textbox").css("background-color", "red")
}


// Function that stores and attaches what was entered in textbox
$(".button").on("click", function () {

    // Save what was entered into the textbox in local storage
    var storingInfo = $(this).siblings(".textbox").val();
    localStorage.setItem("storingInfo", storingInfo);
});


// Pulling from local storage and invoking on page load
function loadLocalStorage() {

    // Attaching what is stored onto the webpage
    var storedInfo = localStorage.getItem("storingInfo");

    var tRow = $("<tr>");
    var td = $("<td>").append(storedInfo);
    tRow.append(td);
    $("tbody").append(tRow);
};