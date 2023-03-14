let form = document.getElementById('form'),
    email = document.getElementById('email'),
    error = document.getElementById('icon-error'),
    paragraph = document.getElementById('email-msg'),
    patterns = /^[^ ]+@[^ ]*\.[a-z]{3,4}$/;

email.addEventListener('input', validateEmail);

function validateEmail() {
    if (email.value.trim() === '') {
        paragraph.innerHTML = "Please provide an email";
        email.classList.add('bg-form');
        error.src = '';
    } else if (!email.value.match(patterns)) {
        paragraph.innerHTML = "Please provide a valid email";
        email.classList.add('bg-form');
        error.src = '../images/icon-error.svg';
    } else {
        paragraph.innerHTML = "Please submit the email";
        email.classList.remove('bg-form');
        error.src = '';
    }
}
