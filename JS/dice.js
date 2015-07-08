//this function checks if user input is a valid number and throws some helpful error text if not. 
function validEntry() {
	var validMultiplier = document.getElementById("diceMultiplier").value;
	var switchClass = document.getElementById("diceMultiplier");
	var multAlert = document.getElementById("multiplierAlert");
	
	//is the user trying to input a letter or special character? if so, stop it!
	if (isNaN(validMultiplier)) {
		switchClass.className = "alertClass";
		multAlert.innerHTML = "Please enter only numbers (i.e. 0-9)<br />";
	}
	//has the user left the multiplier field blank? 
	else if (validMultiplier.trim() === "") {
		switchClass.className = "alertClass";
		multAlert.innerHTML = "Field cannot be blank.<br />";		
	}
	//has the user has input a valid number? Keep calm and move along. 
	else {
		switchClass.className = "noClass";
		multAlert.innerHTML = "";	
	}
}

//this function is the meat and potatoes of the "Bag O' Dice." This is where the magic happens
function rollDice () {
	
	//first, check if the user input is kosher
	validEntry();
	
	//clear previous dice values
	document.getElementById("dice_output").innerHTML = ("");
	document.getElementById("dice_total").innerHTML = ("");
	
	//get values from user input and assign to dice and multiplier variables
	var dice = document.getElementById("diceSelector").value;
	var multiplier = document.getElementById("diceMultiplier").value;
	
	//generate dice values and assign each to it's own variable (i.e. diceValue.1, diceValue.2, etc)
	var diceValue = new Array();	
	for (var i=1; i <= multiplier; i++) {
		function randomNumber() {			
			//if d100 is rolled, randomly generate number from 0-90 in incraments of 10
			if (dice === "100") { 
				diceValue.push(this["diceValue"+i] = Math.floor(Math.random() * 10)*10);
			}
			//if any other die, generate a random number between 1 and max value of dice
			else {
				diceValue.push(this["diceValue"+i] = Math.floor((Math.random() * dice) + 1));
			}
		}
		//roll dice
		randomNumber();
	}
	//print values to user
	document.getElementById("dice_output").innerHTML += ("<h3>Roll Values</h3><p>" + diceValue + "</p>");
	//total dice
	var total = 0;
		for (var j = 0; j < diceValue.length; j++) {
			total += diceValue[j] << 0;
		}
	document.getElementById("dice_total").innerHTML += ("<h3>Dice Total</h3><p>= " + total + "</p>");
}