let number;

do {
    number = parseInt(prompt("Veuillez entrer un nombre entre 1 et 3 :"), 10);
} while (number < 1 || number > 3);

console.log("Merci! Vous avez entré le nombre : " + number);