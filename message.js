const button = document.getElementById('show-message-button');
button.style.border = '2px solid pastel purple';
button.style.padding = '5px';
const containerWidth = 500;
const containerHeight = 300;
const containerLeft = (window.innerWidth - containerWidth) / 2;
const containerTop = (window.innerHeight - containerHeight) / 2;

button.addEventListener('click', function() {
  const randomX = Math.floor(Math.random() * containerWidth);
  const randomY = Math.floor(Math.random() * containerHeight);

  button.style.transition = 'transform 0.5s';
  button.style.transform = `translate(${randomX}px, ${randomY}px)`;

  document.getElementById('message').innerHTML = 'HELLOOO POOOO';
  document.getElementById('message').style.display = 'block';
});