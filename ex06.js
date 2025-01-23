function doublons(tab) {
	var tab1 = [];
	for (let i = 0; i <= tab.length - 1; i++) {
		tab1.push(tab[i] * 2);
	}
	return tab1;
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]
