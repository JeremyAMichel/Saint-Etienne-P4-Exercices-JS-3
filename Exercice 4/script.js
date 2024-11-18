let amis = ["jérémy", "hassan", "vincent"];
let resultat = "";
for (let i = 0; i < amis.length; i++) {
    let j = 0;
    while (j <= i) {
        resultat += amis[i] + " ";
        j++;
    }
    resultat += "\n";
}

console.log(resultat);