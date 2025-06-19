// Question 3 getElement Properties
const questionDisplay = document.getElementById("question");
const choiceADisplay = document.getElementById("choiceA");
const choiceBDisplay = document.getElementById("choiceB");
const choiceCDisplay = document.getElementById("choiceC");
const choiceDDisplay = document.getElementById("choiceD");
const resultsDisplay = document.getElementById("results");


// JAVASCRIPT FOR THE THIRD QUESTIONS

// QUESTION 3 questions and answers
const firstQuestions = ['How many taste buds does an average human have?', 'What type of cloud is fluffy and looks like cotton candy in the sky?', "What is the function of the uvula, the little dangly thing at the back of the throat?", "Which fruit is known as the “king of fruits”?", "What is the tiny piece of plastic at the end of a shoelace called?"];
const firstChoiceA = ["50", "Stratus", "Speech articulation", "Apple", "Tag"];
const firstChoiceB = ["200", "Cumulus", "Swallowing control", "Mango", "Aglet"];
const firstChoiceC = ["10,000", "Nimbus", "Taste detection", "Banana", "Bracket"];
const firstChoiceD = ["Infinite", "Cirrus", "Decor", "Pineapple", "Loop"];




let randomNum = Math.floor(Math.random() * 3);

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
    document.getElementById("first").innerHTML = `<a href= "wrongAnswer.html"> <button> ${choiceA}  </button> </a>`


    document.getElementById("second").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceB}  </button> </a> `
    document.getElementById("third").innerHTML = ` <a href= "ccccPage.html"> <button> ${choiceC}  </button> </a> `
    document.getElementById("fourth").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a> `
}
else if (randomNum == 1) {

    document.getElementById("second").innerHTML = `<a href= "ccccPage.html"> <button> ${choiceB}  </button> </a>`
    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceA}  </button> </a> `
    document.getElementById("third").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceC}  </button> </a> `
    document.getElementById("fourth").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a> `

}
else if (randomNum == 2) {

    document.getElementById("second").innerHTML = `<a href= "wrongAnswer.html"> <button> ${choiceB}  </button> </a>`
    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "ccccPage.html"> <button> ${choiceA}  </button> </a> `
    document.getElementById("third").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceC}  </button> </a> `
    document.getElementById("fourth").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a> `

}
else if (randomNum == 3) {

    document.getElementById("second").innerHTML = `<a href= "ccccPage.html"> <button> ${choiceB}  </button> </a>`
    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceA}  </button> </a> `
    document.getElementById("third").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceC}  </button> </a> `
    document.getElementById("fourth").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a> `

}
else if (randomNum == 4) {

    document.getElementById("second").innerHTML = `<a href= "ccccPage.html"> <button> ${choiceB}  </button> </a>`
    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceA}  </button> </a> `
    document.getElementById("third").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceC}  </button> </a> `
    document.getElementById("fourth").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a> `

}









