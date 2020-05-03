var userInput = document.createElement('div');
userInput.setAttribute("id", "userInput");
userInput.style.display = "flex";
userInput.style.flex = "1";
userInput.style.flexDirection = "row";
userInput.textContent = "Enter two numbers: ";

var numOne = document.createElement("input");
numOne.style.height = "20px";
numOne.style.width = "20px";
numOne.style.marginLeft = "20px";
numOne.setAttribute("id", "numOne");
userInput.append(numOne);

var numTwo = document.createElement("input");
numTwo.style.height = "20px";
numTwo.style.width = "20px";
numTwo.style.marginLeft = "20px";
numTwo.setAttribute("id", "numTwo");
userInput.append(numTwo);

document.body.append(userInput);

var calcButtons = document.createElement("div");
calcButtons.setAttribute("id", "calcButtons");
calcButtons.style.display = "flex";
calcButtons.style.flex = "1";
calcButtons.style.flexDirection = "row";
calcButtons.style.marginTop = "10px";

var addButton = document.createElement("button");
addButton.setAttribute("id", "addButton");
addButton.addEventListener("click", function() {
    var num1 = document.getElementById("numOne").value;
    var num2 = document.getElementById("numTwo").value;
    add(num1, num2);
})
addButton.innerHTML = "Add";
addButton.style.height = "25px";
addButton.style.width = "50px";
addButton.style.marginRight = "10px";
addButton.style.backgroundColor = "cornflowerblue";
calcButtons.append(addButton);

var subButton = document.createElement("button");
subButton.setAttribute("id", "subButton");
subButton.addEventListener("click", function() {
    var num1 = document.getElementById("numOne").value;
    var num2 = document.getElementById("numTwo").value;
    sub(num1, num2);
})

subButton.innerHTML = "Subtract";
subButton.style.height = "25px";
subButton.style.width = "75px";
subButton.style.marginRight = "10px";
subButton.style.backgroundColor = "lightpink"
calcButtons.append(subButton);


var multButton = document.createElement("button");
multButton.setAttribute("id", "multButton");
multButton.addEventListener("click", function() {
    var num1 = document.getElementById("numOne").value;
    var num2 = document.getElementById("numTwo").value;
    mult(num1, num2);
})

multButton.innerHTML = "Multiply";
multButton.style.height = "25px";
multButton.style.width = "75px";
multButton.style.marginRight = "10px";
multButton.style.backgroundColor = "lightgreen"
calcButtons.append(multButton);

document.body.append(calcButtons);

var results = document.createElement("div");
results.setAttribute("id", "results");
results.style.display = "flex";
results.style.flex = "1";
results.style.flexDirection = "row";
results.style.marginTop = "10px";
results.textContent = "Results: ";

var resultValue = document.createElement("div");
resultValue.setAttribute("id", "resultValue");
resultValue.style.display = "flex";
resultValue.style.flex = "1";
resultValue.style.flexDirection = "row";
resultValue.style.marginLeft = "10px";
resultValue.textContent = "Please enter values above";

results.append(resultValue);

document.body.append(results);

function add(num1, num2) {
    result = parseInt(num1) + parseInt(num2);
    document.getElementById("resultValue").textContent = result;
}

function sub(num1, num2) {
    result = parseInt(num1) - parseInt(num2);
    document.getElementById("resultValue").textContent = result;
}

function mult(num1, num2) {
    result = parseInt(num1) * parseInt(num2);
    document.getElementById("resultValue").textContent = result;
}

