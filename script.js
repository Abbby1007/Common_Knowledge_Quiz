// Question 1 getElement Properties
const questionDisplay = document.getElementById("question");
const choiceADisplay = document.getElementById("choiceA");
const choiceBDisplay = document.getElementById("choiceB");
const choiceCDisplay = document.getElementById("choiceC");
const choiceDDisplay = document.getElementById("choiceD");


//
const firstQuestions = ["test1", "test2", "test3"];
const firstChoiceA = ["test1", "test2", "test3"];
const firstChoiceB = ["test1", "test2", "test3"];
const firstChoiceC = ["test1", "test2", "test3"];
const firstChoiceD = ["test1", "test2", "test3"];



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


}

function test() {
    questionDisplay.textContent = `please work`;
}




