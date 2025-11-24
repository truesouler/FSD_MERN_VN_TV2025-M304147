let numbers = [10, 25, 7, 40, 18];

let sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);

let largest = Math.max(...numbers);
console.log("Largest:", largest);
