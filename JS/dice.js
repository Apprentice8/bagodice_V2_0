function validEntry() {
	var validMultiplier = document.getElementById("diceMultiplier").value;
	if (isNaN(validMultiplier)) {
		alert("No letters or special characters are permitted. Please enter only numbers (i.e. 0-9)");
	}
	else if (validMultiplier == "") {
		alert("Multiplier must not be blank. Please enter the number of dice you would like to roll.")	
	}
}

function rollDice () {
	
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
	document.getElementById("dice_output").innerHTML += (diceValue);
	//total dice
	var total = 0;
		for (var j = 0; j < diceValue.length; j++) {
			total += diceValue[j] << 0;
		}
	document.getElementById("dice_total").innerHTML += (total);
}