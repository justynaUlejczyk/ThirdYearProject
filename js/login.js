const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', function() {
    const password = this.value;
    const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const uppercaseCharacterRegex = /[A-Z]+/;
    const length = password.length;

    if (!specialCharacterRegex.test(password)) {
        showPopupMessage("Password must contain at least one special character.");
    } else if (password.length < 8) {
        showPopupMessage("Password must be at least 8 characters long.")
    } else if (!uppercaseCharacterRegex.test(password)) {
        showPopupMessage("Password must contain at least one uppercase character.")
    }
    else {
        hidePopupMessage();
    }
});

function showPopupMessage(message) {
    alert(message);
}