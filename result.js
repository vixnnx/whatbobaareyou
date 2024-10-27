document.body.style.backgroundColor = "lightpink";

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var nextQuestion;
var counts = false;
var resultPage;
var result;
var temp;


document.body.style.backgroundColor = "lightpink";


for (let i = 1; i < 10; i++){
	if (!(i === 1 || i === 5 || i === 6)) {
    var value = "Q" + i;
    console.log(value);
		temp = localStorage.getItem(value);
    console.log(temp);
		if (temp == "A") {
			A++;
      console.log("A " + A);
		} else if (temp == "B") {
			B++;
			console.log("B " + B);
		} else if (temp == "C") {
			C++;
			console.log("C " + C);
		} else if (temp == "D") {
			D++;
			console.log("D " + D);
		}

	}
}


	if (A > B && A > C && A >D) {
		result = "coffee";
		document.getElementById("bobaimg").src = "pictures/coffee.png";
		document.getElementById("boba").innerHTML = "Coffee";
  }
 


 localStorage.clear();