const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector(`ul`);
const elements = ingredients.map((ingredient) => {
  const itemIngredients = document.createElement(`li`);
  itemIngredients.classList.add(`item`);
  itemIngredients.textContent = ingredient;
  return itemIngredients;
});

ingredientsEl.append(...elements);
console.log(elements);