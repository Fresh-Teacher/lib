let currentQuestion = 1;

function nextQuestion(questionNumber) {
    const currentQuestionElement = document.getElementById(`question${questionNumber}`);
    if (currentQuestionElement) {
        currentQuestionElement.style.display = 'none';
        currentQuestion++;
        const nextQuestionElement = document.getElementById(`question${currentQuestion}`);
        if (nextQuestionElement) {
            nextQuestionElement.style.display = 'block';
            if (currentQuestion === 5) {
                document.getElementById('submit-btn').style.display = 'block';
            }
        }
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Retrieve user's answers
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        // Repeat for other questions
    };

    // Calculate score
    let score = 0;
    if (answers.q1 === 'b') {
        score++;
    }
    // Repeat for other questions

    // Display score in modal
    const modal = document.getElementById('modal');
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Your score is ${score}/5`;
    modal.style.display = 'block';
});
