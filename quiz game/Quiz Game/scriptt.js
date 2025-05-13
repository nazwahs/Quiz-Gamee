const questions = [
  {
    question: "siapa kepala sekolah SMK Plus Pelta Nusantara",
    options: ["Bu Made", "Pa Ari", "Pa Ian Supiyan", "Pa sopiyan"],
    answer: 2
  },
  {
    question: "ada berapa jurusan di SMK Plus Pelita Nusantara",
    options: ["4", "5", "6", "3"],
    answer: 0
  },
  {
    question: "ada berapa lantai SMK Plus Pelita Nusantara",
    options: ["7", "4", "5", "2"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestion];
  document.getElementById('question').textContent = question.question;
  const optionsList = document.getElementById('options');
  optionsList.innerHTML = '';
  question.options.forEach((option, index) => {
    const li = document.createElement('li');
    li.textContent = option;
    li.onclick = () => checkAnswer(index);
    optionsList.appendChild(li);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestion].answer;
  if (selectedIndex === correctIndex) {
    score++;
  }
  document.getElementById('score').textContent = `Skor: ${score}`;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById('next-button').disabled = true;
    document.getElementById('score-container').style.display = 'block';
  }
}

document.getElementById('next-button').addEventListener('click', loadQuestion);

loadQuestion();