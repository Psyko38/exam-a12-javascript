function filtrerNegatifs(tab) {
	var a = [];
	for (let i = 0; i <= tab.length - 1; i++) {
		if (tab[i] > 0) {
			a.push(tab[i]);
		}
	}
	return a;
}

console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]
