// "I'm so happy!" code
function happy() {
    for (let n = 1; n <= 500; n++) {
        console.log("I'm so happy!");
    }
}

// Multiples of 4 code
function fourMultiples() {
    for (let n = 12; n <= 800; n = n + 4) {
        console.log(n);
    }
}

// Odd numbers from 55 to 11 code
function oddNumbers() {
    for (let n = 55; n >= 11; n = n - 2) {
        console.log(n);
    }
}

// Series sum #1 code
function seriesOne() {
    let sum = 0;
    for (let n = 5; n <= 50; n++) {
        sum = sum + n;
    }
    console.log(sum);
}

// Series sum #2 code
function seriesTwo() {
    let sum = 0;
    for (let n = 10; n <= 100; n = n + 10) {
        sum = sum + n;
    }
    console.log(sum);
}

// I've put each one in its own separate function so that I can paste the lot into the console, and then test each function by calling it from the console.