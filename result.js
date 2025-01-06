document.body.style.backgroundColor = "lightpink";

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var nextQuestion;
var counts = false;
var resultPage;
var temp;


document.body.style.backgroundColor = "lightpink";


temp = localStorage.getItem("Q2");
if (temp === "A") {
	A++;
} else if (temp === "B") {
	B++;
} else if (temp === "C") {
	C++;
} else if (temp === "D") {
	D++;
}

temp = localStorage.getItem("Q3");
if (temp === "A") {
	A++;
} else if (temp === "B") {
	B++;
} else if (temp === "C") {
	C++;
} else if (temp === "D") {
	D++;
}

temp = localStorage.getItem("Q4");
if (temp === "A") {
	A++;
} else if (temp === "B") {
	B++;
} else if (temp === "C") {
	C++;
} else if (temp === "D") {
	D++;
}

temp = localStorage.getItem("Q7");
if (temp === "A") {
	A++;
} else if (temp === "B") {
	B++;
} else if (temp === "C") {
	C++;
} else if (temp === "D") {
	D++;
}

temp = localStorage.getItem("Q8");
if (temp === "A") {
	A++;
} else if (temp === "B") {
	B++;
} else if (temp === "C") {
	C++;
} else if (temp === "D") {
	D++;
}

temp = localStorage.getItem("Q9");
if (temp === "A") {
	A++;
} else if (temp === "B") {
	B++;
} else if (temp === "C") {
	C++;
} else if (temp === "D") {
	D++;
}

	if (A > B && A > C && A >D) {
		document.getElementById("bobaimg").src = "pictures/coffee.png";
		document.getElementById("boba").innerHTML = "Coffee";
		document.getElementById("desc").innerHTML = "Your friends often call you the mom friend.<br>You are serious, responsible, goal orientated, and doesn't like to take anything from anyone (maybe except your friends).<br>You need to let loose and have more fun";
  }
  
	if (B > A && B > C && B > C) {
		document.getElementById("bobaimg").src = "pictures/mango.png";
		document.getElementById("boba").innerHTML = "Mango Boba";
		document.getElementById("desc").innerHTML = "You're silly, playful, and impulsive.<br>You might be considered the glue of your friend group, or sometimes you're not taken seriously.<br>You value teamwork.<br>You have many friends and enjoy being surrounded by people." ;
	}
	if (C > A && C > B && C > D) {
		document.getElementById("bobaimg").src = "pictures/taro.png";
		document.getElementById("boba").innerHTML = "Taro Boba";
		document.getElementById("desc").innerHTML = "You are stressed out.<br>You are a people pleaser and the life of the party<br>but you're also bad at confrontation.<br>You're just waiting to break under pressure.";
	}
	if (D > A && D > B && D > C) {
		document.getElementById("bobaimg").src = "pictures/hottea.png";
		document.getElementById("boba").innerHTML = "Mango Boba";
		document.getElementById("desc").innerHTML = "You are a go with the flow type of person.<br>You are willing to sacrifice for your friends.<br>You easily trust in others, but that is not always a good thing.";
	}
	if (A == B) {
		document.getElementById("bobaimg").src = "pictures/brownsugar.png";
		document.getElementById("boba").innerHTML = "Brown Sugar Boba";
		document.getElementById("desc").innerHTML = "You know when to have fun and be silly, and when it's time to be serious.<br>You try to plan ahead, but you always fail and do something impulsive instead.<br>You might not have a lot of friends, but you have good ones.";
	} if (A == C) { 
		document.getElementById("bobaimg").src = "pictures/passionfruit.png";
		document.getElementById("boba").innerHTML = "Passion Fruit Boba";
		document.getElementById("desc").innerHTML = "To most people, you seem very chill.<br>But your friends know that you are stressed out.<br>You try to get things done but you fail.";
	}
	if (A == D) {
		document.getElementById("bobaimg").src = "pictures/honeydew.png";
		document.getElementById("boba").innerHTML = "Honeydew Boba";
		document.getElementById("desc").innerHTML = "You try to go with the flow, but every once in a while you lock in.<br>You love your friends, but sometimes you need a break.";
	} 
	if (B == C) {
		document.getElementById("bobaimg").src = "pictures/Thai.png";
		document.getElementById("boba").innerHTML = "Thai Tea";
		document.getElementById("desc").innerHTML = "You like to have fun, but you get tired easily.<br>Sometimes you just need a break.";
	}
	if (B == D) {
		document.getElementById("bobaimg").src = "pictures/rose.png";
		document.getElementById("boba").innerHTML = "Rose Tea";
		document.getElementById("desc").innerHTML = "You want to help but sometimes you get lazy.<br>You enjoy life and want to experience it all, but from your couch.";
	}
	if (C == D) {
		document.getElementById("bobaimg").src = "pictures/strawberry.png";
		document.getElementById("boba").innerHTML = "Strawberry Boba";
		document.getElementById("desc").innerHTML = "You cannot be bothered with anything.<br>You want to stop caring, sometimes you're successful.";
	}
   
