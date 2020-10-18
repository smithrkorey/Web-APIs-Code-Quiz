var button = document.getElementById("start");

//Object and Methods
//The document object represents the entire web page
//The .getElementbyId method returns the element that has the ID attribute "start"
button.onclick = function () {
  button.style.visibility = "hidden";
  console.log("Click the start button");
  displayQuestion();
};


//Declaring the variable questionArr containing an array of quiz questions and answers
var questionsArr = [
  {
    question: "What is a string?",
    answers: {
      a: "A collection of characters",
      b: "A number",
      c: "A true or false value",
  },
  correctAnswer: "c"   
},
  {
    question: "Arrays are indicated using what?",
    answers: {
      a: "Quotations",
      b: "Brackets",
      c: "Curly Brackets",
  },
  correctAnswer: "b"
},
  {
    question: "What does DOM stand for?",
    answers: {
      a: "Document Object Model",
      b: "Decidng Object Model",
      c: "Document Object Modification"
    },
    correctAnswer: "a"
  },
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Mark Zuckerberg",
      b: "Bill Gates",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
];

var questions = document.getElementById("questions");
var answersDiv = document.getElementById("quiz");
var questionCounter = 0

function displayQuestion() {
    //Clearing previous questions
    removeChild();

    questions.textContent = questionsArr[questionCounter].question; 
    
    var answer1 = document.createElement("h3");
    var answer2 = document.createElement("h3");
    var answer3 = document.createElement("h3");

    answer1.textContent = questionsArr[questionCounter].answers.a;
    answer2.textContent = questionsArr[questionCounter].answers.b;
    answer3.textContent = questionsArr[questionCounter].answers.c;

    answer1.setAttribute("class", "democlass"); 
    answer2.setAttribute("class", "democlass");
    answer3.setAttribute("class", "democlass");

    answer1.addEventListener("click", function(){
      questionCounter++;
      displayQuestion();
    });
    answer2.addEventListener("click", function(){
      questionCounter++;
      displayQuestion();
    });
    answer3.addEventListener("click", function(){
      questionCounter++;
      displayQuestion();
    });

    answersDiv.appendChild(answer1);
    answersDiv.appendChild(answer2);
    answersDiv.appendChild(answer3);
}

document.getElementById("myBtn").addEventListener("click", displayDate);