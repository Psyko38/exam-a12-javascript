function compterVoyelles(chaine) {
	let v1 = 0;
	for (let i = 0; i <= chaine.length - 1; i++) {
		if (
			chaine[i] == "a" ||
			chaine[i] == "e" ||
			chaine[i] == "i" ||
			chaine[i] == "o" ||
			chaine[i] == "u" ||
			chaine[i] == "y"
		) {
			v1++;
		}
	}
	return v1;
}
console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
