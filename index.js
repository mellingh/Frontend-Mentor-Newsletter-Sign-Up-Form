document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");
  var emailInput = document.getElementById("email");
  var legendError = document.querySelector(".legendError");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var emailValue = emailInput.value.trim();
    var emailRegex = /^[a-zA-Z0-9._%+-]+@(?!.*#)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailValue)) {
      emailInput.classList.add("errorDisplay");
      legendError.style.display = "inline";
    } else {
      emailInput.classList.remove("errorDisplay");
      legendError.style.display = "none";
      window.location.href =
        "subscribe.html?email=" + encodeURIComponent(emailValue);
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target !== emailInput) {
      emailInput.classList.remove("errorDisplay");
      legendError.style.display = "none";
    }
  });
});
