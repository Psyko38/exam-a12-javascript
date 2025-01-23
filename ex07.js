function moyenne(tab) {
	let var1 = 0;
	for (let i = 0; i <= tab.length - 1; i++) {
		var1 = var1 + tab[i];
	}
	return var1 / tab.length;
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6
