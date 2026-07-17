let mode = "light";

function changeTheme() {

    let button = document.getElementById("themeButton");

    if (mode == "light") {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        button.innerText = "Switch to Light Mode";

        mode = "dark";

    } else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        button.innerText = "Switch to Dark Mode";

        mode = "light";
    }

}

let hour = new Date().getHours();

if (hour < 12) {
    document.getElementById("greeting").innerText = "Good Morning";
}
else if (hour < 18) {
    document.getElementById("greeting").innerText = "Good Afternoon";
}
else {
    document.getElementById("greeting").innerText = "Good Evening";
}

function showSection(section) {

    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";

    document.getElementById(section).style.display = "block";

}

document.getElementById("contactForm").addEventListener("submit", function(event){

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";
    document.getElementById("success").innerText = "";

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let valid = true;

    if(name==""){
        document.getElementById("nameError").innerText="Name is required";
        valid=false;
    }

    if(!email.includes("@") || !email.includes(".")){
        document.getElementById("emailError").innerText="Invalid Email";
        valid=false;
    }

    if(message.length<10){
        document.getElementById("messageError").innerText="Minimum 10 characters";
        valid=false;
    }

    event.preventDefault();

    if(valid){
        document.getElementById("success").innerText="Message Sent Successfully!";
    }

});