let displayMessage = document.getElementById("error-message");
let icon = document.getElementById("error-icon");
let email = document.getElementById("email");

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
                   document.getElementById("email").value = ''
    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    if (emailIsValid(email) === true) {
        document.getElementById("error-message").innerHTML = email + " sent ✔";
        document.getElementById("error-message").style.color = "green";
        document.getElementById("email").style.border = "1px solid green";
        displayMessage.classList.remove("is-hidden");
        icon.classList.add("is-hidden");
    } else {
        document.getElementById("error-message").innerHTML = "\"" + email + "\"" + " NOT VALID: Please provide a valid email";
        document.getElementById("error-message").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";
        displayMessage.classList.remove("is-hidden");
        icon.classList.remove("is-hidden");					
    }
});