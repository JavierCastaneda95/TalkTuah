//Inspiration for the code comes from a response by Selvarani to a post "Select dropdown option redirecting on clicking on button [closed]" https://stackoverflow.com/questions/51135511/select-dropdown-option-redirecting-on-clicking-on-button 
//The pickTuah() function is to be used in the HTML code to redirect to specific Talk Tuah episodes depending on the drop down choice. 
function pickTuah(){
    var boxTuah = document.getElementById("selectTuah");
    var valueTuah = boxTuah.options[boxTuah.selectedIndex].value; 
    window.location.href = valueTuah;
}
