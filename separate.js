
    // Array of questions
    var questions = [
        { text: "What is 2 + 2?", answer: 4 },
        { text: "What is 5 - 3?", answer: 2 },
        { text: "What is 4 * 6?", answer: 24 },
        { text: "What is 10 / 2?", answer: 5 },
        { text: "What is 3 squared?", answer: 9 },
        { text: "What is 12 - 7?", answer: 5 },
        { text: "What is 8 * 3?", answer: 24 },
        { text: "What is 15 / 3?", answer: 5 },
        { text: "What is 4 squared?", answer: 16 },
        { text: "What is 9 - 6?", answer: 3 },
        { text: "What is 7 * 4?", answer: 28 },
        { text: "What is 18 / 3?", answer: 6 },
        { text: "What is 5 squared?", answer: 25 },
        { text: "What is 10 - 4?", answer: 6 },
        { text: "What is 6 * 5?", answer: 30 },
        { text: "What is 21 / 3?", answer: 7 },
        { text: "What is 8 squared?", answer: 64 },
        { text: "What is 12 - 9?", answer: 3 },
        { text: "What is 9 * 4?", answer: 36 },
        { text: "What is 30 / 5?", answer: 6 }
    ];

    // Variable to store sound preference
    var soundPreference = '';

    // Variable to store player's name
    var playerName = '';

    // Function to save sound preference
    function saveSoundPreference() {
        var soundOn = document.getElementById('soundOn');
        soundPreference = soundOn.checked ? soundOn.value : 'off';
        saveSettings(); // Call saveSettings to set the player's name and other settings
    }

    function saveSettings() {
    var playerNameInput = document.getElementById('playerName');
    playerName = playerNameInput.value.trim(); // Update the global playerName variable

    // Regular expression to validate the player name
    var nameRegex = /^[a-zA-Z]+$/;

    // Check if the player name is empty or contains invalid characters
    if (playerName === '') {
        alert('Please enter your name.');
        return;
    } else if (!nameRegex.test(playerName)) {
        alert('Please enter a valid name (only letters are allowed with no spaces).');
        return;
    }

    // Continue with saving settings if the name is valid
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
        if (soundPreference === '') {
            $('#settingsModal').modal('show');
            return;
        }
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


    function speak(text) {
        var utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    function calculateScore() {
        var score = 0;
        var totalQuestions = 10; // Update total questions to 10
        for (var i = 1; i <= totalQuestions; i++) {
            var userAnswer = parseInt(document.getElementById('q' + i).value);
            if (!isNaN(userAnswer) && userAnswer === questions[i - 1].answer) {
                score++;
            }
        }
        
        var audioFile = '';
        var message = '';

        if (score === 10) {
            audioFile = 'omugezi.mp3';
        } else if (score >= 8 && score < 10) {
            audioFile = 'my lord.mp3';
        } else if (score >= 3 && score <= 7) {
            audioFile = 'kaweddemu.mp3';
        } else {
            audioFile = 'charles.mp3';
        }

        var excellentMessages = [
        "Wow! Look at you, " + playerName + "! You got " + score + " out of 10 correct. Perfect score, huh? Are you secretly a superhero in this subject? 🦸‍♂️",
    "Bravo, " + playerName + "! You got " + score + " out of 10 correct. 10 out of 10? You're crushing it! Keep shining bright like a star! ✨",
    "Incredible job, " + playerName + "! You got " + score + " out of 10 correct. 10/10! You're like a migical wizard! 🧙‍♂️",
    "Amazing work, " + playerName + "! You got " + score + " out of 10 correct. A perfect score? You're on fire! 🔥",
    "Outstanding, " + playerName + "! You got " + score + " out of 10 correct. You nailed it! Keep up the phenomenal work! 👏",
    "You're unstoppable, " + playerName + "! You got " + score + " out of 10 correct. A perfect score? You're one real hell of a genius! 🌟",
    "Whoa, " + playerName + "! You got " + score + " out of 10 correct. Perfect score alert! You're acing this game! 🚨",
    "No way, " + playerName + "! You got " + score + " out of 10 correct. A perfect score? You're the champion! 🏆",
    "Unbelievable, " + playerName + "! You got " + score + " out of 10 correct. A flawless performance! Keep up the fantastic work! 🌈",
    "You're a wise prodigy, " + playerName + "! You got " + score + " out of 10 correct. A perfect score? Keep dazzling us with your skills! 💡",
    "Fantastic job, " + playerName + "! You got " + score + " out of 10 correct. Perfect score? You make this subject look easy! 😉",
    "Impressive work, " + playerName + "! You got " + score + " out of 10 correct. A perfect score? You're a real whiz! 🎩",
    "Well done, " + playerName + "! You got " + score + " out of 10 correct. 10 out of 10! You're rocking this quiz! 🚀",
    "You're a super intelligent marvel, " + playerName + "! You got " + score + " out of 10 correct. Perfect score? Keep up the incredible effort! 💫",
    "Spectacular, " + playerName + "! You got " + score + " out of 10 correct. A perfect score? You're in a league of your own! ⚡",
    "Hats off to you, " + playerName + "! You got " + score + " out of 10 correct. Perfect score? You're a wise master of this subject matter! 🎓",
    "You're setting the bar high, " + playerName + "! You got " + score + " out of 10 correct. Perfect score? Keep up the awesome work! 🌟",
    "Excellent job, " + playerName + "! You got " + score + " out of 10 correct. A perfect score? You're a real legend! 🏅",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. Perfect score? You're making everyone proud! 👍",
    "Superb, " + playerName + "! You got " + score + " out of 10 correct. A perfect score? Keep up the fantastic performance! 🌟",
    "You're crushing it, " + playerName + "! You got " + score + " out of 10 correct. Perfect score? You're a talented rockstar! 🎸",
    "Bravo, " + playerName + "! You got " + score + " out of 10 correct. Perfect score! 10 out of 10. You're an intelligent wizard! 🧙‍♂️",
    "Wow, " + playerName + "! You got " + score + " out of 10 correct. You aced it! 10 out of 10. You're unstoppable! 🌟",
    "Incredible, " + playerName + "! You got " + score + " out of 10 correct. You nailed it! 10 out of 10. You're on top of the world! 🌍",
    "Outstanding, " + playerName + "! You got " + score + " out of 10 correct. Flawless performance! 10 out of 10. You're a true champion! 🏆",
    "Unbelievable, " + playerName + "! You got " + score + " out of 10 correct. You got every question right! 10 out of 10. You're a genius! 🧠",
    "Spectacular, " + playerName + "! You got " + score + " out of 10 correct. You've mastered it! 10 out of 10. You're the mastermind! 💡",
    "Marvelous, " + playerName + "! You got " + score + " out of 10 correct. Perfect score! 10 out of 10. You're a legend! 🌟",
    "Impressive, " + playerName + "! You got " + score + " out of 10 correct. Outstanding job! 10 out of 10. You're unbeatable! 💪",
    "Exceptional, " + playerName + "! You got " + score + " out of 10 correct. You're a star! 10 out of 10. You're truly remarkable! ✨",
    "Mind-blowing, " + playerName + "! You got " + score + " out of 10 correct. You've outdone yourself! 10 out of 10. You're a prodigy! 🌟",
    "Phenomenal, " + playerName + "! You got " + score + " out of 10 correct. You're on fire! 10 out of 10. You're the best! 🏅",
    "Remarkable, " + playerName + "! You got " + score + " out of 10 correct. You're setting records! 10 out of 10. You're unstoppable! 🚀",
    "Fantastic, " + playerName + "! You got " + score + " out of 10 correct. You've reached the top! 10 out of 10. You're a superstar! ⭐",
    "Amazing, " + playerName + "! You got " + score + " out of 10 correct. You're a genius! 10 out of 10. You're destined for greatness! 🚀",
    "Terrific, " + playerName + "! You got " + score + " out of 10 correct. You've made it! 10 out of 10. You're legendary! 🏆",
    "Outstanding, " + playerName + "! You got " + score + " out of 10 correct. You're unstoppable! 10 out of 10. You're an inspiration! 🌟",
    "Exceptional work, " + playerName + "! You got " + score + " out of 10 correct. You're brilliant! 10 out of 10. You're a role model! 👑",
    "Exemplary performance, " + playerName + "! You got " + score + " out of 10 correct. You've aced it! 10 out of 10. You're extraordinary! 🎉",
    "Top-notch, " + playerName + "! You got " + score + " out of 10 correct. You're a master! 10 out of 10. You're making history! 📜",
    "Sensational, " + playerName + "! You got " + score + " out of 10 correct. You're unbeatable! 10 out of 10. You're a legend! 🌟",
"Hey, " + playerName + ", not bad at all! " + score + " out of 10. Keep rockin'! 🎸",
    "Nice going, " + playerName + "! You got " + score + " out of 10 correct. You're smashing it! 💥",
    "Hey there, " + playerName + "! You got " + score + " out of 10 correct. You're cruisin'! 🚗",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. You're on fire! 🔥",
    "Yo, " + playerName + ", check you out! " + score + " out of 10. You're a champ! 🏆",
    "Look at you go, " + playerName + "! You got " + score + " out of 10 correct. You're unstoppable! 🚀",
    "Whoa, " + playerName + "! You got " + score + " out of 10 correct. You're acing it like a boss! 💼",
    "High five, " + playerName + "! You got " + score + " out of 10 correct. You're nailing it! 🖐️",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. Keep slayin'! ⚔️",
    "Hey, " + playerName + ", you're killin' it! " + score + " out of 10. Keep it up! 😎",
    "Hey superstar, " + playerName + "! You got " + score + " out of 10 correct. You're shining bright! ✨",
    "Well done, " + playerName + "! You got " + score + " out of 10 correct. You're crushing it! 🎉",
    "Hey hey, " + playerName + "! You got " + score + " out of 10 correct. You're on a roll! 🌯",
    "You're doing awesome, " + playerName + "! You got " + score + " out of 10 correct. Keep the vibe! 🎶",
    "Rock on, " + playerName + "! You got " + score + " out of 10 correct. You're rockin' the quiz! 🤘",
    "Kudos, " + playerName + "! You got " + score + " out of 10 correct. You're the quiz master! 👑",
    "Hey, " + playerName + ", you're nailing it! " + score + " out of 10. Keep the good times rollin'! 🎲",
    "Well played, " + playerName + "! You got " + score + " out of 10 correct. You're a quiz wizard! 🧙‍♂️",
    "Keep it up, " + playerName + "! You got " + score + " out of 10 correct. You're crushin' it! 💪",
    "Hey superstar, " + playerName + "! You got " + score + " out of 10 correct. You're unstoppable! 🌟",
    "Good going, " + playerName + "! You got " + score + " out of 10 correct. You're on fire! 🔥",
    "Hey, " + playerName + ", you absolutely crushed it! 10 out of 10. You're a nerdy whiz! 🧮",
    "Dude, " + playerName + "! You got " + score + " out of 10 correct. You totally nailed it! 10 out of 10. You're on fire! 🔥",
    "Nice one, " + playerName + "! You got " + score + " out of 10 correct. Perfect score! 10 out of 10. You're a legend! 🌟",
    "Wow, " + playerName + "! You got " + score + " out of 10 correct. You totally aced it! 10 out of 10. You're unstoppable! 💪",
    "No way, " + playerName + "! You got " + score + " out of 10 correct. You got every single one right! 10 out of 10. You're a genius! 🧠",
    "Hey, " + playerName + ", that's incredible! 10 out of 10. You're a geeky genius! 🎓",
    "Killer job, " + playerName + "! You got " + score + " out of 10 correct. Perfect score! 10 out of 10. You're crushing it! 💥",
    "Hey, " + playerName + "! You got " + score + " out of 10 correct. You're on fire! 10 out of 10. You're unstoppable! 🚀",
    "Awesome work, " + playerName + "! You got " + score + " out of 10 correct. Perfect score! 10 out of 10. You're a rockstar! 🌟",
    "Man, " + playerName + ", you're killing it! 10 out of 10. You're a legend! 🏆",
    "Nailed it, " + playerName + "! You got " + score + " out of 10 correct. 10 out of 10. You're on top of your game! 💯",
    "Whoa, " + playerName + "! You got " + score + " out of 10 correct. Perfect score! 10 out of 10. You're a real prodigy! 🌟",
    "Nice going, " + playerName + "! You got " + score + " out of 10 correct. 10 out of 10. You're unstoppable! 🚀",
    "You're a genius, " + playerName + "! You got " + score + " out of 10 correct. 10 out of 10. You're on a roll! 🎲",
    "Absolutely smashed it, " + playerName + "! You got " + score + " out of 10 correct. 10 out of 10. You're on top of the world! 🌍",
    "Dang, " + playerName + "! You got " + score + " out of 10 correct. Perfect score! 10 out of 10. You're a now a master! 🔢",
    "Incredible job, " + playerName + "! You got " + score + " out of 10 correct. 10 out of 10. You're a legend! 🌟",
    "Hey, " + playerName + "! You got " + score + " out of 10 correct. You're killing it! 10 out of 10. You're unstoppable! 💪",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. 10 out of 10. You're absolutely crushing it! 💥",
    "Hey, " + playerName + ", not bad at all! " + score + " out of 10. Keep rockin'! 🎸",
    "Impressive, " + playerName + "! You got " + score + " out of 10 correct. What's your secret? 💼",
    "Hey there, " + playerName + "! You got " + score + " out of 10 correct. You're onto something here! 🔍",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. What's your next move? 🤔",
    "Yo, " + playerName + ", check you out! " + score + " out of 10. You're a champ! 🏆",
    "You're killing it, " + playerName + "! You got " + score + " out of 10 correct. What's your strategy? 🧠",
    "Well done, " + playerName + "! You got " + score + " out of 10 correct. You've got this puzzle figured out! 🧩",
    "Nice job, " + playerName + "! You got " + score + " out of 10 correct. You're cracking the code! 🔒",
    "Keep it up, " + playerName + "! You got " + score + " out of 10 correct. What's your next breakthrough? 💡",
    "Hey, " + playerName + ", that's awesome! " + score + " out of 10. What's your secret sauce? 🍔",
    "Good job, " + playerName + "! You got " + score + " out of 10 correct. You're unraveling mysteries! 🔍",
    "You're doing great, " + playerName + "! You got " + score + " out of 10 correct. What's your hidden talent? 🎩",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. You're uncovering secrets! 🕵️",
    "Hey, " + playerName + ", way to go! " + score + " out of 10. What's your next discovery? 🔬",
    "You're doing fantastic, " + playerName + "! You got " + score + " out of 10 correct. What's your next adventure? 🌟",
    "Keep up the good work, " + playerName + "! You got " + score + " out of 10 correct. What's your next big idea? 💡",
    "Great job, " + playerName + "! You got " + score + " out of 10 correct. What's your next breakthrough? 🚀",
    "You're rocking it, " + playerName + "! You got " + score + " out of 10 correct. What's your next masterpiece? 🎨",
    "Hey, " + playerName + ", keep up the awesome work! " + score + " out of 10. What's your next adventure? 🚀",
    "Nice going, " + playerName + "! You got " + score + " out of 10 correct. What's your next big discovery? 🌟",
    "Hey, " + playerName + ", not bad at all! " + score + " out of 10. What's your secret sauce? 🍔",
    "Impressive, " + playerName + "! You got " + score + " out of 10 correct. What's your next move? 🤔",
    "Hey there, " + playerName + "! You got " + score + " out of 10 correct. What's your strategy? 🧠",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. What's your secret weapon? 🔫",
    "Yo, " + playerName + ", check you out! " + score + " out of 10. What's your winning formula? 🏆",
    "You're killing it, " + playerName + "! You got " + score + " out of 10 correct. What's your magic touch? ✨",
    "Well done, " + playerName + "! You got " + score + " out of 10 correct. What's your next breakthrough? 🚀",
    "Nice job, " + playerName + "! You got " + score + " out of 10 correct. What's your ace up your sleeve? 🃏",
    "Keep it up, " + playerName + "! You got " + score + " out of 10 correct. What's your secret to success? 🤫",
    "Hey, " + playerName + ", that's awesome! " + score + " out of 10. What's your secret recipe? 🍲",
    "Good job, " + playerName + "! You got " + score + " out of 10 correct. What's your key to victory? 🔑",
    "You're doing great, " + playerName + "! You got " + score + " out of 10 correct. What's your secret sauce? 🍝",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. What's your secret ingredient? 🥇",
    "Hey, " + playerName + ", way to go! " + score + " out of 10. What's your next big thing? 🚀",
    "You're doing fantastic, " + playerName + "! You got " + score + " out of 10 correct. What's your next masterpiece? 🎨",
    "Keep up the good work, " + playerName + "! You got " + score + " out of 10 correct. What's your next revelation? 💡",
    "Great job, " + playerName + "! You got " + score + " out of 10 correct. What's your secret talent? 🎭",
    "You're rocking it, " + playerName + "! You got " + score + " out of 10 correct. What's your secret weapon? 🔧",
    "Hey, " + playerName + ", keep up the awesome work! " + score + " out of 10. What's your next adventure? 🚀",
    "Nice going, " + playerName + "! You got " + score + " out of 10 correct. What's your next big breakthrough? 🌟"


];

var greatMessages = [
"Hey, " + playerName + ", not bad at all! " + score + " out of 10. Keep rockin'! 🎸",
    "Nice going, " + playerName + "! You got " + score + " out of 10 correct. You're smashing it! 💥",
    "Hey there, " + playerName + "! You got " + score + " out of 10 correct. You're cruisin'! 🚗",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. You're on fire! 🔥",
    "Yo, " + playerName + ", check you out! " + score + " out of 10. You're a champ! 🏆",
    "You're killing it, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 💪",
    "Well done, " + playerName + "! You got " + score + " out of 10 correct. You're rocking it! 🤘",
    "Nice job, " + playerName + "! You got " + score + " out of 10 correct. You're doing great! 👍",
    "Keep it up, " + playerName + "! You got " + score + " out of 10 correct. You're on the right track! 🚀",
    "Hey, " + playerName + ", that's awesome! " + score + " out of 10. You're smashing it! 💥",
    "Good job, " + playerName + "! You got " + score + " out of 10 correct. You're crushing it! 💥",
    "You're doing great, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 👏",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. You're making progress! 📈",
    "Hey, " + playerName + ", way to go! " + score + " out of 10. You're doing awesome! 🎉",
    "You're doing fantastic, " + playerName + "! You got " + score + " out of 10 correct. Keep it going! 🚀",
    "Keep up the good work, " + playerName + "! You got " + score + " out of 10 correct. You're on fire! 🔥",
    "Great job, " + playerName + "! You got " + score + " out of 10 correct. You're doing amazing! 🌟",
    "You're rocking it, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 🎸",
    "Hey, " + playerName + ", keep up the awesome work! " + score + " out of 10. You're killing it! 💥",
    "Nice going, " + playerName + "! You got " + score + " out of 10 correct. You're on fire! 🔥",
    "You're unstoppable, " + playerName + "! " + score + " out of 10. Keep it going! 🚀",
    "Hey, " + playerName + ", that's fantastic! " + score + " out of 10. You're on a roll! 🌯",
    "Bravo, " + playerName + "! " + score + " out of 10. You're a quiz champion! 🏆",
    "You're crushing it, " + playerName + "! " + score + " out of 10. Keep up the awesome work! 💪",
    "Outstanding, " + playerName + "! " + score + " out of 10. You're a quiz master! 🎓",
    "Kudos to you, " + playerName + "! " + score + " out of 10. You're acing the quiz! 👍",
    "Keep shining, " + playerName + "! " + score + " out of 10. You're a star! ✨",
    "Wow, " + playerName + "! " + score + " out of 10. You're knocking it out of the park! ⚾",
    "You're making it look easy, " + playerName + "! " + score + " out of 10. Keep up the great work! 👏",
    "You're a force to be reckoned with, " + playerName + "! " + score + " out of 10. Keep it up! 💥",
    "Absolutely smashing, " + playerName + "! " + score + " out of 10. You're a quiz whiz! 🧠",
    "You're on fire, " + playerName + "! " + score + " out of 10. Keep the momentum going! 🔥",
    "Hey there, " + playerName + "! " + score + " out of 10. You're doing amazing! 🌟",
    "Way to go, " + playerName + "! " + score + " out of 10. You're a superstar! 🌟",
    "You're nailing it, " + playerName + "! " + score + " out of 10. Keep up the great work! 👍",
    "Phenomenal job, " + playerName + "! " + score + " out of 10. You're unstoppable! 💥",
    "Keep up the fantastic work, " + playerName + "! " + score + " out of 10. You're a rockstar! 🎸",
    "You're doing awesome, " + playerName + "! " + score + " out of 10. Keep it up! 🎉",
    "Hey, " + playerName + ", you're a quiz superstar! " + score + " out of 10. Keep shining! 🌟",
    "You're a quiz dynamo, " + playerName + "! " + score + " out of 10. Keep up the electrifying performance! ⚡",
    "Fantastic work, " + playerName + "! " + score + " out of 10. You're on fire! 🔥",
    "You're absolutely killing it, " + playerName + "! " + score + " out of 10. Keep up the amazing work! 💥",
    "Incredible job, " + playerName + "! " + score + " out of 10. You're a quiz legend in the making! 🏅",
    "You're a quiz wizard, " + playerName + "! " + score + " out of 10. Keep casting those correct answers! 🧙‍♂️",
    "Outstanding performance, " + playerName + "! " + score + " out of 10. You're setting the bar high! 🚀",
    "You're unstoppable, " + playerName + "! " + score + " out of 10. Keep up the unbeatable streak! 💪",
    "Spectacular work, " + playerName + "! " + score + " out of 10. You're on a winning streak! 🌟",
    "You're on a roll, " + playerName + "! " + score + " out of 10. Keep those correct answers coming! 🎲",
    "Impressive stuff, " + playerName + "! " + score + " out of 10. You're making it look easy! 👏",
    "You're smashing it, " + playerName + "! " + score + " out of 10. Keep up the phenomenal performance! 💥",
    "Marvelous job, " + playerName + "! " + score + " out of 10. You're making us proud! 👍",
    "You're a true quiz aficionado, " + playerName + "! " + score + " out of 10. Keep up the fantastic work! 🧠",
    "Top-notch performance, " + playerName + "! " + score + " out of 10. You're a quiz virtuoso! 🎶",
    "You're acing it, " + playerName + "! " + score + " out of 10. Keep up the stellar performance! 🌟",
    "Brilliant work, " + playerName + "! " + score + " out of 10. You're on the path to quiz greatness! 🏆",
    "You're absolutely crushing it, " + playerName + "! " + score + " out of 10. Keep up the phenomenal work! 💪",
    "Magnificent job, " + playerName + "! " + score + " out of 10. You're leaving everyone else in the dust! 🚀",
    "You're on fire, " + playerName + "! " + score + " out of 10. Keep up the blazing performance! 🔥",
    "Exceptional performance, " + playerName + "! " + score + " out of 10. You're a shining star! ✨",
    "You're absolutely slaying it, " + playerName + "! " + score + " out of 10. Keep up the amazing work! 💥"



];

var goodMessages = [
"Not bad, " + playerName + ", not bad at all! 😎 Keep practicing, and you'll improve in no time!",
    "You're doing great, " + playerName + "! You got " + score + " out of 10 correct. 🌟 Keep pushing yourself, and you'll ace it next time! 💪",
    "Lookin' good, " + playerName + "! You got " + score + " out of 10 correct. 😄 Keep up the good work!",
    "Hey, " + playerName + ", you're makin' moves! 🚀 Keep it up!",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. 🎉 You're on the right track!",
    "You're killin' it, " + playerName + "! You got " + score + " out of 10 correct. 🔥 Keep crushin' those tough problems!",
    "Keep it up, " + playerName + "! You got " + score + " out of 10 correct. 💫 You're doin' just fine!",
    "Nice try, " + playerName + "! You got " + score + " out of 10 correct. 🙌 Every question is a step forward!",
    "You're gettin' there, " + playerName + "! You got " + score + " out of 10 correct. 🌈 Keep practicin' those so called problems!",
    "Good job, " + playerName + "! You got " + score + " out of 10 correct. 🎈 Keep workin' hard!",
    "Hey hey, " + playerName + "! You got " + score + " out of 10 correct. 🎈 Keep practicin' those genius skills!",
    "You're gettin' better, " + playerName + "! You got " + score + " out of 10 correct. 🌟 Keep it up!",
    "You're on fire, " + playerName + "! You got " + score + " out of 10 correct. 🔥 Keep pushin' yourself!",
    "Keep it up, " + playerName + "! You got " + score + " out of 10 correct. 🚀 You're doin' awesome!",
    "You're doin' fantastic, " + playerName + "! You got " + score + " out of 10 correct. 🎉 Keep it goin'!",
    "You're doin' great, " + playerName + "! You got " + score + " out of 10 correct. 🌟 Keep up the good work!",
    "You're makin' progress, " + playerName + "! You got " + score + " out of 10 correct. 🚀 Keep goin'!",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. 🎈 You're makin' strides!",
    "You're gettin' better, " + playerName + "! You got " + score + " out of 10 correct. 💫 Keep it up!",
    "Look at you go, " + playerName + "! You got " + score + " out of 10 correct. You're soaring high! 🦅",
    "Whoa, " + playerName + "! You got " + score + " out of 10 correct. You're making waves! 🌊",
    "High five, " + playerName + "! You got " + score + " out of 10 correct. You're on a roll! 🎲",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. Keep shining! ✨",
    "Hey, " + playerName + ", you're killin' it! " + score + " out of 10. You're on fire! 🔥",
    "You're doing great, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 👍",
    "Well done, " + playerName + "! You got " + score + " out of 10 correct. You're on the right track! 🚂",
    "You're smashing it, " + playerName + "! You got " + score + " out of 10 correct. Keep the momentum! 💥",
    "Great job, " + playerName + "! You got " + score + " out of 10 correct. You're on a winning streak! 🏆",
    "Keep up the good work, " + playerName + "! You got " + score + " out of 10 correct. You're making progress! 📈",
    "Awesome job, " + playerName + "! You got " + score + " out of 10 correct. You're on the rise! 🚀",
    "Fantastic work, " + playerName + "! You got " + score + " out of 10 correct. You're on fire! 🔥",
    "You're cruising, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 🚗",
    "Nice going, " + playerName + "! You got " + score + " out of 10 correct. You're unstoppable! 🌟",
    "You're doing brilliantly, " + playerName + "! You got " + score + " out of 10 correct. Keep up the good work! 👏",
    "Keep going strong, " + playerName + "! You got " + score + " out of 10 correct. You're on a roll! 🎉",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. You're on the right path! 🛤️",
    "You're on a winning streak, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 💪",
    "Impressive work, " + playerName + "! You got " + score + " out of 10 correct. You're on a roll! 🌊",
    "Hey, " + playerName + ", you're doing great! " + score + " out of 10. Keep it up! 🌟",
    "Great job, " + playerName + "! You got " + score + " out of 10 correct. You're making progress! 📈",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 💪",
    "You're on a roll, " + playerName + "! You got " + score + " out of 10 correct. Keep going! 🎲",
    "Well done, " + playerName + "! You got " + score + " out of 10 correct. You're doing great! 👏",
    "Keep up the good work, " + playerName + "! You got " + score + " out of 10 correct. You're doing awesome! 🌟",
    "You're killing it, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 💥",
    "You're on fire, " + playerName + "! You got " + score + " out of 10 correct. Keep the momentum! 🔥",
    "Impressive, " + playerName + "! You got " + score + " out of 10 correct. You're doing fantastic! 👍",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. You're making waves! 🌊",
    "Nice going, " + playerName + "! You got " + score + " out of 10 correct. You're doing amazing! 🌟",
    "Keep it up, " + playerName + "! You got " + score + " out of 10 correct. You're unstoppable! 🚀",
    "Good stuff, " + playerName + "! You got " + score + " out of 10 correct. Keep going strong! 💪",
    "You're doing amazing, " + playerName + "! You got " + score + " out of 10 correct. Keep it going! 🎉",
    "You're doing great, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 👍",
    "Nice job, " + playerName + "! You got " + score + " out of 10 correct. You're making strides! 🏃‍♂️",
    "You're on a winning streak, " + playerName + "! You got " + score + " out of 10 correct. Keep it going! 🏆",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. You're unstoppable! 💥",
    "You're on the right track, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 🚀",
    "You're crushing it, " + playerName + "! You got " + score + " out of 10 correct. Keep up the good work! 👊",
    "You're doing awesome, " + playerName + "! You got " + score + " out of 10 correct. Keep rocking it! 🎸"


];

var tryHarderMessages = [
"Hey there, " + playerName + "! You got " + score + " out of 10 correct. Looks like you had a little hiccup with " + score + " out of 10. No worries, even superheroes have their off days! 🦸‍♂️",
    "Oops, " + playerName + "! You got " + score + " out of 10 correct. Don't worry, even the best stumble sometimes. Dust yourself off and try again! 🤷‍♂️",
    "Well, well, well, " + playerName + "! You got " + score + " out of 10 correct. Nobody's perfect, right? Just consider this a warm-up round! 🔥",
    "Oh dear, " + playerName + "! You got " + score + " out of 10 correct. Everyone takes a wrong turn now and then. Shake it off and let's give it another shot! 🚶‍♂️",
    "Looks like " + playerName + " needs a little more practice with " + score + " out of 10. No worries, Rome wasn't built in a day! 🏛️",
    "Uh-oh, " + playerName + "! You got " + score + " out of 10 correct. Don't worry, we won't tell anyone. It'll be our little secret! 🤫",
    "Well, well, well, " + playerName + "! You got " + score + " out of 10 correct. It's okay, nobody's keeping score... oh wait! 😜",
    "Looks like someone stumbled a bit, " + playerName + ". " + score + " out of 10. Don't worry, we'll keep your quiz score safe with us! 🤐",
    "Oh no, " + playerName + "! You got " + score + " out of 10 correct. It happens to the best of us. Maybe next time you'll get it right... or not! 😄",
    "Oopsie daisy, " + playerName + "! You got " + score + " out of 10 correct. Don't worry, we still think you're pretty cool. Just not 'quiz-master' cool yet! 😎",
    "Looks like " + playerName + " hit a bump in the road with " + score + " out of 10. Don't worry, every stumble is a step forward... or something like that! 🚶‍♂️",
    "Well, " + playerName + ", " + score + " out of 10. Not quite what we expected, but hey, surprises keep life interesting! 🎉",
    "Oops, " + playerName + "! You got " + score + " out of 10 correct. It's okay, we'll just pretend this never happened.  😅",
    "Looks like " + playerName + " needs a little extra practice with " + score + " out of 10. It's alright, practice makes perfect... or so they say! 🎯",
    "Oh dear, " + playerName + "! You got " + score + " out of 10 correct. It's okay, nobody's perfect. We'll just blame it on a glitch in the matrix! 🤖",
    "Uh-oh, " + playerName + "! You got " + score + " out of 10 correct. No worries, we'll just chalk this up to a 'learning experience'. 📝",
    "Well, " + playerName + ", " + score + " out of 10. Not exactly a gold medal performance, but hey, at least you tried! 🏅",
    "Looks like someone needs to hit the books a bit harder, " + playerName + ". " + score + " out of 10. Don't worry, we've got plenty of books! 📚",
    "Oopsie, " + playerName + "! You got " + score + " out of 10 correct. It's okay, nobody's judging... okay, maybe just a little! 😜",
    "Well, well, well, " + playerName + "! You got " + score + " out of 10 correct. Let's just call this the 'practice round', shall we? 😅",
    "Oh dear, " + playerName + "! You got " + score + " out of 10 correct. Looks like someone forgot their thinking cap with " + score + " out of 10. Don't worry, we'll find it for you! 🎩",
    "Uh-oh, " + playerName + "! You got " + score + " out of 10 correct. Don't worry, we won't judge... much! 😉",
    "Well, well, well, " + playerName + "! You got " + score + " out of 10 correct. Let's just call this a 'work in progress', shall we? 🛠️",
    "Oops, " + playerName + "! You got " + score + " out of 10 correct. It's okay, we won't tell anyone. Just remember, WHAT HAPPENS IN THE QUIZ STAYS IN THE QUIZ! 🤫",
    "Looks like " + playerName + " needs a bit more brain juice with " + score + " out of 10. Don't worry, we'll send some your way! 🧠💡",
    "Oh no, " + playerName + "! You got " + score + " out of 10 correct. It's alright, we shall just pretend you performed like this because you were distracted by a passing squirrel! 🐿️",
    "Oopsie daisy, " + playerName + "! You got " + score + " out of 10 correct. Don't worry, we won't hold it against you... much! 😄",
    "Uh-oh, " + playerName + "! You got " + score + " out of 10 correct. Looks like someone needs to brush up on their quiz skills! 🧹",
    "Well, " + playerName + ", " + score + " out of 10. Not exactly what we expected, but hey, life is full of surprises! 🎁",
    "Looks like " + playerName + " stumbled a bit with " + score + " out of 10. Don't worry, we've got plenty of band-aids! 🩹",
    "Oh dear, " + playerName + "! You got " + score + " out of 10 correct. It's all right, we won't judge... too harshly! 😉",
    "Oops, " + playerName + "! You got " + score + " out of 10 correct. Looks like someone needs a little extra study time! 📚",
    "Looks like " + playerName + " took a wrong turn with " + score + " out of 10. Don't worry, seems like you lost your answers in the QuizLand. We'll help you find your way to them! 🗺️",
    "Uh-oh, " + playerName + "! You got " + score + " out of 10 correct. Not quite the result we were hoping for, but hey, there's always next time! 🔄",
    "Well, well, well, " + playerName + "! You got " + score + " out of 10 correct. Let's just call this a 'creative interpretation' of the quiz! 🎨",
    "Oopsie, " + playerName + "! You got " + score + " out of 10 correct. It's okay, nobody's perfect... except maybe for quiz masters! 😜",
    "Looks like someone's got a case of the quiz jitters, " + playerName + ". " + score + " out of 10. Don't worry, we've got plenty of virtual ice cream to help you chill out! 🍦",
    "Oh dear, " + playerName + "! You got " + score + " out of 10 correct. It's okay, we'll just chalk it up to a 'temporary lapse in brilliance'! 🤔",
    "Uh-oh, " + playerName + "! You got " + score + " out of 10 correct. Looks like someone needs a little more coffee before their next quiz attempt! ☕",
    "Well, " + playerName + ", " + score + " out of 10. Not exactly the result we were hoping for, but hey, at least you gave it a shot! 👏",
"Hey, " + playerName + "! You got " + score + " out of 10 correct. Looks like you were just warming up, right? 😄 Don't worry, you'll crush it next time!",
    "Oh, " + playerName + ", it seems like you were just giving the others a chance to catch up! 😉 You've got this!",
    "Hey there, " + playerName + "! You got " + score + " out of 10 correct. A little stumble there, huh? No worries, you'll bounce back stronger! 💪",
    "Oopsie, " + playerName + "! You got " + score + " out of 10 correct. Looks like you were just testing the waters! 💦 Keep going, you'll get there!",
    "Hey hey, " + playerName + "! You got " + score + " out of 10 correct. Did you just want to keep things interesting? 😜 Don't worry, you'll ace it next time!",
    "Aw, " + playerName + ", looks like you're just keeping us on our toes, right? 😉 Keep smiling, you'll do better!",
    "Oh no, " + playerName + "! You got " + score + " out of 10 correct. Did you forget to bring your lucky charm today? 🍀 Don't worry, you'll bounce back!",
    "Hey, " + playerName + "! You got " + score + " out of 10 correct. It's all part of the game, right? 😄 Keep practicing, you'll get there!",
    "Hey, " + playerName + "! You got " + score + " out of 10 correct. Did you just want to give others a chance to catch up? 😉 Keep going, you're doing great!",
    "Oops, " + playerName + "! You got " + score + " out of 10 correct. Looks like someone got a little too excited! 😄 Keep trying, you'll improve!",
    "Hey there, " + playerName + "! You got " + score + " out of 10 correct. A little stumble, but no worries! Keep going, you're doing just fine! 😊",
    "Aw, " + playerName + ", did you forget to put on your superhero cape today? 🦸‍♀️ Don't worry, you'll soar next time!",
    "Oh dear, " + playerName + "! You got " + score + " out of 10 correct. Did you just want to keep things suspenseful? 😜 Keep practicing, you'll do better!",
    "Hey hey, " + playerName + "! You got " + score + " out of 10 correct. It's all part of the journey, right? 😄 Keep going, you'll reach your destination!",
    "Oopsie daisy, " + playerName + "! You got " + score + " out of 10 correct. Looks like someone took a detour! 🗺️ Don't worry, you'll find your way back!",
    "Uh-oh, " + playerName + "! You got " + score + " out of 10 correct. Looks like someone hit a little speed bump! 🚧 Keep going, you'll smooth it out!",
    "Hey, " + playerName + "! You got " + score + " out of 10 correct. Did you just want to add a little drama to the quiz? 😄 Keep trying, you're doing great!",
    "Aw, " + playerName + ", looks like you're just keeping us entertained! 😉 Keep going, you'll do better!",
    "Oops, " + playerName + "! You got " + score + " out of 10 correct. Did you misplace your lucky rabbit's foot? 🐰 Don't worry, luck is on your side next time!",
    "Hey there, " + playerName + "! You got " + score + " out of 10 correct. A little hiccup, but no worries! Keep going, you're on the right track! 😊",
    "Hey, " + playerName + "! You got " + score + " out of 10 correct. It's okay to stumble sometimes. Shake it off and give it another shot! 💪",
    "Don't worry, " + playerName + "! You got " + score + " out of 10 correct. Everyone has those days. Keep your head up and try again! 🙂",
    "Oopsie, " + playerName + "! You got " + score + " out of 10 correct. Looks like you're just warming up. Get back in there and show 'em what you've got! 🔥",
    "Aww, " + playerName + "! You got " + score + " out of 10 correct. Don't sweat it! Even superheroes have their off days. You'll bounce back stronger! 💫",
    "Hey there, " + playerName + "! You got " + score + " out of 10 correct. Rough day at school, huh? No worries! You've got this! 💼",
    "Whoopsie-daisy, " + playerName + "! You got " + score + " out of 10 correct. Looks like today's not your day, but tomorrow's a whole new game! 🌟",
    "Uh-oh, " + playerName + "! You got " + score + " out of 10 correct. Looks like the failure bugs got the best of you this time. Don't let 'em win! 🐛",
    "Not your best day, " + playerName + ", but every stumble is just a stepping stone to success. Keep on stepping! 👣",
    "Hey, " + playerName + "! You got " + score + " out of 10 correct. No need to fret over a little hiccup. You're destined for greatness! 🌈",
    "Chin up, " + playerName + "! You got " + score + " out of 10 correct. Every journey has its bumps. Yours just adds character to the adventure! 😊",
    "Oops, " + playerName + "! You got " + score + " out of 10 correct. Looks like you took a wrong turn on the educational tour. Time to detour and keep cruising! 🚗",
    "Hey, " + playerName + "! You got " + score + " out of 10 correct. Not your best performance, but even the greatest stars have their cloudy days. Shine on! ✨",
    "Bummer, " + playerName + "! You got " + score + " out of 10 correct. This stubborn subject got the best of you this time, but you'll bounce back stronger! 💪",
    "Keep your spirits high, " + playerName + "! You got " + score + " out of 10 correct. A little setback is just a setup for a major comeback! 🚀",
    "Hey hey, " + playerName + "! You got " + score + " out of 10 correct. Don't let a little stumble trip you up. Brush it off and keep on dancing! 💃",
    "Hey, " + playerName + "! You got " + score + " out of 10 correct. Looks like you hit a speed bump on the study highway. Time to put the pedal to the metal and zoom past it! 🚀",
    "Don't sweat it, " + playerName + "! You got " + score + " out of 10 correct. Even the greatest artists have their rough drafts. You're just refining your masterpiece! 🎨",
    "Hey there, " + playerName + "! You got " + score + " out of 10 correct. Not your best day in the quiz arena, but every setback is just a setup for a mighty comeback! 💥",
    "No worries, " + playerName + "! You got " + score + " out of 10 correct. Even superheroes have their kryptonite moments. You'll rise again! 💫",
    "Hey, " + playerName + "! You got " + score + " out of 10 correct. Not quite the result you wanted, but every stumble is just a step closer to success. Keep stepping! 👟",
    "Oh dear, " + playerName + "! You got " + score + " out of 10 correct. Looks like someone forgot their thinking cap with " + score + " out of 10. Don't worry, we'll find it for you! 🎩",
    "Uh-oh, " + playerName + "! You got " + score + " out of 10 correct. Don't worry, we won't judge... much! 😉",
    "Well, well, well, " + playerName + "! You got " + score + " out of 10 correct. Let's just call this a 'work in progress', shall we? 🛠️",
    "Oops, " + playerName + "! You got " + score + " out of 10 correct. It's okay, we won't tell anyone. Just remember, what happens in the quiz stays in the quiz! 🤫",
    "Looks like " + playerName + " needs a bit more brain juice with " + score + " out of 10. Don't worry, we'll send some your way! 🧠💡",
    "Oh no, " + playerName + "! You got " + score + " out of 10 correct. It's alright, we'll just pretend you were distracted by a passing squirrel! 🐿️",
    "Oopsie daisy, " + playerName + "! You got " + score + " out of 10 correct. Don't worry, we won't hold it against you... much! 😄",
    "Uh-oh, " + playerName + "! You got " + score + " out of 10 correct. Looks like someone needs to brush up on their quiz skills! 🧹",
    "Oh dear, " + playerName + "! You got " + score + " out of 10 correct. It's alright, we won't judge... too harshly! 😉",
    "Well, " + playerName + ", " + score + " out of 10. Not exactly the result we were hoping for, but hey, at least you gave it a shot! 👏",
    "Looks like someone, well let me just meantion their name point blank," + ( playerName  )+ ", was just feeling a lil bit sleepy and couldn't concentrate during the quiz. Better sleep well next time, bro! 😴💤"

];


        var messageArray;
if (score === 10) {
    messageArray = excellentMessages;
} else if (score >= 8 && score < 10) {
    messageArray = greatMessages;
} else if (score >= 3 && score <= 7) {
    messageArray = goodMessages;
} else {
    messageArray = tryHarderMessages;
}

var randomIndex = Math.floor(Math.random() * messageArray.length);
message = messageArray[randomIndex];



        // Play the appropriate audio if sound preference is on
        if (soundPreference === 'on') {
            var audio = new Audio(audioFile);
            audio.play();
        }
        
        document.getElementById('score').innerText = message; // Display personalized message
        $('#scoreModal').modal('show');
    }

    function repeatQuiz() {
        location.reload();
    }