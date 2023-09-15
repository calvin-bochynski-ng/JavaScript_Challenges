//Define a function getNumberSign that takes a number and returns either 'zero', 'positive' or 'negative' depending on its sign:

const getNumberSign = (num) => {
    if (num > 0){
        console.log("Positive");
    }
    else if (num == 0){
        console.log("Zero");
    }
    else{
        console.log("Negative");
    }
}

getNumberSign(3);
getNumberSign(0);
getNumberSign(-5);

// 2nd Exercise

const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length === validLength) {
      return ("valid");
    } else {
      return ("not valid");
    }
  }
console.log("The number you have entered is " + isValidLength('00'));

console.log("The number you have entered is " + isValidLength('00112233445'));

// Challenges //
//Write a fizzBuzz function in JavaScript. As a reminder, this function should take a number as argument, and then either:

//Return "Fizz" if this number is divisible by 3.
//Return "Buzz" if this number is divisible by 5.
//Return "FizzBuzz" if this number is divisible by both 5 and 3.
//Otherwise, Return the number itself.

const fizzbuzz = (number) => {
    if (number%3 == 0){
        if (number%5 == 0){
            return ("FizzBuzz");
        }
        else{
            return("Fizz");
        };
    }
    else if (number%5 == 0){
        return("Buzz");
    }
    else{
        return(number);
    };
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(8));
console.log(fizzbuzz(15));
console.log(fizzbuzz(18));
console.log(fizzbuzz(20));

