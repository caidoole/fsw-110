
document.body.style.background = " url(https://images.unsplash.com/photo-1514161740820-6926c370d87e?ixlib=rb-1.2.1&w=1000&q=80)"
document.body.style.backgroundPosition = "center"
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundSize = "cover"



var header = document.createElement("h1")
header.textContent=" Welcome To Something New"
document.body.append(header)
header.style.textAlign = "center"

var nav = document.createElement("a")
nav.textContent="Home";
document.body.append(nav)


var nav = document.createElement("a")
nav.textContent ="Gallery"
document.body.append(nav)
nav.style.margin = "5px"


var nav = document.createElement("a")
nav.textContent ="Contact"
document.body.append(nav)
nav.style.margin = "5px"



var para = document.createElement("p")
para.textContent= "This sight is dedicated to starting to understand how we style and input new elements into to the Dom using JS"
document.body.append(para)


var picture = document.createElement("img")
picture.src = "https://www.godupdates.com/wp-content/uploads/2015/07/mj-godupdates-15-pictures-to-make-you-happy-fb.jpg"
document.body.append(picture)
picture.style.maxWidth = "800px"
picture.style.margin = " 0 auto"
picture.style.display = "block"
picture.style.boxShadow = "4px 5px 10px"
picture.style.border = "thin solid black"
picture.style.borderRadius = "50px"


var list = document.createElement("ul")
list.textContent = "JS Can"
document.body.append(list)
list.style.textDecoration = "underline"
list.style.marginTop = "50px"

var listItemOne = document.createElement("li")
listItemOne.textContent = "Create Elements"


var listItemTwo = document.createElement("li")
listItemTwo.textContent = "Align Content"

var listItemThree = document.createElement("li")
listItemThree.textContent = "Append Items"

document.getElementsByTagName("ul")[0].appendChild(listItemOne)
document.getElementsByTagName("ul")[0].appendChild(listItemTwo)
document.getElementsByTagName("ul")[0].appendChild(listItemThree)

var bottom = document.createElement("footer")
bottom.textContent="Caitlin Dooley FSW-110"
document.body.append(bottom)
bottom.style.textAlign = "center"
bottom.style.border = "thin solid black"





