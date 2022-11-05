const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', function(event) {
    event.preventDefault();
        if (Number(inputEl.dataset.length) === event.currentTarget.value.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } 
    else {
            inputEl.classList.add('invalid');
            inputEl.classList.remove('valid');
        }
});