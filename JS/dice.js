function rollDice () {
	var dice = document.getElementById("diceSelector").value;
	var multiplier = document.getElementById("diceMultiplier").value;
	
	//generate random value between 0 and value on dice for each dice rolled
	var diceValue = new Array();	
	for (var i=1; i <= multiplier; i++) {
		function randomNumber() {
		diceValue.push(this["diceValue"+i] = Math.floor(Math.random() * (dice -1) + 1));
		}
		randomNumber();
		console.log(diceValue);
	}

}