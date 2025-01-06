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

console.log(localStorage.getItem("Q2"));
console.log(localStorage.getItem("Q3"));
console.log(localStorage.getItem("Q4"));
console.log(localStorage.getItem("Q7"));
console.log(localStorage.getItem("Q8"));




document.getElementById("choice1").onclick = function () {
	if (question === 2) {
		localStorage.setItem("Q2", "A");
	} else if (question === 3) {
		localStorage.setItem("Q3", "A");
	} else if (question === 4) {
		localStorage.setItem("Q4", "A");
	} else if (question === 7) {
		localStorage.setItem("Q7", "A");
	} else if (question === 8) {
		localStorage.setItem("Q8", "A");
	}
	location.href = nextQuestion;	
};

document.getElementById("choice2").onclick = function () {
	if (question === 2) {
		localStorage.setItem('Q2', "B");
	} else if (question === 3) {
		localStorage.setItem("Q3", "B");
	} else if (question === 4) {
		localStorage.setItem("Q4", "B");
	} else if (question === 7) {
		localStorage.setItem("Q7", "B");
	} else if (question === 8) {
		localStorage.setItem("Q8", "B");
	} else if (question === 9) {
		localStorage.setItem("Q9", "B");
	}
	location.href = nextQuestion;	
};

document.getElementById("choice3").onclick = function () {
	if (question === 2) {
		localStorage.setItem("Q2", "C");
	} else if (question === 3) {
		localStorage.setItem("Q3", "C");
	} else if (question === 4) {
		localStorage.setItem("Q4", "C");
	} else if (question === 7) {
		localStorage.setItem("Q7", "C");
	} else if (question === 8) {
		localStorage.setItem("Q8", "C");
	} else if (question === 9) {
		localStorage.setItem("Q9", "C");
	}
	location.href = nextQuestion;
};

document.getElementById("choice4").onclick = function () {
	if (question === 2) {
		localStorage.setItem("Q2", "D");
	} else if (question === 3) {
		localStorage.setItem("Q3", "D");
	} else if (question === 4) {
		localStorage.setItem("Q4", "D");;
	} else if (question === 7) {
		localStorage.setItem("Q7", "D");
	} else if (question === 8) {
		localStorage.setItem("Q8", "D");
	}else if (question === 9) {
		localStorage.setItem("Q9", "D");
	}
	location.href = nextQuestion;
}; 

