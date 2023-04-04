const input = document.querySelector(`input`);
const span = document.querySelector(`span`);

input.addEventListener(`input`, onInputChange);
function onInputChange(event) {
    console.log(event.currentTarget.value);
    span.textContent = event.currentTarget.value;
}