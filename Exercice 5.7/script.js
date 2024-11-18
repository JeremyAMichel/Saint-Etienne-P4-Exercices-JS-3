function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

let number = parseInt(prompt("Enter a number: "), 10);
if (!isNaN(number)) {
    alert("The factorial of " + number + " is " + factorial(number));
} else {
    alert("Please enter a valid number");
}

