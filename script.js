function AkanGenerate(e,day,month,year){
    e.preventDefault();
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);

   if((day<1) ||(day>31) || isNaN(day)){
    $(document.getElementById("invalid")).show();
    document.getElementById("invalid").innerHTML= "Day is invalid. Please enter a valid Day";
   }
   else if((month<1) ||(month>12) || isNaN(month)){
    $(document.getElementById("invalid")).show();
    document.getElementById("invalid").innerHTML= "Month is invalid. Please enter a valid Month";
   }
   else if((year<1200) || isNaN(year)){
    $(document.getElementById("invalid")).show();
    document.getElementById("invalid").innerHTML= "Year is invalid. Please enter a valid Year";
   }
   else if ((document.getElementById("male").checked =false) && (document.getElementById("female").checked =false)){
    $(document.getElementById("invalid")).show();
    document.getElementById("invalid").innerHTML= "Please select your Gender";
   }
   else{
    $(document.getElementById("invalid")).hide();

    var wkday = [];
    wkday[0] = "Sunday";
    wkday[1] = "Monday";
    wkday[2] = "Tuesday";
    wkday[3] = "Wednesday";
    wkday[4] = "Thursday";
    wkday[5] = "Friday";
    wkday[6] = "Saturday";

    var date = new Date(year+ ", "+month+", "+day)
    var dayOfWeek = wkday[date.getDay()];
    console.log(dayOfWeek)

   }
}
/*Reset Button */
function resetForm(){
    $(document.getElementById("invalid")).hide();
}