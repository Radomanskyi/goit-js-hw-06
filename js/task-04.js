const counterValue = document.querySelector(`span `);
const button = document.querySelectorAll(`button`);
const buttonDecrement = button[0];
const buttonIncrement = button[1];

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

buttonDecrement.addEventListener(`click`, function() {
    counter.decrement();
    counterValue.textContent = counter.value;
});

buttonIncrement.addEventListener(`click`, function() {
    counter.increment();
    counterValue.textContent = counter.value;
});