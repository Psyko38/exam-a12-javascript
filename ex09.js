function compterMots(chaine) {
	var v = chaine.split(" ");
	return v.length;
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4
