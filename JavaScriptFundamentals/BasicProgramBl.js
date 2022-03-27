
let numbers = require('readline-sync');

let sayHi = function(name) {
  console.log( `Hello, ${name}` );
};

 function add(){
 let num1 = numbers.questionInt("enter any  number :");
 let num2 = numbers.questionInt("enter another number :");

 let result = (num1 + num2);
 console.log("your result is ",result);
 }

function Fibonacci(){
 const number = numbers.questionInt('Enter the number of terms: ');
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    console.log(n1 );
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
}

function factorial(){
const number = numbers.questionInt('Enter a  integer value: ');
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
}

function generateRandom(){
const random =  Math.floor(Math.random() * 10) + 1;
console.log(random);
}


    module.exports = {sayHi,Fibonacci,add,factorial,generateRandom}
