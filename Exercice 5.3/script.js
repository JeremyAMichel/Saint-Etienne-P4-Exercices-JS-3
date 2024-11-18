// Demander un nombre de départ à l'utilisateur
let startNumber = parseInt(prompt("Entrez un nombre de départ:"));

// Vérifier que l'entrée est un nombre
if (!isNaN(startNumber)) {
    // Afficher les dix nombres suivants
    let i = 1;
    while (i <= 10) {
        console.log(startNumber + i);
        i++;
    }
} else {
    console.log("Veuillez entrer un nombre valide.");
}