function estPalindromeAvance(chaine) {
	var word = chaine.split(" ");
	var lsit1 = [];

	for (let i = 0; i <= word[0].length - 1; i++) {
		lsit1.push(word[0][i]);
	}
	//console.log("letter list :" + lsit1);

	for (let i3 = 0; i3 <= word.length - 1; i3++) {
		//console.log("target word : " + word[i3]);
		let var1 = 0;
		for (let i = 0; i <= word[i3].length - 1; i++) {
			for (let i2 = 0; i2 <= lsit1.length - 1; i2++) {
				if (word[i3][i] == lsit1[i2]) {
					var1++;
					//console.log("occurance found : " + word[i3][i] + " at " + i);
				}
			}
		}
		if (var1 == 0) {
			return false;
		}
	}

	return true;
}

console.log(estPalindromeAvance("a man a plan a canal panama")); // Résultat attendu : true
