var headingEl = null;
window.onload = function() {
    
    headingEl = document.querySelector('h1');
    headingEl.style.color = 'red';
    var buttonEl = document.querySelector('button');
    buttonEl.addEventListener('button').onclick = function() {
        console.log('button clicked');
    }
}