function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('button.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('span.color');

function changeColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = `${color}`;
  spanEl.textContent = `${color}`; 
}

btnEl.addEventListener('click', changeColor);



// btnEl.addEventListener('click', () => {
//   const color = getRandomHexColor();
//   bodyEl.style.backgroundColor = `${color}`;
//   spanEl.textContent = `- ${color}`;
// }) 