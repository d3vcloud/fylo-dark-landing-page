const formSignUp = document.querySelector("form");
const txtEmail = document.querySelector("input");

const validateEmail = (email) => {
  if (email === "") return false;
  if (!email.includes("@") || !email.includes(".")) return false;

  return true;
};

formSignUp.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailData = txtEmail.value;
  if (!validateEmail(emailData)) txtEmail.classList.add("error");
  else txtEmail.classList.remove("error");
});
