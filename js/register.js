document.getElementById('registerButton').addEventListener('click', function () {
    let errorMessages = [];
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const password = document.getElementById('password').value.trim();
    const birthdate = document.getElementById('birthdate').value.trim();
    const country = document.getElementById('country').value;

    if (!username || !email || !age || !password || !birthdate || country === 'none') {
        errorMessages.push('All fields must be filled out.');
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessages.push('Invalid email format.');
        }

        if (age <= 0) {
            errorMessages.push('Age must be a positive number.');
        }

        if (password.length < 6) {
            errorMessages.push('Password must be at least 6 characters long.');
        }
    }

    const errorContainer = document.getElementById('errorMessages');
    errorContainer.innerHTML = '';
    if (errorMessages.length > 0) {
        errorContainer.innerHTML = errorMessages.join('<br>');
    } else {
        const user = {
            username: username,
            email: email,
            age: age,
            password: password,
            birthdate: birthdate,
            country: country
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset();
    }
});
