// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navFunction() {

  var x = document.getElementById("myTopNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validateForm() {

	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var isValidForm;
	var isValidFirst = true;
	var isValidLast = true;

	isValidFirst = validateName(firstName);
  if (!isValidFirst) {
     document.getElementById("firstNameError").innerHTML="Please enter a valid first name.";
  } else {
    let myObj = document.getElementById("firstNameError");

    if (myObj) {
      document.getElementById("firstNameError").remove();
    }

  }

	isValidLast = validateName(lastName);
  if (!isValidLast) {
     document.getElementById("lastNameError").innerHTML="Please enter a valid last name.";
  } else {
    // Check if there is something to remove from DOM
    let myObj = document.getElementById("lastNameError");
    if (myObj) {
      document.getElementById("lastNameError").remove();
    }
  }
	// Form is only valid if all fields pass validation.
	isValidForm = isValidFirst && isValidLast;


	// if form not valid return false so form not submitted
	if (!isValidForm) {
		return false;
	} else {
    document.getElementById("response").innerHTML="Thank you for contacting us! Someone will be in touch soon regarding your inquiry!";
    document.getElementById("submit").remove();
	   return false;
	}


  function validateName(el) {

    var validLength = validateLength(el, 2);
    var validLetters = validateLetters(el);
    return validLength && validLetters;

  }

	// function to validate that the element meets the length criteria
	function validateLength(el, l) {
			if(el.value.length < l) {
			 return false;
			 } else {
			  return true;
			 }
		}

	// function to validate the letters pattern
	function validateLetters(el) {
		var myRegex = /^[A-Za-z]+$/;

		if (el.value.match(myRegex)) {
			return true;
		} else {
			return false;
		}
	}

}
