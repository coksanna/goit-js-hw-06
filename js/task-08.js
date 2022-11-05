const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;
    if (formElement.email.value === '' || formElement.password.value === '') {
        alert("Enter all data, please!");
    } else {
        const formData = {
            email,
            password,
        };
        console.log(formData);
        event.target.reset();
    }    
}
