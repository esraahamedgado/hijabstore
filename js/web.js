function updateClock() {
  var currentDate = new Date();
  var dateString = currentDate.toDateString();
  var timeString = currentDate.toLocaleTimeString();

  document.getElementById("date").innerHTML = dateString;
  document.getElementById("time").innerHTML = timeString;
}
setInterval(updateClock, 1000); // Update every 1 second

document.getElementById("contact").addEventListener("submit", function (event) {
  // Reset previous error messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("surname-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("checkbox-error").textContent = "";
  document.getElementById("message-error").textContent = "";
  window.location.href = "help.html";

  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  var message = document.getElementById("message").value;

  // Check if name and surname are not empty
  if (name.trim() === "") {
    document.getElementById("name-error").textContent = "*Name is required.*";
    event.preventDefault(); // Prevent form submission
  }

  if (surname.trim() === "") {
    document.getElementById("surname-error").textContent =
      "*Surname is required.*";
    event.preventDefault(); // Prevent form submission
  }

  // Check if the email is valid
  var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").textContent =
      "*Please enter a valid email address.*";
    event.preventDefault(); // Prevent form submission
  }

  // Check if at least one checkbox is checked
  if (checkboxes.length === 0) {
    document.getElementById("checkbox-error").textContent =
      "*Please select at least one option.*";
    event.preventDefault(); // Prevent form submission
  }

  // Check if the message is not empty
  if (message.trim() === "") {
    document.getElementById("message-error").textContent =
      "*Message is required.*";
    event.preventDefault(); // Prevent form submission
  }
});

// Get a reference to the cancel button by its id
const cancelButton = document.getElementById("cancelButton");

// Add an event listener to the button to define the cancel action
cancelButton.addEventListener("click", function () {
  // You can define what should happen when the button is clicked here.
  // For example, you can redirect to another page or clear form fields.

  // For demonstration purposes, let's display an alert:
  alert("Operation cancelled!");
});
