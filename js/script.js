let form = document.getElementById('form');
let email = document.getElementById('email');
let error = document.getElementById('icon-error');
let paragraph = document.getElementById('email-msg');

email.addEventListener('click', validateEmail)
let patterns = /^[^ ]+@[^ ]*\.[a-z]{3,4}$/;
function validateEmail() {
    

    if (!email.value.match(patterns)) {
        email.classList.add('bg-form')
        error.src = '../images/icon-error.svg'
        paragraph.innerHTML = "Please provide a valid email";
        
    } else {
        paragraph.innerHTML = "Please submit the email";

    }
     
    if (email.value == '') {
        paragraph.innerHTML = "Please provide a email";
    }

}