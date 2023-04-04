const form = document.querySelector(`form`);
const input = document.querySelectorAll(`input`);
const inputEmail = input[0];
const inputPassword = input[1];


form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit (event) {
 event.preventDefault();
 const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(`{email: email.value, password: password.value}`);
  event.currentTarget.reset();
}