
// const resultsDisplay = document.getElementById('results');

// function randomNum() {

//     var num = Math.floor(Math.random() * 10);
//     resultsDisplay.textContent = ` Number Generated: ${num}`;
// }

// let username;
// const resultsDisplay = document.getElementById('results');
// document.getElementById("mySubmit").onclick = function () {
//     username = document.getElementById("myText").value;
//     resultsDisplay.textContent = `${username}`;
// };
let username;
const resultsDisplay = document.getElementById('results');
const instructionsDisplay = document.getElementById('instructions');

let goOn = true;
let secretCode = Math.floor(Math.random() * 10);
instructionsDisplay.textContent = `Try to guess the secret Code`;
function mission1() {
    username = document.getElementById("myText").value;

    if (username == secretCode) {
        resultsDisplay.textContent = ` Correct!!`;
        document.getElementById("next").style.visibility = "hidden";

        document.getElementById("buttonAppear").innerHTML = '<button> MOVE ON </button>'
    }
    else if (username > secretCode) {
        resultsDisplay.textContent = `Answer is too HIGH. try again`;
    }
    else if (username < secretCode) {
        resultsDisplay.textContent = `Answer is too LOW. try again`;
    }
    else {
        resultsDisplay.textContent = `weird`;
    }

    // resultsDisplay.textContent = `${username}`;
}