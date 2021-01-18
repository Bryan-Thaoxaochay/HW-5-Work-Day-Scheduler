// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar - DONE
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours - DONE
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block - DONE
// THEN I can enter an event - DONE
// WHEN I click the save button for that time block - DONE
// THEN the text for that event is saved in local storage - DONE
// WHEN I refresh the page
// THEN the saved events persist

// Pseudocode
    // Date
        // Current date is displayed - DONE

    // Time Blocks
        // 900-500 - DONE
        // Text Box - DONE
        // Save Button - DONE
        // Color Coded: Red = Passed ; Green = Available
    
    // Local Storage
        // Text entered into text box is saved to local storage

// Adding the date to the webpage
var date = new Date();

var currentMonth = date.toLocaleString('default', { month: 'long' })
var currentDay = date.getDate();
var currentYear = date.getFullYear();

$("#currentDay").append(currentMonth + " " + currentDay + ", " + currentYear);

// Changing the color of the textbox
var currentHour = date.getHours(); // Return index 0 through 23

    // If/Else Statement - conditions for the hours
    if (currentHour < 8) {
        // All textboxes will be green
    }

    else if (currentHour > 9 && currentHour < 10) {
        //  9:00 AM textbox will be red
    }

    else if (currentHour > 10 && currentHour < 11) {
        //  9:00 AM textbox will be red
        // 10:00 AM textbox will be red
    }

    else if (currentHour > 11 && currentHour < 12) {
        //  9:00 AM textbox will be red
        // 10:00 AM textbox will be red
        // 11:00 AM textbox will be red
    }

    else if (currentHour > 12 && currentHour < 13) {
        //  9:00 AM textbox will be red
        // 10:00 AM textbox will be red
        // 11:00 AM textbox will be red
        // 12:00 PM textbox will be red
    }

    else if (currentHour > 13 && currentHour < 14) {
        //  9:00 AM textbox will be red
        // 10:00 AM textbox will be red
        // 11:00 AM textbox will be red
        // 12:00 PM textbox will be red
        // 1:00 PM textbox will be red
    }

    else if (currentHour > 14 && currentHour < 15) {
        //  9:00 AM textbox will be red
        // 10:00 AM textbox will be red
        // 11:00 AM textbox will be red
        // 12:00 PM textbox will be red
        // 1:00 PM textbox will be red
        // 2:00 PM textbox will be red
    }

    else if (currentHour > 15 && currentHour < 16) {
        //  9:00 AM textbox will be red
        // 10:00 AM textbox will be red
        // 11:00 AM textbox will be red
        // 12:00 PM textbox will be red
        // 1:00 PM textbox will be red
        // 2:00 PM textbox will be red
        // 3:00 PM textbox will be red
    }

    else if (currentHour > 16 && currentHour < 17) {
        //  9:00 AM textbox will be red
        // 10:00 AM textbox will be red
        // 11:00 AM textbox will be red
        // 12:00 PM textbox will be red
        // 1:00 PM textbox will be red
        // 2:00 PM textbox will be red
        // 3:00 PM textbox will be red
        // 4:00 PM textbox will be red
    }

    else if (currentHour > 16) {
        // All textboxes will be red
    }


// Function that stores and attaches what was entered in textbox
function storeAndattach() {
    $(".button").on("click", function(){

        // Save what was entered into the textbox in local storage
        var storingInfo = $(".textbox").val();
        localStorage.setItem("storingInfo", storingInfo);

        // Attaching what is stored onto the webpage
        var storedInfo = localStorage.getItem("storingInfo");

        var tRow = $("<tr>");
        var td = $("<td>").append(storedInfo);
        tRow.append(td);
        $("tbody").append(tRow);
    });

    
}

storeAndattach();