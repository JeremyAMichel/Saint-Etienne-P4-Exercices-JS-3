// Demander un nombre de départ à l'utilisateur
let startNumber = parseInt(prompt("Entrez un nombre de départ:"));

// Vérifier que l'entrée est un nombre
if (!isNaN(startNumber)) {
    // Afficher les dix nombres suivants
    for (let i = 1; i <= 10; i++) {
        console.log(startNumber + i);
    }
} else {
    console.log("Veuillez entrer un nombre valide.");
}