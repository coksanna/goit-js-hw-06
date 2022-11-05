const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulLinksEl = document.querySelector('#ingredients');
ingredients.forEach(element => {
  const item = document.createElement("li");
  item.textContent = element;
  item.classList.add("item");
  ulLinksEl.append(item);
});

