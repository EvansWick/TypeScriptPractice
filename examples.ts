// const - не можна перевизначити
const num = 42;
// num = 'hello'; // Uncaught TypeError: Assignment to constant variable

// let - можна перевизначити
let num2 = 42;
num2 = 100; // No errors
// num2 = 'hello'; // Error: Type 'string' is not assignable to type 'number' (у TypeScript)






// Number Type
const decimal: number = 6;
const integer: number = 7.10;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;




// String Type for simple string
const myName: string = 'Yauhen';

// String Type for template string
const sentence: string = `Hello, my name is ${ myName }!`;


// Void Type
// For function result:
const greetUser = (): void => {
    alert("Hello, nice to see you!");
};

// For 'greetUser'
// Error: Type '() => void' is not assignable to type 'void'
const greetUser: void = () => {
    alert("Hello, nice to see you!");
};