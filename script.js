// Question 1 getElement Properties
const questionDisplay = document.getElementById("question");
const choiceADisplay = document.getElementById("choiceA");
const choiceBDisplay = document.getElementById("choiceB");
const choiceCDisplay = document.getElementById("choiceC");
const choiceDDisplay = document.getElementById("choiceD");


//
const firstQuestions = ["What Color is the Sky", "What is the color of Grass?", "test3", "test4"];
const firstChoiceA = ["Blue", "Red", "test3", "test4"];
const firstChoiceB = ["Purple", "Green", "test3", "test4"];
const firstChoiceC = ["Green", "white", "test3", "test4"];
const firstChoiceD = ["Orange", "black", "test3", "test4"];



function spawn() {

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
        document.getElementById("first").innerHTML = `<a href= "index.html"> <button> ${choiceA} different </button> </a>`

        questionDisplay.textContent = chosenQuestion;
        choiceBDisplay.textContent = choiceB;
        choiceCDisplay.textContent = choiceC;
        choiceDDisplay.textContent = choiceD;
    }
    else if (randomNum == 1) {

        document.getElementById("second").innerHTML = `<a href= "index.html"> <button> ${choiceB} different </button> </a>`
        questionDisplay.textContent = chosenQuestion;
        choiceADisplay.textContent = choiceA;
        choiceCDisplay.textContent = choiceC;
        choiceDDisplay.textContent = choiceD;
    }



}
// When button is pressed it returns a number
// when this number is returned it will determine if it is the correct answer for the question







