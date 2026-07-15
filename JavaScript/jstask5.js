document.getElementById("analyze").addEventListener("click", function () {

    let text = document.getElementById("text").value;

    let characters = text.length;

    let words;

    if (text.trim() == "") {
        words = 0;
    } else {
        words = text.trim().split(/\s+/).length;
    }

    let reverse = text.split("").reverse().join("");

    document.getElementById("result").innerHTML =
        "<p>Total Characters: " + characters + "</p>" +
        "<p>Total Words: " + words + "</p>" +
        "<p>Reversed Text: " + reverse + "</p>";

});