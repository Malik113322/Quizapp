const questions = [
    {
        question: "who is the richest person of the world?",
        answer: [
            { text: "elon musk", correct: true },
            { text: "jeff bezos", correct: false },
            { text: "ambani", correct: false },
            { text: "arnold", correct: false },
        ]
    }
    ,
    {
        question: "who is the biggest animal in the world?",
        answer: [
            { text: "elephant", correct: false },
            { text: "whale", correct: true },
            { text: "fox", correct: false },
            { text: "ox", correct: false }
        ]
    }
    ,
    {
        question: " Which animal is known as the 'Ship of the Desert?",
        answer: [
            { text: "camel", correct: true },
            { text: "Goat", correct: false },
            { text: "deer", correct: false },
            { text: "lion", correct: false }
        ]
    }
    ,
    {
        question: "How many days are there in a week?",
        answer: [
            { text: "5 days", correct: false },
            { text: "7 days", correct: true },
            { text: "2days", correct: false },
            { text: "10 days", correct: false }
        ]
    }
    ,
    {
        question: "How many hours are there in a day?",
        answer: [
            { text: "24 hours", correct: true },
            { text: "5 hours", correct: false },
            { text: "2 hours", correct: false },
            { text: "56 hours", correct: false }
        ]
    }
    ,
    {
        question: "How many letters are there in the English alphabet?",
        answer: [
            { text: "23 letters", correct: false },
            { text: "24 letters", correct: false },
            { text: "26 letters", correct: true },
            { text: "28 letters", correct: false }
        ]
    }
    ,
    {
        question: "Rainbow consist of how many colours?",
        answer: [
            { text: "2 colours", correct: false },
            { text: "7 colours", correct: true },
            { text: "10 colours", correct: false },
            { text: "15 colours", correct: false }
        ]
    }
    ,
    {
        question: "How many days are there in a year?",
        answer: [
            { text: "365 days", correct: true },
            { text: "100 days", correct: false },
            { text: "56 days", correct: false },
            { text: "900 days", correct: false }
        ]
    }
    ,
    {
        question: "How many consonants are there in the English alphabet?",
        answer: [
            { text: "24 Consonants", correct: false },
            { text: "21 Consonants", correct: true },
            { text: "300 Consonants", correct: false },
            { text: "100 Consonants", correct: false }
        ]
    }
    ,
    {
        question: "Which animal is known as the king of the jungle?",
        answer: [
            { text: "elephant", correct: false },
            { text: "girrafe", correct: false },
            { text: "lion", correct: true },
            { text: "fox", correct: false }
        ]
    }
    ,
    {
        question: "Name the National fruit of India?",
        answer: [
            { text: "orange", correct: false },
            { text: "apple", correct: false },
            { text: "banana", correct: false },
            { text: "mango", correct: true }
        ]
    }
];

let questionShow = document.getElementById("question");
let ansBtn = document.getElementById("answer-btns");
let nextBtn = document.getElementById("nextBtn");

let currentQuestIndex = 0;
nextBtn.innerHTML = "NEXT";
nextBtn.style.display = "none";

const startQuiz = () => {
    resetState();
    currentQuestIndex = 0;
    showQuestAns();
};


const showQuestAns = () => {
    resetState();
    let currentQuest = questions[currentQuestIndex];
    let questNo = currentQuestIndex + 1;
    questionShow.innerHTML = questNo + ". " + currentQuest.question;

    currentQuest.answer.forEach((ans) => {
        let button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAns);
    })


}

const selectAns = (e) => {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct")
    } else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(ansBtn.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block"
}

const resetState = () => {
    nextBtn.style.display = "none";
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

const handleNextBtn = () => {
    currentQuestIndex++;
    if (currentQuestIndex < questions.length) {
        showQuestAns();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentQuestIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})

startQuiz();