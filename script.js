const questions = [
    {
        question: "What was Louis XIV's famous quote about absolute monarchy?",
        answers: [
            "I am the State",
            "Power to the People",
            "Let them eat cake",
            "For the greater good"
        ],
        correct: 0
    },
    {
        question: "Who was known as 'The Great' and modernized Russia?",
        answers: [
            "Ivan IV",
            "Peter I",
            "Catherine II",
            "Nicholas I"
        ],
        correct: 1
    },
    {
        question: "Which philosopher wrote 'The Second Treatise of Government'?",
        answers: [
            "Thomas Hobbes",
            "Jean-Jacques Rousseau",
            "John Locke",
            "Voltaire"
        ],
        correct: 2
    },
    {
        question: "What was Ivan IV's nickname?",
        answers: [
            "The Great",
            "The Terrible",
            "The Wise",
            "The Builder"
        ],
        correct: 1
    },
    {
        question: "Which period emphasized reason, individualism, and skepticism?",
        answers: [
            "The Renaissance",
            "The Middle Ages",
            "The Enlightenment",
            "The Industrial Revolution"
        ],
        correct: 2
    },
    {
        question: "What is Absolutism?",
        answers: [
            "A system of government where power is shared equally",
            "A form of government where the ruler has unlimited power",
            "A democratic system of voting",
            "A religious form of government"
        ],
        correct: 1
    },
    {
        question: "Which of these was NOT a cause of Absolutism in Europe?",
        answers: [
            "Religious conflicts and wars",
            "The decline of feudalism",
            "The rise of democracy",
            "The growth of national armies"
        ],
        correct: 2
    },
    {
        question: "How did Louis XIV control the French nobles?",
        answers: [
            "By keeping them at Versailles under his supervision",
            "By executing them all",
            "By giving them complete autonomy",
            "By exiling them from France"
        ],
        correct: 0
    },
    {
        question: "Who were Louis XIV's chief ministers who helped strengthen royal power?",
        answers: [
            "Voltaire and Rousseau",
            "Richelieu and Mazarin",
            "Locke and Hobbes",
            "Diderot and Montesquieu"
        ],
        correct: 1
    },
    {
        question: "What was Peter the Great's main motivation for modernizing Russia?",
        answers: [
            "To make Russia more like Western Europe",
            "To please the Russian Orthodox Church",
            "To weaken Russian military power",
            "To give more power to the nobles"
        ],
        correct: 0
    },
    {
        question: "Which philosopher argued that people have natural rights to life, liberty, and property?",
        answers: [
            "Thomas Hobbes",
            "John Locke",
            "Voltaire",
            "Montesquieu"
        ],
        correct: 1
    },
    {
        question: "What did Montesquieu advocate for?",
        answers: [
            "Absolute monarchy",
            "Religious persecution",
            "Separation of powers",
            "Divine right of kings"
        ],
        correct: 2
    },
    {
        question: "What was the main focus of Mary Wollstonecraft's writing?",
        answers: [
            "Economic theory",
            "Women's rights and education",
            "Military strategy",
            "Religious reform"
        ],
        correct: 1
    },
    {
        question: "What did the Edict of Nantes originally provide?",
        answers: [
            "Religious tolerance for Huguenots",
            "Tax reforms",
            "Military service requirements",
            "Educational reforms"
        ],
        correct: 0
    },
    {
        question: "What was Voltaire's stance on religious tolerance?",
        answers: [
            "He opposed all forms of religion",
            "He supported only Catholicism",
            "He advocated for religious freedom and tolerance",
            "He believed in state-controlled religion"
        ],
        correct: 2
    },
    {
        question: "What did Cesare Beccaria argue for?",
        answers: [
            "Harsher criminal punishments",
            "Criminal justice reform and humane treatment",
            "More power for absolute monarchs",
            "Religious control of law"
        ],
        correct: 1
    },
    {
        question: "What was Diderot's major contribution to the Enlightenment?",
        answers: [
            "Military strategies",
            "Religious texts",
            "The Encyclopedia",
            "Political treaties"
        ],
        correct: 2
    },
    {
        question: "According to Rousseau, what was the source of legitimate political authority?",
        answers: [
            "Divine right",
            "Military power",
            "The general will of the people",
            "Hereditary succession"
        ],
        correct: 2
    },
    {
        question: "What did Thomas Hobbes believe about human nature?",
        answers: [
            "Humans are naturally good and cooperative",
            "Life in nature is 'nasty, brutish, and short'",
            "People don't need government",
            "Humans are naturally democratic"
        ],
        correct: 1
    },
    {
        question: "What was the purpose of Louis XIV's Palace of Versailles?",
        answers: [
            "To serve as a military fortress",
            "To control nobles and display royal power",
            "To house the poor",
            "To serve as a public museum"
        ],
        correct: 1
    },
    {
        question: "What were the key attributes of Absolutism?",
        answers: [
            "Divine right of kings and centralized power",
            "Democratic voting and shared power",
            "Local autonomy and feudal rights",
            "Religious freedom and civil rights"
        ],
        correct: 0
    },
    {
        question: "What was one of Peter the Great's major achievements?",
        answers: [
            "Building Moscow",
            "Creating St. Petersburg",
            "Destroying the army",
            "Strengthening the Orthodox Church"
        ],
        correct: 1
    },
    {
        question: "What did John Locke say about tyranny in his Second Treatise?",
        answers: [
            "It should be accepted by the people",
            "It's a necessary form of government",
            "People have the right to resist it",
            "Only the church can oppose it"
        ],
        correct: 2
    },
    {
        question: "How did the Enlightenment influence art and literature?",
        answers: [
            "It promoted reason and criticized traditional authority",
            "It banned all forms of artistic expression",
            "It focused only on religious themes",
            "It had no impact on the arts"
        ],
        correct: 0
    },
    {
        question: "What was Mary Astell known for?",
        answers: [
            "Military strategy",
            "Religious reform",
            "Women's education advocacy",
            "Economic theory"
        ],
        correct: 2
    },
    {
        question: "What was life like for peasants under Louis XIV?",
        answers: [
            "They lived in luxury",
            "They faced heavy taxation and poverty",
            "They were all nobles",
            "They controlled the government"
        ],
        correct: 1
    },
    {
        question: "What did Locke believe about legislative powers?",
        answers: [
            "They should be absolute",
            "They should be limited and protect people's rights",
            "They shouldn't exist",
            "Only the king should have them"
        ],
        correct: 1
    },
    {
        question: "Who were considered 'Enlightened Despots'?",
        answers: [
            "Peasant revolutionaries",
            "Religious leaders",
            "Absolute rulers who adopted some Enlightenment ideas",
            "Democratic reformers"
        ],
        correct: 2
    },
    {
        question: "When did the Enlightenment take place?",
        answers: [
            "17th and 18th centuries",
            "14th and 15th centuries",
            "19th and 20th centuries",
            "11th and 12th centuries"
        ],
        correct: 0
    },
    {
        question: "What was Cardinal Richelieu's main contribution to absolutism in France?",
        answers: [
            "He weakened royal power",
            "He strengthened the Huguenots",
            "He centralized power and weakened nobles",
            "He gave power to the peasants"
        ],
        correct: 2
    }
    // Add more questions based on the study guide
];

let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];

function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const currentQ = shuffledQuestions[currentQuestion];

    questionContainer.textContent = currentQ.question;
    answersContainer.innerHTML = '';

    currentQ.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.className = 'answer-btn';
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });

    document.getElementById('score').textContent = `${score} out of ${questions.length}`;
}

function checkAnswer(answerIndex) {
    const buttons = document.querySelectorAll('.answer-btn');
    const correct = shuffledQuestions[currentQuestion].correct;

    buttons.forEach(button => button.disabled = true);
    
    if (answerIndex === correct) {
        buttons[answerIndex].classList.add('correct');
        score++;
        document.getElementById('score').textContent = `${score} out of ${questions.length}`;
    } else {
        buttons[answerIndex].classList.add('incorrect');
        buttons[correct].classList.add('correct');
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < shuffledQuestions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('final-score').textContent = 
        `${score} out of ${questions.length} (${Math.round(score/questions.length*100)}%)`;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('score').textContent = `0 out of ${questions.length}`;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    shuffleQuestions();
    displayQuestion();
}

document.getElementById('retry-button').addEventListener('click', resetQuiz);

// Start the quiz
shuffleQuestions();
displayQuestion(); 