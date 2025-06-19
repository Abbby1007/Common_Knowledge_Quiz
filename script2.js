// Question 1 getElement Properties
const questionDisplay = document.getElementById("question");
const choiceADisplay = document.getElementById("choiceA");
const choiceBDisplay = document.getElementById("choiceB");
const choiceCDisplay = document.getElementById("choiceC");
const choiceDDisplay = document.getElementById("choiceD");
const resultsDisplay = document.getElementById("results");


// JAVASCRIPT FOR THE FIRST QUESTIONS

// QUESTION 1 questions
const firstQuestions = ['What does "bae" stand for in slang?', 'If someone mentions they visited the "Big Easy," which city are they referring to?', "What animal is known for its ability to regenerate lost limbs?", "What is a common name for a group of flamingos?", "Which animal's fingerprints are almost identical to human fingerprints?"];
const firstChoiceA = ["Crow", "Los Angeles", "Snake", "A gaggle", " Scotland "];
const firstChoiceB = ["Bacon And Eggs", "Miami", "Crab", "A parade", "Lizard"];
const firstChoiceC = ["Before Anyone Else", "New Orleans", "Starfish", "A crop", "Dolphin"];
const firstChoiceD = ["Big And Exciting", "Seattle", "Frog", "An alliance", "Koala"];




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
    document.getElementById("third").innerHTML = ` <a href= "hhhQuestion.html"> <button> ${choiceC}  </button> </a> `
    document.getElementById("fourth").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a> `
}
else if (randomNum == 1) {

    document.getElementById("second").innerHTML = `<a href= "wrongAnswer.html"> <button> ${choiceB}  </button> </a>`
    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceA}  </button> </a> `
    document.getElementById("third").innerHTML = ` <a href= "hhhQuestion.html"> <button> ${choiceC}  </button> </a> `
    document.getElementById("fourth").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a> `

}
else if (randomNum == 2) {

    document.getElementById("second").innerHTML = `<a href= "wrongAnswer.html"> <button> ${choiceB}  </button> </a>`
    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "hhhQuestion.html"> <button> ${choiceA}  </button> </a> `
    document.getElementById("third").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceC}  </button> </a> `
    document.getElementById("fourth").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a> `

}
else if (randomNum == 3) {

    document.getElementById("second").innerHTML = `<a href= "hhhQuestion.html"> <button> ${choiceB}  </button> </a>`
    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceA}  </button> </a> `
    document.getElementById("third").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceC}  </button> </a> `
    document.getElementById("fourth").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceD}  </button> </a> `

}
else if (randomNum == 4) {

    document.getElementById("second").innerHTML = `<a href= "wrongAnswer.html"> <button> ${choiceB}  </button> </a>`
    questionDisplay.textContent = chosenQuestion;

    document.getElementById("first").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceA}  </button> </a> `
    document.getElementById("third").innerHTML = ` <a href= "wrongAnswer.html"> <button> ${choiceC}  </button> </a> `
    document.getElementById("fourth").innerHTML = ` <a href= "hhhQuestion.html"> <button> ${choiceD}  </button> </a> `

}









