// Demande un nombre de départ à l'utilisateur
let nombre = parseInt(prompt("Entrez un nombre de départ :"));

// Initialise la somme à 0
let somme = 0;

// Calcule la somme des entiers jusqu'à ce nombre
for (let i = 1; i <= nombre; i++) {
    somme += i;
}

// Affiche le résultat
console.log(`La somme des entiers jusqu'à ${nombre} est ${somme}`);