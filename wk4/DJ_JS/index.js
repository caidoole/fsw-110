var square = document.createElement("div");
square.setAttribute("id", "interactive");
square.style.height = "550px";
square.style.width = "550px";
square.style.backgroundColor = "white";
square.style.border = "thin solid black";
document.body.append(square);

document.getElementById("interactive").addEventListener("mouseover", function () {
    square.style.backgroundColor = "blue";
});


square.addEventListener("keypress", function () {
    square.style.backgroundColor = "blue";
});


document.getElementById("interactive").addEventListener("mouseleave", function () {
    square.style.backgroundColor = "white";
});

document.getElementById("interactive").addEventListener("mousedown", function () {
    square.style.backgroundColor = "red";
});

document.getElementById("interactive").addEventListener("mouseup", function () {
    square.style.backgroundColor = "yellow";
});

document.getElementById("interactive").addEventListener("dblclick", function () {
    square.style.backgroundColor = "green";
});

document.addEventListener("scroll", function () {
    square.style.backgroundColor = "orange";
});


document.addEventListener('keydown', function (key) {
    if (key.keyCode === 66) square.style.backgroundColor = 'blue';
});


document.addEventListener('keydown', function (key) {
    if (key.keyCode === 82) square.style.backgroundColor = 'red';
});

document.addEventListener('keydown', function (key) {
    if (key.keyCode === 89) square.style.backgroundColor = 'yellow';
});

document.addEventListener('keydown', function (key) {
    if (key.keyCode === 71) square.style.backgroundColor = 'green';
});

document.addEventListener('keydown', function (key) {
    if (key.keyCode === 79) square.style.backgroundColor = 'orange';
});