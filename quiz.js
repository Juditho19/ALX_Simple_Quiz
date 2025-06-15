function checkAnswer() {
    //function body
    const correctAnswer= "4";
    const selectedOption= document.querySelector('input[name="quiz"]:checked');
    
    const feedback = document.getElementById("feedback");

    //ensure answer is clicked
    if(!selectedOption) {
        feedback.textContent= "Please select an answer."
        return;
    }
    const userAnswer= selectedOption.value;

    //compare answers
    if (userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }

}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);