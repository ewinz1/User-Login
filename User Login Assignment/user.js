// Login Page code by Edwin

// Event Listener
document.getElementById("login-btn").addEventListener("click", enterPage);

// Event Function
function enterPage () {
// Get input
    let user = document.getElementById("username-input").value;
    let pass = document.getElementById("password-input").value;

// Check the username and password
    if (user === "admin" && pass === "1234") {
        alert("Login Successful");

    } else if (user !== "admin") {
        alert("Username incorrect");
   
    } else {
        alert("Password Incorrect");
    }

}



