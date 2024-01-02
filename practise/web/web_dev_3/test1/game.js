const SCORE_ELEMENT_ID = "score";
const DISPLAY_WORD_ELEMENT_ID = "displayWord";
const BUTTONS_ELEMENT_ID = "buttons";
const DISPLAY_ANSWER_ELEMENT_ID = "displayAnswer";

const TEXT_COLOR = 'white';
const FONT_SIZE = '3em';
const TEXT_ALIGN = 'center';

let score = 0;
let currentWord = '';
let userInput = '';

function displayWords(words, timeoutDuration) {
    document.getElementById(BUTTONS_ELEMENT_ID).style.display = 'none';
    let wordDisplay = document.getElementById(DISPLAY_WORD_ELEMENT_ID);

    function displayWord(word, i) {
        let p = document.createElement('p');
        p.textContent = word;

        p.style.color = TEXT_COLOR;
        p.style.fontSize = FONT_SIZE;
        p.style.textAlign = TEXT_ALIGN;

        wordDisplay.appendChild(p);

        currentWord = word;

        setTimeout(function() {
            wordDisplay.removeChild(p);
            currentWord = '';
            userInput = ''; // Clear the userInput variable when a word is finished
        }, timeoutDuration);

        if (i < words.length - 1) {
            setTimeout(function() {
                displayWord(words[i + 1], i + 1);
            }, timeoutDuration);
        }
    }
    displayWord(words[0], 0);
}

function easy() {
    displayWords(['frown', 'swooped', 'chocolates', 'bat'], 6000);
}

function normal() {
    displayWords(['wavelengths', 'consequences', 'gravitational', 'bestseller'], 9000);
}

function hard() {
    displayWords(['antidisestablishmentarianism', 'honorificabilitudinitatibus', 'incomprehensibility', 'supercalifragilisticexpialidocious'], 12000);
}

window.addEventListener('keydown', function(event) {
    if(event.key.length === 1) {
        userInput += event.key;
    }

    if(userInput.endsWith(currentWord)) {
        score++;
        document.getElementById(SCORE_ELEMENT_ID).textContent = "Score: "+score;
        document.getElementById(DISPLAY_ANSWER_ELEMENT_ID).innerHTML = "Word typed correctly";
        userInput = '';

        setTimeout(function() {
            document.getElementById(DISPLAY_ANSWER_ELEMENT_ID).innerHTML ='';
        }, 2000);

        checkWinning(score);
    }
});

function checkWinning(score) {
    if(score === 4 ) {
        document.getElementById(SCORE_ELEMENT_ID).textContent = "You Have won the game";
    } else {
        document.getElementById(SCORE_ELEMENT_ID).textContent = "Score: "+ score;
    }
}
