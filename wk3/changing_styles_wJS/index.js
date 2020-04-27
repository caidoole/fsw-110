var header = document.createElement("h1")
header.textContent = "Welcome"
document.body.append(header)

var nav = document.createElement("a")
nav.textContent = "Home"
document.body.append(nav)
nav.style.textDecoration = "underline"


var nav = document.createElement("a")
nav.textContent = "About"
document.body.append(nav)
nav.style.margin = "10px"
nav.style.textDecoration = "underline"

var nav = document.createElement("a")
nav.textContent = "Contact"
document.body.append(nav)
nav.style.textDecoration = "underline"

var content = document.createElement("p")
content.textContent = "Testing One - Please let this work!!"
document.body.append(content)


var listItems = [
    "Honey",
    "Chicken",
    "Bananas",
    "Duct Tape",
    "Chocolate",
    "Cucumbers",
    "Aloe Vera"
]
var list = document.createElement("ol");
list.textContent = "Shopping List";
list.style.fontSize = "20px"
document.body.append(list);

for (var i = 0; i < listItems.length; i++) {
    var item = document.createElement("li");
    item.textContent = listItems[i];
    item.style.fontSize = "20px"
    item.style.fontWeight = "lighter"
    item.style.fontFamily = "sansSerif"
    item.style.color = "cornflowerblue"
    item.classList.add("border");
    document.getElementsByTagName("ol")[0].appendChild(item);

}