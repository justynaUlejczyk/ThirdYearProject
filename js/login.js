document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById('password');
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener('submit', function (event) {
        const password = passwordInput.value;
        const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        const uppercaseCharacterRegex = /[A-Z]+/;

        if (!specialCharacterRegex.test(password)) {
            event.preventDefault();
            showPopupMessage("Password must contain at least one special character.");
        } else if (password.length < 8) {
            event.preventDefault();
            showPopupMessage("Password must be at least 8 characters long.")
        } else if (!uppercaseCharacterRegex.test(password)) {
            event.preventDefault();
            showPopupMessage("Password must contain at least one uppercase character.")
        }
        else {
            registrationForm.submit();
        }
    });
});

function showPopupMessage(message) {
    alert(message);
}