function AkanGenerate(e,day,month,year){
    e.preventDefault();
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);

    console.log (day)
}
/*Reset Button */
function resetForm(){
    $document.getElementById("invalid").hide()
}