function rollDice () {
	var dice = document.getElementById("diceSelector").value;
	var multiplier = document.getElementById("diceMultiplier").value;
	
	//generate dice values
	var diceValue = new Array();	
	for (var i=1; i <= multiplier; i++) {
		function randomNumber() {
			//if percentile dice is rolled, incraments of 10 from 0-90
			if (dice === "100") { 
				diceValue.push(this["diceValue"+i] = Math.floor(Math.random() * 10)*10); 
			}
			//if any other die, generate any random number between 1 and max value of dice
			else {
				diceValue.push(this["diceValue"+i] = Math.floor((Math.random() * dice) + 1));
			}
		}
		//roll dice
		randomNumber();
	}
//print values to console
console.log(diceValue);
}