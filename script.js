document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!usernameRegex.test(username)) {
        document.getElementById('message').textContent = 'Invalid username format.';
        return;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('message').textContent = 'Invalid email format.';
        return;
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('message').textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit.';
        return;
    }


    document.getElementById('message').textContent = 'Registration successful!';
});

