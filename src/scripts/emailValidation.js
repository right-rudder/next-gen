document.getElementById("email").addEventListener("input", function () {
  const email = this.value;
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    this.setCustomValidity("Please enter a valid email address.");
  } else {
    this.setCustomValidity("");
  }
});
