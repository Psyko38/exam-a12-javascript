function sommePairs(tab) {
	let var1 = 0;
	for (let i = 0; i <= tab.length - 1; i++) {
		if (tab[i] % 2 == 0) {
			var1 = var1 + tab[i];
		}
	}
	return var1;
}

console.log(sommePairs([1, 2, 3, 4])); // Résultat attendu : 6
