let images = [
    "img/maintenance001.jpg",
    "img/maintenance002.jpg",
    "img/maintenance003.jpg",
    "img/maintenance004.jpg",
];


let image = images[Math.floor(Math.random() * images.length)];
document.getElementById("img").innerHTML = "<img src='" + image + "' class='maintenance' />";
