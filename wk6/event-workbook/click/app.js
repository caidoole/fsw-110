// make the box disapear when the user clicks it

let redBox = document.getElementsByClassName("red-box")
redBox[0].addEventListener("mousedown", (event) => {
   redBox[0].style.backgroundColor = "white"
   //redBox[0].remove(); -- this option removes it from the JS 
})
