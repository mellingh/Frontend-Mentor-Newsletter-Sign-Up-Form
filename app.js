document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");
  var emailInput = document.getElementById("email");
  var legendError = document.querySelector(".legendError");

  // Function to extract and display email value from URL parameter
  function displayEmailFromURL() {
    // Get the email parameter from the URL
    var params = new URLSearchParams(window.location.search);
    var email = params.get("email");

    // Display the email value in the .confirmationEmail element
    var confirmationEmailElement = document.querySelector(".confirmationEmail");
    if (confirmationEmailElement) {
      confirmationEmailElement.textContent = email || "";
    }
  }

  // Call the function to display email from URL when the page loads
  displayEmailFromURL();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var emailValue = emailInput.value.trim();
    var emailRegex = /^[a-zA-Z0-9._%+-]+@(?!.*#)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailValue)) {
      // Display error message and styling if email is invalid
      emailInput.classList.add("errorDisplay");
      legendError.style.display = "inline-block";
    } else {
      // Reset error message and styling if email is valid
      emailInput.classList.remove("errorDisplay");
      legendError.style.display = "none";

      // Redirect to new page with email value as URL parameter
      window.location.href =
        "subscribe.html?email=" + encodeURIComponent(emailValue);
    }
  });

  document.addEventListener("click", function (event) {
    // Check if the clicked element is not the email input field
    if (event.target !== emailInput) {
      // Remove error message and styling
      emailInput.classList.remove("errorDisplay");
      legendError.style.display = "none";
    }
  });
});
