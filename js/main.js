window.addEventListener('load', init);

// Globals

// Available Levels 
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const second = document.querySelector('#second');

const words = [
    'swimming',
    'gym',
    'programming',
    'sport',
    'audiobook',
    'guide',
    'winter',
    'application',
    'goals',
    'aspiration',
    'code',
    'confidence',
    'might',
    'association',
    'road',
    'shadow',
    'wind',
    'breath',
    'corrections',
    'ease',
    'unity',
    'decent',
    'framework',
    'javascript',
    'factorization',
    'string',
    'what',
    'color',
    'whatever',
    'soon',
    'integration',
    'class',
    'powerline',
    'karate'
];

// Initialize Game
function init() {
    //Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word form array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // if score is -1, display 0;
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output randomword
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure time is not run out
    if(time > 0) {
        time--;
    } else if(time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!'
        score = -1;
    }
}