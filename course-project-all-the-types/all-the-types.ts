/** 
 * All about OBJECTS, ARRAYS and ENUMS
*/

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Ivy',
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
    console.log('is admin');
}

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Photography']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}

/**  
 *  All about Union Types, Literal Types,
    Type Aliases/Custom Types
*/

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

const combinedAges = combine(32, 34, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('32', '34', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Tin', 'Lou', 'as-text');
console.log(combinedNames);


/**
 * All About Function Return Types & "void"
*/

function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num); 
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});


/**
 * All About "unknown" Type, "never" Type
 */

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Ivy';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occured', 500);
