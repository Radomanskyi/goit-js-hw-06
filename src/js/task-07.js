const input = document.querySelector(`input`);
console.log(input);
const span = document.querySelector(`span`);
console.log(span);
input.addEventListener(`input`, onInputChange);
function onInputChange(event) {
    span.style.fontSize=Number(input.value)+'px';
}