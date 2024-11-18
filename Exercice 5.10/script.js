function calculateChange() {
    let prices = [];
    let price = parseInt(prompt("Entrez le prix de l'article (0 pour terminer) :"));

    while (price !== 0) {
        prices.push(price);
        price = parseInt(prompt("Entrez le prix de l'article (0 pour terminer) :"));
    }

    let total = prices.reduce((acc, curr) => acc + curr, 0);
    console.log(`Total à payer : ${total} Euros`);

    let amountPaid = parseInt(prompt("Entrez la somme payée :"));
    let change = amountPaid - total;

    if (change < 0) {
        console.log("La somme payée est insuffisante.");
        return;
    } else {
        console.log(`Monnaie à rendre : ${change} Euros`);
    }

    let currencies = [100, 50, 20, 10, 5, 2, 1];
    let changeToReturn = {};

    currencies.forEach((currency) => {
        let count = Math.floor(change / currency);
        if (count > 0){
            changeToReturn[currency] = count;
            change %= currency;
        }
    })

    Object.entries(changeToReturn).forEach(([currency, count]) => {
        for (let i = 0; i < count; i++) {
            console.log(`${currency} Euros`);
        }
    });

    return changeToReturn;
}

// Appel de la fonction
calculateChange();