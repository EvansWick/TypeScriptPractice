// Arguments type
const createPassword = (name: string, age: number) => `${name}${age}`;


// Multiple argument types
const createPassword = (name: string, age: number | string) => `${name}${age}`;

createPassword('Jack', 31);   // 'Jack31'
createPassword('Jack', '31'); // 'Jack31'


// Function with two required arguments
const createPassword = (name: string, age: number): string => `${name}${age}`;

// Call function with one argument
createPassword('Jack'); // Error: An argument for 'age' was not provided.

// Function with optional argument 'age'
const createPassword = (name: string, age?: number): string => `${name}${age}`;


// Returned type is string
const createPassword = (name: string, age: number | string): string => `${name}${age}`;

// Returned type is number
const sum = (first: number, second: number): number => first + second;

// Returned type is object
const createEmptyObject = (): object => ({});


// Void
const greetUser: void = () => {
    alert("Hello, nice to see you!");
};

// Never Type
// Function return Error
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
};

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {
    }
};


