let number;

do {
    number = parseInt(prompt("Veuillez entrer un nombre entre 10 et 20 :"), 10);

    if (number > 20) {
        console.log("Plus petit !");
    } else if (number < 10) {
        console.log("Plus grand !");
    }
} while (number < 10 || number > 20);

console.log("Merci ! Vous avez entré un nombre valide :", number);