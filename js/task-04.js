// const counter = {
//     counterValue: 0,
//     decrement() {    
//         this.counterValue -= 1;
//     },
//     increment() {        
//         this.counterValue += 1;
//     }
// }

// const decrementBtn = document.querySelector('button[data-action="decrement"]');

// const incrementBtn = document.querySelector('button[data-action="increment"]');

// const counterEl = document.querySelector('#value');

// decrementBtn.addEventListener('click', function() {
//     counter.decrement();
//     counterEl.textContent = counter.counterValue;
// } );
// incrementBtn.addEventListener('click', function() {
//     counter.increment();
//     counterEl.textContent = counter.counterValue;
// } );


let counterValue = 0;
function decrement() {    
    counterValue -= 1;
};
function increment() {        
    counterValue += 1;
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');
decrementBtn.addEventListener('click', function() {
    decrement();
    counterEl.textContent = counterValue;
});
incrementBtn.addEventListener('click', function() {
    increment();
    counterEl.textContent = counterValue;
});

