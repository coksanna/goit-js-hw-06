function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  amount = inputRef.value;
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    let divSize = 30 + i * 10;
    divEl.insertAdjacentHTML("beforeend", `<div style="height: ${divSize}px; width: ${divSize}px; background-color: ${color}"></div>`);       
  }
};

function destroyBoxes() {
  divEl.innerHTML = "";
};

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);


