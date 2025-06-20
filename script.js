// Question 1 getElement Properties
const questionDisplay = document.getElementById("question");
const choiceADisplay = document.getElementById("choiceA");
const choiceBDisplay = document.getElementById("choiceB");
const choiceCDisplay = document.getElementById("choiceC");
const choiceDDisplay = document.getElementById("choiceD");
const resultsDisplay = document.getElementById("results");


// JAVASCRIPT FOR THE FIRST QUESTIONS

// QUESTION 1 questions and answers
const firstQuestions = ["What is a group of cats called?", "What is the quirky name for a sudden heavy rainstorm in America?", "What is cognitive dissonance?", "What phenomenon describes animals oddly predicting the weather?", "Where would you find the world’s smallest street, Ebenezer Place?"];
const firstChoiceA = ["A clowder", "Cloud hospital", "Conflict between attitudes and behaviors", "Animal magnetism", " Scotland "];
const firstChoiceB = ["A cuddle", "Gully-washer", "Increased social interaction", "Bioclimatology", "Italy"];
const firstChoiceC = ["A chaos", "Water raid", "Heightened emotional states", "Weather wizards", "Brazil"];
const firstChoiceD = ["A gaggle", "Drip bomb", "Enhanced cognitive function", "Predictive behaviors", "Japan"];




let randomNum = Math.floor(Math.random() * 5);

let chosenQuestion = firstQuestions[randomNum];

let choiceA = firstChoiceA[randomNum];

let choiceB = firstChoiceB[randomNum];

let choiceC = firstChoiceC[randomNum];

let choiceD = firstChoiceD[randomNum];

questionDisplay.textContent = chosenQuestion;
choiceADisplay.textContent = choiceA;
choiceBDisplay.textContent = choiceB;
choiceCDisplay.textContent = choiceC;
choiceDDisplay.textContent = choiceD;

// Depending on the question chosen is the correct answer
// The player will only get one question
// If they get the asnwer right they move on
// if they get it wrong they have ot start over
// They only get one attemp to answer
if (randomNum == 0) {
    questionDisplay.textContent = chosenQuestion;
    document.getElementById("first").innerHTML = `<a href= "eeQuestion.html"> <button> ${choiceA} </button></a> <a href= "wrongAnswer.html"><button> ${choiceB}  </button></a> <br> <a href= "wrongAnswer.html"> <button> ${choiceC}  </button></a> <a href= "wrongAnswer.html"> <button> ${choiceD} </button></a> `

}
else if (randomNum == 1) {

    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceA}  </button></a>  <a href= "eeQuestion.html"> <button> ${choiceB}  </button></a> <br> <a href= "wrongAnswer.html"> <button> ${choiceC}  </button></a> <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a> `


}
else if (randomNum == 2) {


    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "eeQuestion.html"> <button> ${choiceA}  </button></a> <a href= "wrongAnswer.html"> <button> ${choiceB}  </button></a> <br> <a href= "wrongAnswer.html"> <button> ${choiceC}  </button></a> <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a>`


}
else if (randomNum == 3) {

    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceA}  </button></a> <a href= "wrongAnswer.html"> <button> ${choiceB}  </button> </a> <br> <a href= "wrongAnswer.html"> <button> ${choiceC}  </button></a> <a href= "eeQuestion.html"> <button> ${choiceD}  </button> </a>`


}
else if (randomNum == 4) {

    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "eeQuestion.html"> <button> ${choiceA}  </button></a> <a href= "wrongAnswer.html"> <button> ${choiceB}  </button> </a> <br> <a href= "wrongAnswer.html"> <button> ${choiceC}  </button></a> <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a>`


}









