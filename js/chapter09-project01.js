/* add code here */
//Below Function sets up the background color of input fields with the class name "highlight" 
function setInputFieldBackground(e) { 
    if (e.type=="focus") { 
    e.target.classList.toggle("highlight"); 
    } 
    else if(e.type == "blur"){ 
    e.target.classList.toggle("highlight"); 
    } 
    } 
// Adding Event Listener for background change when user taps in input field
/* Load event triggers after everything in the window being loaded into the window object or the browser.
Basically once html or DOM is ready this functions will run */

window.addEventListener("load", function inputFieldDisplay() { 
    //accessing the required classes and storing it in a varibale 
    var hilightable = document.getElementsByClassName("hilightable");
    //var required = document.getElementsByClassName("required");
    var title = document.getElementById("title"); 
    var description = document.getElementById("description"); 
    var year = document.getElementById("year"); 
    
     
    for(i=0; i<hilightable.length; i++){ 
    hilightable[i].addEventListener("focus", setInputFieldBackground); 
    hilightable[i].addEventListener("blur", setInputFieldBackground); 
    } 
    /* Function created to show the error warning when the user try to submit the form with out any data 
    in three input fields TITLE, DESCRIPTION & YEAR */

    // Below is the function expression which means storing a function in a varibale called "validationFunction"
    // Add class error
    var validationFunction = function validation(e) { 
    if(title.value.length<1){ 
    e.preventDefault(); 
    title.classList.add("error"); 
    }  
    if(description.value.length<1){ 
    e.preventDefault(); 
    description.classList.add("error"); 
    }  
    if(year.value.length<1){ 
    e.preventDefault(); 
    year.classList.add("error"); 
    }  
    //Remove the class error
    else if(title.value.length>0 && title.value.length>0 && title.value.length>0){ 
    title.classList.remove("error"); 
    description.classList.remove("error"); 
    year.classList.remove("error"); 
    }  
}
    //Submit validation
    document.getElementById("mainForm").addEventListener("submit", validationFunction); 
    
    }); 
    
    