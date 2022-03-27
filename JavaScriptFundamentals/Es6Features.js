//let and const keywords :

let num = 10;
console.log(num);   

const PI = 3.14;
console.log(PI); 

//Arrow Functions

let sum = (a, b) => a + b;
console.log(sum(10, 20));


//Multi-line Strings

let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`

console.log(greeting);

// Template Literals
let firstName = "Arjun";
let lastName = "Reddy";
let names = `My name is ${firstName} ${lastName}`
console.log(names);

//Enhanced Object Literals

function getMobile(manufacturer, model, year) {
    return {
       manufacturer,
       model,
       year
    }
 }
 console.log(getMobile("Samsung", "Galaxy", "2020"));


 //aysc await

 function showMsg(value) {
   console.log(value);
 }
 
 async function myFunction() {
   return "Hello world";
  }
 
 myFunction().then(
   function(msg) {
     showMsg(msg);
    }
 );

//async and await
 async function dispalyMsg() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("This is javascript");
    }, 3000);
  });
  let msg = await myPromise;
  console.log(msg);
}

dispalyMsg();

//call back
function calculate(result) {
 console.log( "The result is :",result); 

}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, calculate);


//promise
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { 
    myResolve("Hello World");
   }, 1000);
});

myPromise.then(function(value) {
 console.log(value);
});

