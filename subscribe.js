document.addEventListener("DOMContentLoaded", function () {
  var dismissButton = document.querySelector(".redirect");

  dismissButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  displayEmailFromURL();
});

function displayEmailFromURL() {
  var params = new URLSearchParams(window.location.search);
  var email = params.get("email");

  var confirmationEmailElement = document.querySelector(".confirmationEmail");
  if (confirmationEmailElement) {
    confirmationEmailElement.textContent = email || "";
  }
}
