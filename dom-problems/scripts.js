const p1 = document.getElementById('p1');

let button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
  p1.style.backgroundColor = 'red';
});