let maxNumber = Number.NEGATIVE_INFINITY;
let maxPosition = 0;

for (let i = 1; i <= 20; i++) {
    let userInput = parseFloat(prompt(`Entrez le nombre numéro ${i} :`));
    if (userInput > maxNumber) {
        maxNumber = userInput;
        maxPosition = i;
    }
}

console.log(`Le plus grand de ces nombres est : ${maxNumber}`);
console.log(`C’était le nombre numéro ${maxPosition}`);