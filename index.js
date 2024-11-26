const questions = [
    {
        question:"Which is largest animal in the world",
        answers:[
            {text:"Shark",correct:false},
            {text:"Bluewhale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},

            
        ]
    },
    {
        question:"Which is the smallest continent on the the world",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Acrtic",correct:false},
            {text:"Africa",correct:false},

            
        ]

    },
    {
        question:"What is the capital of india",
        answers:[
            {text:"Tamilnadu",correct:false},
            {text:"Gujarat",correct:false},
            {text:"Andhra pradesh",correct:false},
            {text:"Delhi",correct:true},
        ]
    },
    {
        question:"Who is known as Father of our indian nation ",
        answers:[
            {text:"Nehru",correct:false},
            {text:"Mahatma Gandhi",correct:true},
            {text:"Subash chandra Bose",correct:false},
            {text:"Rajiv Gandhi",correct:false},
        ]
    }

];

const questionElement=document.getElementById("question")
const answerButtons=document.getElementById("answer-buttons")
const nextButton=document.getElementById("next-btn")


let currentQuestionIndex=0
let score = 0

function startQuiz(){
    currentQuestionIndex=0
    score=0
    nextButton.innerHTML="Next"
    showQuestion()

}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex + 1
    questionElement.innerHTML=questionNo+"."+currentQuestion.
    question

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectAnswer)
    }

    )
}

function resetState(){
    nextButton.style.display="none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect=selectedBtn.dataset.correct==="true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;

    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true
    }

    )
    nextButton.style.display="block"
}

function showScore(){
    resetState()
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="play again"
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore()
    }
       
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()

    }else{
        startQuiz()
    }
}
)
startQuiz();
