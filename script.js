let flashcards = [];
let currentCardIndex = 0;
let score = 0;

function addFlashcard() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
    flashcards.push({ question, answer });
    document.getElementById('question').value = '';
    document.getElementById('answer').value = '';
}

function showNextCard() {
    if (currentCardIndex < flashcards.length) {
        document.getElementById('quiz-container').innerText = flashcards[currentCardIndex].question;
        document.getElementById('quiz-container').style.fontWeight = 'bold';
    } else {
        alert('End of flashcards!');
    }
}

function showAnswer() {
    if (currentCardIndex < flashcards.length) {
        document.getElementById('quiz-container').innerText = flashcards[currentCardIndex].answer;
        document.getElementById('quiz-container').style.fontWeight = 'normal';
        currentCardIndex++;
    }
}

function updateScore() {
    document.getElementById('score-display').innerText = `Score: ${score}`;
}

// Example usage
addFlashcard(); // Add some flashcards
addFlashcard();
showNextCard(); // Show the first flashcard

// You can further enhance this with functionalities like checking answers, randomizing flashcards, etc.
