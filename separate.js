const quizData = [
    {
      question: "What is the capital of France?",
      options: ["A. Paris", "B. London", "C. Rome", "D. Madrid"],
      answer: "A"
    },
    {
      question: "What is the capital of Japan?",
      options: ["A. Tokyo", "B. Beijing", "C. Seoul", "D. Bangkok"],
      answer: "A"
    },
    // Add more questions here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionText = document.getElementById("question-text");
  const optionLabels = [document.getElementById("labelA"), document.getElementById("labelB"), document.getElementById("labelC"), document.getElementById("labelD")];
  const answerForm = document.getElementById("answer-form");
  const feedbackText = document.getElementById("feedback");
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;
    currentQuizData.options.forEach((option, index) => {
      optionLabels[index].innerText = option;
    });
  }
  
  function checkAnswer() {
    const userAnswer = document.querySelector('input[name="answer"]:checked').value;
    if (userAnswer === quizData[currentQuestion].answer) {
      score++;
      feedbackText.innerText = "Correct!";
    } else {
      feedbackText.innerText = "Wrong answer!";
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      feedbackText.innerText = "";
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionText.innerText = `Quiz completed! Your score is ${score}/${quizData.length}.`;
    answerForm.style.display = "none";
    document.getElementById("next-btn").style.display = "none";
  }
  
  loadQuestion();
  document.getElementById("next-btn").addEventListener("click", () => {
    checkAnswer();
    nextQuestion();
  });
  