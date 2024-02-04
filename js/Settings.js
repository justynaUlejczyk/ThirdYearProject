function updateEmail(clickedElement){
    hideAll();
    var updateEmail = document.getElementById("updateEmail");
    updateEmail.style.display = "inline-block";
}

function account(clickedElement){
    hideAll();
    var General = document.getElementById("account");
    General.style.display = "inline-block";
}


function hideAll(){
    var General = document.getElementById("general");
    var Account = document.getElementById("account");
    var Privacy = document.getElementById("privacy");
    var Accessibility = document.getElementById("accessibility");


    
    var updateEmail = document.getElementById("updateEmail");
    
    General.style.display = "none";
    Account.style.display = "none";
    Privacy.style.display = "none";
    Accessibility.style.display = "none";



    updateEmail.style.display = "none";
    
}
