function general(clickedElement){
    hideAll();
    var General = document.getElementById("general");
    General.style.display = "inline-block";
}


function account(clickedElement){
    hideAll();
    var General = document.getElementById("account");
    General.style.display = "inline-block";
}
function updateEmail(clickedElement){
    hideAll();
    var updateEmail = document.getElementById("updateEmail");
    updateEmail.style.display = "inline-block";
}

function updateName(clickedElement){
    hideAll();
    var updateName = document.getElementById("updateName");
    updateName.style.display = "inline-block";
}


function updatePassword(clickedElement){
    hideAll();
    var updatePassword = document.getElementById("updatePassword");
    updatePassword.style.display = "inline-block";
}

function privacy(clickedElement){
    hideAll();
    var privacy = document.getElementById("privacy");
    privacy.style.display = "inline-block";
}

function accessibility(clickedElement){
    hideAll();
    var Accessibility = document.getElementById("accessibility");
    Accessibility.style.display = "inline-block";
}






function hideAll(){
    var General = document.getElementById("general");


    var Account = document.getElementById("account");
        var updatePassword = document.getElementById("updatePassword");
        var updateEmail = document.getElementById("updateEmail");
    


    var Privacy = document.getElementById("privacy");
    var Accessibility = document.getElementById("accessibility")
    var updateName = document.getElementById("updateName");

    Privacy.style.display = "none";
    General.style.display = "none";
    Account.style.display = "none";
    Accessibility.style.display = "none";
    updateName.style.display = "none";
    updateEmail.style.display = "none";
    updatePassword.style.display = "none";
    
}
