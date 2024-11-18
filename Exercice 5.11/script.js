// Fonction pour calculer la factorielle d'un nombre
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Fonction pour calculer les chances de gagner
function calculateChances(n, p) {
    let X = factorial(n) / factorial(n - p);
    let Y = factorial(n) / (factorial(p) * factorial(n - p));
    
    console.log(`Dans l’ordre : une chance sur ${X} de gagner`);
    console.log(`Dans le désordre : une chance sur ${Y} de gagner`);
}

// Demander à l'utilisateur le nombre de chevaux partants et joués
let n = parseInt(prompt("Entrez le nombre de chevaux partants :"));
let p = parseInt(prompt("Entrez le nombre de chevaux joués :"));

// Calculer et afficher les chances de gagner
calculateChances(n, p);