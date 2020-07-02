window.onload = function() {
    var pEl = document.createElement('p');
    pEl.textContent = "Konexio";
    // console.log(pEl);
    var bodyEl = document.querySelector('body');
    bodyEl = pEl.appendChild('body');
    console.log(bodyEl);
}