
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
function general(clickedElement){
    hideAll();
    var General = document.getElementById("general");
    General.style.display = "inline-block";
}

function privacy(clickedElement){
    hideAll();
    var privacy = document.getElementById("privacy");
    privacy.style.display = "inline-block";
}



function hideAll(){
    var General = document.getElementById("general");
    var Account = document.getElementById("account");
    var Privacy = document.getElementById("privacy");
    var updateEmail = document.getElementById("updateEmail");
    
    Privacy.style.display = "none";
    General.style.display = "none";
    Account.style.display = "none";
    updateEmail.style.display = "none";
    
}
