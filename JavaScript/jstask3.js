let mode = "light";

let header = document.getElementById("header");
let content = document.getElementById("content");
let footer = document.getElementById("footer");
let button = document.getElementById("toggleButton");

button.addEventListener("click", function () {

    if (mode == "light") {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        header.style.backgroundColor = "gray";
        header.style.color = "white";
        header.style.border = "1px solid white";

        content.style.backgroundColor = "black";
        content.style.color = "white";
        content.style.border = "1px solid white";

        footer.style.backgroundColor = "gray";
        footer.style.color = "white";
        footer.style.border = "1px solid white";

        button.innerText = "Switch to Light Mode";
        mode = "dark";

    } else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        header.style.backgroundColor = "white";
        header.style.color = "black";
        header.style.border = "1px solid black";

        content.style.backgroundColor = "white";
        content.style.color = "black";
        content.style.border = "1px solid black";

        footer.style.backgroundColor = "white";
        footer.style.color = "black";
        footer.style.border = "1px solid black";

        button.innerText = "Switch to Dark Mode";
        mode = "light";

    }

});