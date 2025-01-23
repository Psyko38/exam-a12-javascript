function premiereLettreMajuscule(chaine) {
	let string = "";
	string = string + chaine[0].toUpperCase();
	for (let i = 0; i <= chaine.length; i++) {
		if (chaine[i] == " ") {
			string = string + chaine[i + 1].toUpperCase();
		} else {
			if (chaine[i + 1] !== undefined) {
				string = string + chaine[i + 1];
			}
		}
	}
	return string;
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"
