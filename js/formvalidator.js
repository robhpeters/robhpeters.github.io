/* js file for assignment 4*/

function validateForm() {

	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var isValidForm;
	var isValidFirst;
	var isValidLast;

	isValidFirst = validateFirstName(firstName);
	isValidLast = validateLastName(lastName);

	// Form is only valid if all fields pass validation.
	isValidForm = isValidFirst && isValidLast;


	// if form not valid return false so form not submitted
	if (!isValidForm) {
		return false;
	} else {
    document.getElementById("response").innerHTML = "Thank you for contacting us!";
    document.getElementById("submit").remove();
	return true;
	}

	// create a function to validate the first name
	function validateFirstName(el) {

		var firstValidLength = validateLength(el, 2); // validate that first name has the valid number of characters
		var firstValidLetters = validateLetters(el); // validate the right pattern
		var validFirstName = firstValidLength && firstValidLetters;

		if (!validFirstName){
			 document.getElementById("firstNameError").innerHTML="Please enter a valid first name."
		}

		return validFirstName; // first name is valid if both above are true
	}

	// create function to validate the last name
	function validateLastName(el) {

		var lastValidLength = validateLength(el, 2); // validate that last name has the valid number of characters
		var lastValidLetters = validateLetters(el); // validate the right pattern
		var validLastName = lastValidLength && lastValidLetters;

		if (!validLastName){
			document.getElementById("lastNameError").innerHTML="Please enter a valid last name."
		}

		return validLastName; // last name is valid if both above are true
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
