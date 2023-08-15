document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  // console.log(email, password);

  if (email === "kazimehedihasan33@gmail.com" && password === "secret") {
    window.location.href = "dank.html";
  } else {
    alert("tui je amar bondu amar vabtei sorom kore, tui password vule gecho");
  }
});



