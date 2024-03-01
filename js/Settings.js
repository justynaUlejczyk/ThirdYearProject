function general(clickedElement){
    hideAll();
    var General = document.getElementById("general");
    General.style.display = "inline-block";
}


function account(clickedElement){
    hideAll();
    var Account = document.getElementById("account");
    Account.style.display = "inline-block";
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
    function updateBio(clickedElement){
        hideAll();
        var updateBio = document.getElementById("updateBio");
        updateBio.style.display = "inline-block";
    }




function privacy(clickedElement){
    hideAll();
    var privacy = document.getElementById("privacy");
    privacy.style.display = "inline-block";
}

    function privacyPolicy(clickedElement){
        hideAll();
        var privacyPolicy = document.getElementById("privacyPolicy");
        privacyPolicy.style.display = "inline-block";
    }
    function accountPrivacy(clickedElement){
        hideAll();
        var accountPrivacy = document.getElementById("accountPrivacy");
        accountPrivacy.style.display = "inline-block";
    }

function accessibility(clickedElement){
    hideAll();
    var Accessibility = document.getElementById("accessibility");
    Accessibility.style.display = "inline-block";
}


function deleteAccount(clickedElement){
    hideAll();
    var deleteAccount = document.getElementById("deleteAccount");
    deleteAccount.style.display = "none";
}

function hideAll(){
    var General = document.getElementById("general");

    var Account = document.getElementById("account");
        var updatePassword = document.getElementById("updatePassword");
        var updateEmail = document.getElementById("updateEmail");
        var updateName = document.getElementById("updateName");
        var updateBio = document.getElementById("updateBio");

    var Privacy = document.getElementById("privacy");
        var privacyPolicy = document.getElementById("privacyPolicy");
        var accountPrivacy = document.getElementById("accountPrivacy");
        var deleteAccount = document.getElementById("deleteAccount");

    var Accessibility = document.getElementById("accessibility")


    General.style.display = "none";

    Account.style.display = "none";
        updateName.style.display = "none";
        updateEmail.style.display = "none";
        updatePassword.style.display = "none";
        updateBio.style.display ="none";

    Privacy.style.display = "none";
        privacyPolicy.style.display = "none";
        accountPrivacy.style.display = "none";
        deleteAccount.style.display ="none"

    Accessibility.style.display = "none";

}
