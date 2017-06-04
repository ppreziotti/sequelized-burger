// Validates the burger name entered by the user
function validateBurger() {
	var input = document.forms["burger-form"]["name"].value.trim();
	var checkBurgerName = /^[A-Za-z\s]{6,50}$/;
	if (!checkBurgerName.test(input)){
		alert("Burger name can only contain letters and must be between 6 to 50 characters long. Sorry for the inconvenience!");
		return false;
	}
}

// Validates the customer name entered by the user
function validateCustomer() {
	var inputArray = [];
	var input = document.forms["customer-form"]["customer"].value.trim();
	inputArray.push(input);
	console.log(inputArray);
// 	if(inputArray.indexOf(input) !== -1) {
// 		alert("Sorry, " + input + " already ate a burger");
// 		return false;
// 	}
}