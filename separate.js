var soundPreference = '';

// Continue with saving settings if the name is valid
function saveSoundPreference() {
    var soundOn = document.getElementById('soundOn');
    soundPreference = soundOn.checked ? soundOn.value : 'off';
    $('#settingsModal').modal('hide');
    initializeQuiz();
}

// Function to play start sound
function playStartSound() {
    var audio = new Audio('start.mp3');
    audio.play();
}

// Function to select a random subset of questions
function selectRandomQuestions(numQuestions) {
    var shuffledQuestions = questions.sort(() => Math.random() - 0.5); // Shuffle the questions array
    return shuffledQuestions.slice(0, numQuestions);
}

// Function to initialize the quiz with random questions
function initializeQuiz() {
    var randomQuestions = selectRandomQuestions(10); // Select 10 random questions
    var quizElement = document.getElementById('quiz');
    for (var i = 0; i < randomQuestions.length; i++) {
        var question = randomQuestions[i];
        var questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = '<h3>Question ' + (i + 1) + ' of ' + randomQuestions.length + ':</h3>' +
            '<p>' + question.text + '</p>' +
            '<input type="number" class="form-control" id="q' + (i + 1) + '">' +
            '<button class="btn btn-primary btn-block" onclick="checkAnswer(' + question.answer + ',' + (i + 1) + ')">Next</button>';
        quizElement.appendChild(questionElement);
    }
    // Show the first question
    document.querySelector('.question').style.display = 'block';
    if (soundPreference === 'on') {
        playStartSound(); // Play start sound if sound preference is 'on'
    }
}

var currentQuestion = 1;

function checkAnswer(correctAnswer, questionNumber) {
    var userAnswer = parseInt(document.getElementById('q' + currentQuestion).value.trim());
    if (isNaN(userAnswer)) {
        alert("Please provide an answer.");
        return;
    }

    var isCorrect = userAnswer === correctAnswer;
    if (isCorrect && soundPreference === 'on') {
        speak("Correct");
    } else if (!isCorrect && soundPreference === 'on') {
        speak("Incorrect");
        showIncorrectModal(correctAnswer); // Display modal for incorrect answer
        return;
    }

    document.querySelector('.question:nth-child(' + questionNumber + ')').style.display = 'none'; // Hide the current question
    currentQuestion++;
    if (currentQuestion <= 10) {
        document.querySelector('.question:nth-child(' + currentQuestion + ')').style.display = 'block'; // Show the next question
    } else {
        calculateScore(); // Call calculateScore() when all questions are answered
    }
}

function nextQuestion() {
    $('#incorrectModal').modal('hide'); // Hide the incorrect answer modal
    document.querySelector('.question:nth-child(' + currentQuestion + ')').style.display = 'none'; // Hide the current question
    currentQuestion++;
    if (currentQuestion <= 10) {
        document.querySelector('.question:nth-child(' + currentQuestion + ')').style.display = 'block'; // Show the next question
    } else {
        calculateScore(); // Call calculateScore() when all questions are answered
    }
}

function showIncorrectModal(correctAnswer) {
    document.getElementById('correctAnswer').innerText = correctAnswer;
    $('#incorrectModal').modal('show'); // Show the incorrect answer modal
}
