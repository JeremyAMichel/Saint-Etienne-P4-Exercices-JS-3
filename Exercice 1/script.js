function generatePyramid(levels) {
    for (let i = 1; i <= levels; i++) {
        console.log('*'.repeat(i));
    }
}

// Example usage:
generatePyramid(5);


// let levels = parseInt(prompt("Combien d'étage vous voulez ?"))

// function generatePyramid(levels) {
//     let pyramid = '';

//     for (let i = 1; i <= levels; i++) {
//         let spaces = ' '.repeat(levels - i);
//         let stars = '*'.repeat(2 * i - 1);
//         pyramid += spaces + stars + spaces + "\n";
//     }


//     let trunkWidth = 2 * Math.floor(levels / 2) - 1;
//     let trunkHeight = levels - 1;
//     let trunkSpaces = ' '.repeat((2 * levels - 1 - trunkWidth) / 2);

//     for (let j = 0; j < trunkHeight; j++) {
//         pyramid += trunkSpaces + '*'.repeat(trunkWidth) + trunkSpaces + '\n';
//     }

//     return pyramid;
// }

// // Exemple d'utilisation :
// console.log(generatePyramid(levels));

