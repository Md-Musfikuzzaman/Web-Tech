document.getElementById("signupForm").addEventListener("submit", function(event) {

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("success").innerText = "";

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value;

    let valid = true;

    if (name == "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Invalid Email";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if (password != confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        valid = false;
    }

    if (isNaN(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must contain only digits";
        valid = false;
    }

    if (valid == false) {
        event.preventDefault();
    } else {
        event.preventDefault();
        document.getElementById("success").innerText = "Registration Successful!";
    }

});