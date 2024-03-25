
var countValue = 0;
var counterElement = document.getElementById("counter");

function count() {
    countValue++;
    updateCounter();
}

function reset() {
    countValue = 0;
    updateCounter();
}

function updateCounter() {
    counterElement.textContent = countValue;
}
