import questions from './questions.js';

let currentQuestionIndex = 0;
let time = 60;
let score = 0;
let selectedChoice = null; // Variable to store the user's selected choice

let timerInterval;

// start the quiz function
function startQuiz() {
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');
    showQuestion();
    startTimer();
}

// show question function 
function showQuestion() {
    const questionElement = document.getElementById('question-title');
    const choicesElement = document.getElementById('choices');
    selectedChoice = null; // Reset selected choice when showing a new question

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = '';

        currentQuestion.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = function () {
                selectedChoice = choice;
                // Highlight the selected button, if desired
                Array.from(choicesElement.children).forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            };
            choicesElement.appendChild(button);
        });
    } else {
        endQuiz();
    }
}

// check answer function 
function checkAnswer() {
    if (selectedChoice) {
        console.log(selectedChoice);
        if (selectedChoice.isCorrect) {
            score += 10;
            var audio = new Audio("./starter/assets/sfx/correct.wav")
            audio.play();
        } else {
            time -= 10;
            var audio = new Audio("./starter/assets/sfx/incorrect.wav")
            audio.play();
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    } else {
        alert('Please select an answer.');
    }
}

// start the timer function 
function startTimer() {
    const timerElement = document.getElementById('time');
    timerInterval = setInterval(() => {
        if (time <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        } else {
            timerElement.textContent = time;
            time--;
        }
    }, 1000);
}

// ending the quiz function 
function endQuiz() {
    clearInterval(timerInterval); // Clear the timer
    document.getElementById('questions').classList.add('hide');
    document.getElementById('end-screen').classList.remove('hide');
    document.getElementById('final-score').textContent = score;
}

// save high score function 
function saveHighScore(score, initials) {
    const highScore = { score, initials };
    const highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
    highScores.push(highScore);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

// submit score function 
function submitScore() {
    const initials = document.getElementById('initials').value.trim();
    console.log(initials)

    if (initials) {
        saveHighScore(score, initials);
        window.location.href = 'highscores.html';
    } else {
        alert('Please enter initials');
    }
}

document.getElementById('start').addEventListener('click', startQuiz);
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.getElementById('submit').addEventListener('click', submitScore);
