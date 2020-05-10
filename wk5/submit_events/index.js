document.body.style.backgroundColor = "lightBlue"

function submitForm(){
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value
  alert( "Confrim:" + ' ' + firstName + ' ' + lastName +  ' ' + age)
}
