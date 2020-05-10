

  const form = document.getElementById("form");
  const formHeader = document.getElementsByTagName("h3");
  formHeader[0].style.color = "blue";
  const submitButton = document.getElementById("submit");
  submitButton.style.backgroundColor = "orange";
  submitButton.style.padding = "5px"
  submitButton.style.borderRadius = "20px";



  form.addEventListener("submit", (event) => {
   //event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const gender = form.gender.value;
    const dietChoices = form.diet;
    const dietSelected = [];
    const location = form.location.value;
    
    for(var i = 0; i < dietChoices.length; i++ )
    {
      if(dietChoices[i].checked)
      {
        dietSelected.push(dietChoices[i].value);
      }
    }

    alert(
      "Please confirm: " + 
      "\nFirst Name: " + firstName +
      "\nLast Name: " + lastName +
      "\nAge: " + age + 
      "\nGender: " + gender + 
      "\nDiet Option(s): " + dietSelected + 
      "\nPhone: " + phone +
      "\nLocation: " + location
    );

  })