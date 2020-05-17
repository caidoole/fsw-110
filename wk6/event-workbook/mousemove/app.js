

let redBox = document.getElementsByClassName("red-box")
redBox[0].addEventListener("mousemove", (event) => {
const x = event.clientX;
const y = event.clientY;
let coords = `X coords: ${x} , Y coords : ${y}`
console.log(coords)
} )
