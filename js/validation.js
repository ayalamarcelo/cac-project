function formValidation() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const isValidEmail = /\w+@\w+\.\w+/;

    if (email === '' && password === '') {
        alert("All fields are required");
        return false;
    } else if (email.length > 40) {
        alert('Email address is too long');
        return false;
    } else if (!isValidEmail.test(email)) {
        alert('Provide a valid email address');
        return false;
    } else if (password === '') {
        alert('Password is required');
        return false;
    }

    return true;
}

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (formValidation()) {
        alert('Form is valid and ready to submit.');
        e.target.submit();
    }
});


AOS.init();