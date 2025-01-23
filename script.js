// Sample questions
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: 1
    },
    {
        question: "What is the largest mammal?",
        answers: ["Elephant", "Whale", "Shark", "Giraffe"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const answerButtons = document.querySelectorAll(".answer-btn");
    question.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
    });
}

function checkAnswer(selectedIndex) {
    const correctAnswerIndex = questions[currentQuestionIndex].correct;

    if (selectedIndex === correctAnswerIndex) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("quiz-container").style.display = "none";
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.style.display = "block";
    document.getElementById("score").textContent = score + " / " + questions.length;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("score-container").style.display = "none";
    loadQuestion();
}

// Initialize the quiz
loadQuestion();
