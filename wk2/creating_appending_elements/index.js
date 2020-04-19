var header = document.createElement("h1");
header.textContent= "Welcome to my JS site";
document.body.append(header);

var para = document.createElement("p");
para.textContent = "All of this was created with JavaScript";
document.body.append(para);


var list = document.createElement("ol");
list.textContent = "Item List";
document.body.append(list);

var listItemOne = document.createElement("li");
listItemOne.textContent = "Honey";

var listItemTwo = document.createElement("li");
listItemTwo.textContent = "Lemons";

var listItemThree = document.createElement("li");
listItemThree.textContent = "Barbed Wire";

document.getElementsByTagName("ol")[0].appendChild(listItemOne);
document.getElementsByTagName("ol")[0].appendChild(listItemTwo);
document.getElementsByTagName("ol")[0].appendChild(listItemThree);