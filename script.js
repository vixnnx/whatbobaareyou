var question;
var nextQuestion;
var counts;


if (question === 1) {
	nextQuestion = "question2.html";
	counts = false;
} else if (question === 2) {
	nextQuestion = "question3.html";
	counts = true;
} else if (question === 3) {
	nextQuestion = "question4.html";
	counts = true;
} else if (question === 4) {
	nextQuestion = "question5.html";
	counts = true;
}  else if (question === 5) {
	nextQuestion = "question6.html";
	counts = false;
} else if (question === 6) {
	nextQuestion = "question7.html";
	counts = false;
}else if (question === 7) {
	nextQuestion = "question8.html";
	counts = true;
} else if (question === 8) {
	nextQuestion = "question9.html";
	counts = true;
} else if (question === 9) {
	counts = true; 
  nextQuestion = "resultpage.html";
}

document.body.style.backgroundColor = "lightpink";
console.log(localStorage.getItem("Q1"));
console.log(localStorage.getItem("Q2"));
console.log(localStorage.getItem("Q3"));
console.log(localStorage.getItem("Q4"));
console.log(localStorage.getItem("Q5"));
console.log(localStorage.getItem("Q6"));
console.log(localStorage.getItem("Q7"));
console.log(localStorage.getItem("Q8"));
console.log(localStorage.getItem("Q9"));




document.getElementById("choice1").onclick = function () {
	location.href = nextQuestion;	
};

document.getElementById("choice2").onclick = function () {
	location.href = nextQuestion;	
};

document.getElementById("choice3").onclick = function () {
	location.href = nextQuestion;
};

document.getElementById("choice4").onclick = function () {
	location.href = nextQuestion;
}; 

