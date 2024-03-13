// Get reference to the eye icon and password input elements using their IDs
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

// Add click event listener to the eye icon
eyeicon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "./assets/img/Eye.svg"; // change the src of eye icon here when password type set to text.
    } else {
        password.type = "password";
        eyeicon.src = "./assets/img/No_eye.svg"; // change the src of eye icon here when password type set to password.
    }
}