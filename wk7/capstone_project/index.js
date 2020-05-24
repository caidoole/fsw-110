const form = document.getElementById("listForm");
const formHeader = document.getElementsByTagName("h1");
formHeader[0].style.color = "darkred";
const submitButton = document.getElementById("submit");
submitButton.style.padding = "10px";
submitButton.style.borderRadius = "15px";
const listCapture = document.getElementById("listOutput");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const time = document.getElementById("time").value;

  const listItem = document.createElement("div");
  listItem.id = title + description + time;
  listItem.style.display = "flex";
  listItem.style.flex = "1";
  listItem.style.flexDirection = "row";

  const itemTitle = document.createElement("div");
  itemTitle.style.marginRight = "20px";
  itemTitle.textContent = title;
  const itemDescription = document.createElement("div");
  itemDescription.style.marginRight = "20px";
  itemDescription.textContent = description;
  const itemTime = document.createElement("div");
  itemTime.style.marginRight = "20px";
  itemTime.textContent = time;
  const deleteButton = document.createElement("button");
  deleteButton.textContent= "X";
  deleteButton.style.color = "red";
  deleteButton.style.padding = "5px";
  deleteButton.style.borderRadius = "5px";
  deleteButton.style.borderColor = "red";
  deleteButton.style.borderWidth = "1px";
  deleteButton.style.fontSize = "8px";
  deleteButton.style.backgroundColor =  "white";
  deleteButton.addEventListener("click", (event) => {
      listItem.remove();
  })
   
  listItem.appendChild(itemTitle);
  listItem.appendChild(itemDescription);
  listItem.appendChild(itemTime);
  listItem.appendChild(deleteButton);
  listCapture.appendChild(listItem);
  
  form.reset();
})