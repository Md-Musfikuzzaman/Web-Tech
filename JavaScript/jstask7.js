let size = 16;

function changeBackground() {
    document.getElementById("text").style.backgroundColor = "yellow";
}

function increaseFont() {
    size = size + 2;
    document.getElementById("text").style.fontSize = size + "px";
}

function centerText() {
    document.getElementById("text").style.textAlign = "center";
}

function resetStyle() {
    let text = document.getElementById("text");

    size = 16;

    text.style.backgroundColor = "";
    text.style.fontSize = "16px";
    text.style.textAlign = "left";
}