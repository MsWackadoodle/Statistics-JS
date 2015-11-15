//'prompt'vv
var subjOne = deFunc();
var subjTwo = deFunc();

function deFunc() {
	//temporary 'prompt' til found out how to
	// get input from input fields
	var getRank = prompt('Rank list');
	var transit = getRank.split(',');
	var array = [];

	function createRanking() {
		for (var i = 0; i < transit.length; i++) {
			array[i] = new Object();
			array[i].index = i+1;
			array[i].rank = +transit[i];
		}
	}
	createRanking();
	return array;
}

function calcDe() {
	var array = [];
	for (var i = 0; i < subjOne.length; i++) {
		array[i] = new Object();
		array[i].index = i+1;
		array[i].de = subjOne[i].rank - subjTwo[i].rank;
		array[i].deSqrd = array[i].de * array[i].de;
	};
	var deSqSum = 0;
	for ( var s = 0; s < array.length; s++ ) {
		deSqSum += array[s].deSqrd;
    }
    var outputArray = [];
    outputArray[0] = { n: array[array.length-1].index, sum: deSqSum };
	return outputArray;
}

var dataSpearman  = calcDe();

function spearman() {
	var data = dataSpearman[0];
  	return  1 - ( (6*data.sum) / (data.n * ((data.n*data.n)-1) ) );
};
spearman();
