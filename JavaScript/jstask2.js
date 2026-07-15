let images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
];

let index = 0;

document.getElementById("slider").src = images[index];

function nextImage() {
    index++;

    if (index == images.length) {
        index = 0;
    }

    document.getElementById("slider").src = images[index];
}

function previousImage() {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    document.getElementById("slider").src = images[index];
}

setInterval(function () {
    nextImage();
}, 3000);