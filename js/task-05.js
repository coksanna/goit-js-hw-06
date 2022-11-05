const inputEl = document.querySelector('#name-input');

const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', function(event) {
    event.preventDefault();
    spanEl.textContent = event.currentTarget.value.length > 0 ? event.currentTarget.value : 'Anonimous';    
});
