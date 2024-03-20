document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            window.location.href = 'welcome.html';
        } else {
            document.getElementById('message').textContent = 'Invalid username or password';
        }
    };
    xhr.send(`username=${username}&password=${password}`);
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'testuser' && password === 'testpassword') {
        document.getElementById('message').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    } else {
        document.getElementById('message').style.display = 'block';
        document.getElementById('success-message').style.display = 'none';
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
  
    if (localStorage.getItem('username') === username && localStorage.getItem('email') === email && localStorage.getItem('password') === password) {
      window.location.href = 'homepage.html';
    } else {
      alert('Invalid username, email, or password');
    }
  });




  

