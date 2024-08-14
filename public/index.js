// public/index.js
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.user-name').forEach((elem) => {
    elem.addEventListener('click', (event) => {
      alert(event.target.innerHTML);
    });
  });

  document.querySelector('.send-button').addEventListener('click', (event) => {
    const text = document.querySelector('.input-text').value;
    if (text.toLowerCase() === 'end') {
        window.location.replace('/end');
    } 
    else {
      fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: text }) })
    }
});
});
