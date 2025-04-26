
questionNumber = 0;

title = [];
answer = [];
//questions's titles
title[0] = "De quelle couleur est le ciel ?";
title[1] = "1 + 3";
title[2] = "quelle est la meilleur musique ?";
//questions's answers
answer[0] = "bleu";
answer[1] = "4";
answer[2] = "rickroll";





loadQuestion()

function loadQuestion(){
    document.getElementById("Title").value = title[questionNumber];

    document.getElementById("checkAnswerButton").style.display = "block";
    document.getElementById("nextQuestionButton").style.display = "none";
    document.getElementById("questionReslut").style.display = "none";
    document.getElementById("AnswerInp").value = "";
};


document.getElementById("checkAnswerButton").addEventListener("click", checkAnswer);

function checkAnswer(){
    if(document.getElementById("AnswerInp").value == answer[questionNumber]){
        document.getElementById("questionReslut").value = "bonne réponse";
    } else{
        document.getElementById("questionReslut").value = "mauvaise réponse";
    };

    document.getElementById("checkAnswerButton").style.display = "none";
    document.getElementById("nextQuestionButton").style.display = "block";
    document.getElementById("questionReslut").style.display = "block";

};


document.getElementById("nextQuestionButton").addEventListener("click", nextQuestion);

function nextQuestion(){
    questionNumber++;
    loadQuestion();
};