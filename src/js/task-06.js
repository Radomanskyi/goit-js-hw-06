const input = document.querySelector(`input`);
const dataLength = input.getAttribute(`data-length`);


input.addEventListener(`blur`, onInputBlur);
function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(dataLength)) {
        input.classList.add(`valid`);
        if (input.classList.contains(`invalid`)) {
            input.classList.remove(`invalid`);
        }
    }
    else {
        input.classList.add(`invalid`);
    }
}   