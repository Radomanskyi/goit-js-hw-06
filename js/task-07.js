const input = document.querySelector(`input`);
const span = document.querySelector(`span`);

input.addEventListener(`input`, onInputChange);
function onInputChange(event) {
    span.style.fontSize = input.value+'px';
}