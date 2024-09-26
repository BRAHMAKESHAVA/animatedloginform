const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
 
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
 
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
var users = {brahma:14345};

    // Function to handle signup form submission
    function signUp() {
      var username = $("#n1").val();
      var password = $("#n2").val();

      // Add the new user to the users object
      users[username] = password;

      // Clear the signup form fields
      // $("#n1").val("");
      // $("#n2").val("");

      // Display a success message
      $("#message").text("Signup successful! You can now login.");
      console.log(users);
    }

    // Function to handle login form submission
    function login() {
      var username = $("#n1").val();
      var password = $("#n2").val();

      // Check if the username exists in the users object
      if (username in users) {
        // Check if the password matches
        if (users[username] === password) {
          // Display a success message
          $("#message1").text("Login successful! Welcome, " + username + "!");
        } else {
          // Display an error message for incorrect password
          $("#message1").text("Invalid password. Please try again.");
        }
      } else {
        // Display an error message for unknown username
        $("#message1").text("Invalid username. Please register using the signup form.");
      }

      // Clear the login form fields
      // $("#n1").val("");
      // $("#n2").val("");
    }