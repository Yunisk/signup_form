const password = document.querySelector("#pass");
const confirmPassword = document.querySelector("#confirmpass");
const errorMessage = document.querySelector(".password-error");

confirmPassword.addEventListener("input", () => {
  console.log("Confirm password input detected");
  if (confirmPassword.value && password.value !== confirmPassword.value) {
    // Add styles to make the border color of inputs red
    password.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";
    // Display the error message
    errorMessage.textContent = "* Passwords do not match!";
  } else {
    // Reset styles and error message when passwords match or confirm password is empty
    password.style.borderColor = "";
    confirmPassword.style.borderColor = "";
    errorMessage.textContent = "";
  }
});
