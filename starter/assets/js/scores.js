var clear = document.getElementById('clear');

function saveHighScore(score, initials) {
    const highScore = { score, initials };
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push(highScore);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function loadHighScores() {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const ol = document.getElementById('highscores');
    ol.innerHTML = highScores.map(highscore => 
        `<li>${highscore.score}: ${highscore.initials}</li>`
    ).join('');
}

// Call loadHighScores on page load for the highscores page
if (document.getElementById('highscores')) {
    window.onload = loadHighScores;
}

clear.addEventListener('click', clear);

