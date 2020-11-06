const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "What Star Wars Character gets his hand sliced off during a battle?",
    choice1: "Han Solo",
    choice2: "Luke Skywalker",
    choice3: "Obi-Wan Kenobi",
    choice4: "Darth Maul",
    answer: 2
  },
  {
    question:
      "What is the name of Han Solo's spaceship?",
    choice1: "The Millenium Falcon",
    choice2: "The Death Star",
    choice3: "Luxury 3000",
    choice4: "Naboo Royal Starship",
    answer: 1
  },
  {
    question: "Why does Anakin Skywalker go to the dark side and become Darth Vader?",
    choice1: "He thought the dark side was cooler",
    choice2: "He was tricked into it by Obi-Wan Kenobi",
    choice3: "He watched his mother die and fell victim to fear and anger",
    choice4: "He wanted to rule the galaxy",
    answer: 3
  },
  {
    question: "What is Darth Sidious' real identity?",
    choice1: "Kylo Ren",
    choice2: "Luke Skywalker",
    choice3: "Count Dooku",
    choice4: "Chancellor Palpatine",
    answer: 4
},
{
  question: "Who trains Luke Skywalker to become a Jedi Knight?",
  choice1: "Obi-Wan Kenobi",
  choice2: "Master Yoda",
  choice3: "Mace Windu",
  choice4: "Anakin Skywalker",
  answer: 1   
  }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();