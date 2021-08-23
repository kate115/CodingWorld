
//Add the Text when needed
var addText = function() {
  //Variables
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var submit = document.getElementById("submit");
  var outputBox = document.getElementById("submitText");
  //Output Text Function
  var outputText = function(isValid) {
    if (isValid == true) {
      outputBox.innerHTML = "Congratulations! You're Signed In!";
    } else {
      outputBox.innerHTML = "Oh no! Please enter all of the inputs!";
    }
  }

  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(gender);
  if (firstName != "" && lastName != "" && age != "" && gender != "") {
    outputText(true);
    console.log(true);
  } else {
    outputText(false);
    console.log(false)
  }
}
//Event Listener
submit.addEventListener("click", addText);