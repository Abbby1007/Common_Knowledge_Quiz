
const resultsDisplay = document.getElementById('results');

function randomNum() {

    var num = Math.floor(Math.random() * 10);
    resultsDisplay.textContent = ` Number Generated: ${num}`;
}

