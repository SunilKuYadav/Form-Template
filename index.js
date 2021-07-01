const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const fnameValue = fname.value;
	const lnameValue = lname.value;
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	// First name validation
	if(fnameValue === '' || fnameValue === null) {
		setErrorFor(fname, 'First name cannot be blank');
	} else if(/[^A-Za-z0-9]/.test(fnameValue)){
		setErrorFor(fname, 'connot contain number or special character');
	} else {
		setSuccessFor(fname);
	}

	// Last name validation
	if(lnameValue === '' || lnameValue === null) {
		setErrorFor(lname, 'Last name cannot be blank');
	} else if(/[^A-Za-z0-9]/.test(lnameValue)){
		setErrorFor(lname, 'connot contain number or special character');
	} else {
		setSuccessFor(lname);
	}

	// Username validation
	if(usernameValue === '' || username === null) {
		setErrorFor(username, 'Username cannot be blank');
	} else if (usernameValue.length < 6) {
		setErrorFor(username, 'Username should be more then 5 word');
	} else if (usernameValue.length >30) {
		setErrorFor(username, 'Username should not be more then 30 word');
	} else {
		setSuccessFor(username);
	}

	// Email validation
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	// Password validation
	if(passwordValue === '' || passwordValue === null) {
		setErrorFor(password, 'Password cannot be blank');
	} else if(passwordValue.length < 8){
		setErrorFor(password, 'Passwoed min length should be 8');
	}else if (passwordValue.length > 256) {
		setErrorFor(password, 'Password max length should be 256');
	} else if (!/[A-Z]/.test(passwordValue)) {
		setErrorFor(password, 'Password should be containing a upper case letter');
	} else if (!/[a-z]/.test(passwordValue)) {
		setErrorFor(password, 'Password should be containg a lower case letter');
	} else if (!/[0-9]/.test(passwordValue)) {
		setErrorFor(password, 'Password should contain a number');
	} else if (!/[^A-Za-z0-9]/.test(passwordValue)){
		setErrorFor(password, 'Password should contain a special character');
	} else {
		setSuccessFor(password);
	}
	
	// Conform password validation and matching
	if(password2Value === '' || password2Value === null) {
		setErrorFor(password2, 'Confirm password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

// Function for updating error msg to inbox
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

// Function for updating success input box
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// Function for email validation
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// function isEmail(email) {
// 	return /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(email);
// }

// function isEmail(email) {
// 	var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// 	return !!email && typeof email === 'string' && email.match(emailformat)};


// Function for show and hide password entries
function showPass(){
  if (password.type === "password" && password2.type === "password") {
    password.type = "text";
	password2.type = "text";
  } else {
    password.type = "password";
	password2.type = "password";
  }
}