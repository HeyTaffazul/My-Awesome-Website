// index.js

// 1.Function to find even and odd numbers in an array
function findEvenOddNumbers(arr) {
    const evenNumbers = [];
    const oddNumbers = [];

    for (let number of arr) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }
    }

    console.log("Even Numbers:", evenNumbers);
    console.log("Odd Numbers:", oddNumbers);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findEvenOddNumbers(numbersArray);

//2. Function to print patterns
function printPatterns(n) {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Print pattern for n=5
printPatterns(5);
