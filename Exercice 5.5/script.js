// Demander un nombre de départ à l'utilisateur
let nombre = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));

// Afficher la table de multiplication du nombre
console.log(`Table de ${nombre} :`);
for (let i = 1; i <= 10; i++) {
    console.log(`${nombre} x ${i} = ${nombre * i}`);
}