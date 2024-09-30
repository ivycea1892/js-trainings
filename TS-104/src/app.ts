/**
 * 
 * Arrow function that accepts a default parameter and a rest parameters
 */
const totalPay = (customerName: string, ...numbers: number[]) => {
    return customerName + ' Total: ' + numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const receipt = totalPay('Ivy', 230, 310, 178, 120);
console.log(receipt);


/**
 * 
 * Arrow function that returns an array, and create variables 
 * that will accept the destructured values of the said function
 */
const myHobbies = (hobbies: string[]) => {
    return hobbies;
};

const hobbies = myHobbies(['Sports', 'Cooking']);
const [hobby1, hobby2] = hobbies;
console.log (hobby1, hobby2);


/**
 * 
 * Arrow function that returns an array, and create variables 
 * that will accept the destructured values of the said function
 */
type Person = {
    name: string,
    age: number
}

const personInfo = (person: Person) => {
    return person;
};

const person = personInfo({name: 'Ivy', age: 32});
const { name: firstName, age } = person;
console.log (firstName, age);

