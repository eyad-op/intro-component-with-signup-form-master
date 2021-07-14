const email = document.getElementById("email");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const password = document.getElementById("password");

var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.getElementById("subBtn").addEventListener("click", function () {
  if (email.value.match(validRegex)) {
    email.classList.remove("form__input-active");
    emailErr.style.display = "none";
  } else {
    email.classList.add("form__input-active");
    email.placeholder = "email@example/com";
    email.value = "";
    document.getElementById("emailErr").style.display = "block";
  }

  if (fName.value) {
    document.getElementById("fnameErr").style.display = "none";
    fName.classList.remove("form__input-active");
  } else {
    document.getElementById("fnameErr").style.display = "block";
    fName.classList.add("form__input-active");
  }

  if (lName.value) {
    document.getElementById("lnameErr").style.display = "none";
    lName.classList.remove("form__input-active");
  } else {
    document.getElementById("lnameErr").style.display = "block";
    lName.classList.add("form__input-active");
  }

  if (password.value) {
    document.getElementById("passErr").style.display = "none";
    password.classList.remove("form__input-active");
  } else {
    document.getElementById("passErr").style.display = "block";
    password.classList.add("form__input-active");
  }
});
