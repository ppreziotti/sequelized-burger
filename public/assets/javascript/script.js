// Validates the burger name entered by the user
function validateForm() {
	var input = document.forms["burger-form"]["name"].value.trim();
	var checkBurgerName = /^[A-Za-z\s]{6,50}$/;
	if (!checkBurgerName.test(input)){
		alert("Burger name can only contain letters and must be between 6 to 50 characters long. Sorry for the inconvenience!");
		return false;
	}
}