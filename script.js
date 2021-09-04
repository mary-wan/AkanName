function AkanGenerate(e, day, month, year) {
    e.preventDefault();
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);

    if ((day < 1) || (day > 31) || isNaN(day)) {
        $(document.getElementById("invalid")).show();
        $(document.getElementById("output")).hide();
        document.getElementById("invalid").innerHTML = "Day is invalid. Please enter a valid Day";
    } else if ((month < 1) || (month > 12) || isNaN(month)) {
        $(document.getElementById("invalid")).show();
        $(document.getElementById("output")).hide();
        document.getElementById("invalid").innerHTML = "Month is invalid. Please enter a valid Month";
    } else if ((year < 1200) || isNaN(year)) {
        $(document.getElementById("invalid")).show();
        $(document.getElementById("output")).hide();
        document.getElementById("invalid").innerHTML = "Year is invalid. Please enter a valid Year";
    } else if ((document.getElementById("male").checked == false) && (document.getElementById("female").checked == false)) {
        $(document.getElementById("invalid")).show();
        $(document.getElementById("output")).hide();
        document.getElementById("invalid").innerHTML = "Please select your Gender";
    } else {
        $(document.getElementById("invalid")).hide();

        var wkday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ml = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
        var fml = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
        var date = new Date(year + ", " + month + ", " + day)
        var dayOfWeek = wkday[date.getDay()];

        if (document.getElementById("male").checked == true) {
            var nm = ml[date.getDay()]
            $(document.getElementById("output")).show();
            document.getElementById("output").innerHTML =("You were born on " + dayOfWeek + ".Your name is " + nm + ".")
        } else if (document.getElementById("female").checked == true) {
            var nm = fml[date.getDay()]
            $(document.getElementById("output")).show();
            document.getElementById("output").innerHTML =("You were born on " + dayOfWeek + ".Your name is " + nm + ".")

        }

    }
}
/*Reset Button */
function resetForm() {
    $(document.getElementById("invalid")).hide();
    $(document.getElementById("output")).hide();
}