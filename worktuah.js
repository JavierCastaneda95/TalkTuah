//Inspiration for the code comes from a response by Selvarani to a post "Select dropdown option redirecting on clicking on button [closed]" https://stackoverflow.com/questions/51135511/select-dropdown-option-redirecting-on-clicking-on-button
//The getElementById function information comes from SheCodes, "[JavaScript] - Understanding the getElementById function in JavaScript," https://www.shecodes.io/athena/173100-understanding-the-getelementbyid-function-in-javascript 
//The pickTuah() function is to be used in the HTML code to redirect to specific Talk Tuah episodes depending on the drop down choice. 
function pickTuah(){
    //document.getElementById("") uses the id within the parameters to find an element in the HTML code to return as an object that can be modified in the code
    //in our case, the id is "selectTuah," returning the options elements in the HTML code so that they can be part of the boxTuah variable and modified through that
    var boxTuah = document.getElementById("selectTuah");
    //the 'options' function "returns a collection of all <option> elements in a drop-down list," according to W3 schools in the article, "Select options Collection," https://www.w3schools.com/jsref/coll_select_options.asp
    //the 'selectedIndex' function "sets or returns the index of the selected option in a drop-down list," according to W3 schools in the article, "Selected selectedIndex Property," https://www.w3schools.com/jsref/prop_select_selectedindex.asp
    //The following line of code basically takes the list of options in the HMTL code, looks at the selected option from the drop-down menu and extracts its value
    //The value of each of the options has been defined as the URL for the respective Talk Tuah episode, so the variable valueTuah carries this URL
    var valueTuah = boxTuah.options[boxTuah.selectedIndex].value; 
    //The valueTuah variable contains the URL link for the selected Talk Tuah video, so window.location.href is equal to this URL, thereby redirecting to that URL link
    window.location.href = valueTuah;
}
