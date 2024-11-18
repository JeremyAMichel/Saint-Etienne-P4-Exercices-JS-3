let maxNumber = Number.NEGATIVE_INFINITY;
let maxPosition = 0;
let i = 1;

while (true) {
    let userInput = parseFloat(prompt(`Entrez le nombre numéro ${i} (ou 0 pour arrêter) :`));
    if (userInput === 0) {
        break;
    }
    if (userInput > maxNumber) {
        maxNumber = userInput;
        maxPosition = i;
    }
    i++;
}

if (maxPosition > 0) {
    console.log(`Le plus grand de ces nombres est : ${maxNumber}`);
    console.log(`C’était le nombre numéro ${maxPosition}`);
} else {
    console.log("Aucun nombre valide n'a été saisi.");
}