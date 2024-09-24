import data from './data.js';

const { title, description, questions } = data;

document.querySelector('#title').innerHTML = title;
document.querySelector('#description').innerHTML = description;

const scoreP = document.querySelector('#score');
const questionContainer = document.querySelector('#flip-card');

const qCardP = document.querySelector('#q-card > p');
const aCardP = document.querySelector('#a-card > p');


let questionIndex = -1;

// Function to update the question and score
const updateQuestion = () => {
    const currentQuestion = questions[questionIndex];
    qCardP.innerHTML = currentQuestion.q;
    aCardP.innerHTML = currentQuestion.a;

    scoreP.innerHTML = `Score ${questionIndex + 1}/${questions.length}`;
};

// Show the next question
const showNextQuestion = () => {
    questionIndex = (questionIndex + 1) % questions.length; // Wrap around
    updateQuestion();
};

showNextQuestion(); // Initial call to set the first question

// Handle button clicks
document.body.addEventListener('click', e => {
    const targetId = e.target.id;

    if (targetId === 'answer-button') {
        questionContainer.classList.add('flip');
    } else if (targetId === 'question-button') {
        questionContainer.classList.remove('flip');
    } else if (targetId === 'next-button') {
        questionContainer.classList.remove('flip');
        showNextQuestion();
    } else if (targetId === 'flip-card') {
        questionContainer.classList.toggle('flip');
    }
});
