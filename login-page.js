const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

const mainBox = document.getElementById("main-holder")

const titleCanvas = document.getElementById('myCanvas');
let titleCtx = titleCanvas.getContext('2d');
titleCanvas.width = window.innerWidth;
titleCanvas.height = window.innerHeight;

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "will" && password === "vikings") {
        // If the credentials are valid, show dice app
        console.log("You have successfully logged in.");
        titleCanvas.style.opacity = "0";
        titleCanvas.style.zIndex = "-99";
        mainBox.style.display = "none";
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})
