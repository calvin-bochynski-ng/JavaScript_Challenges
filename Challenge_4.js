//Define (in a file sayHello.js) the function sayHello, which returns the string 'Hello'.
//Require and call that function in node - you should get the following result:

var sayHi = () => {
    return 'Hello';
  };
  
console.log(sayHi());


//Modify the previous function sayHello so it accepts one argument, and calling sayHello('Ben') displays a personalised message:

var sayHi = (name) => {
  return 'Hello ' + name;
};

console.log(sayHi('Ben'));

//Define a function add (in a file add.js) which takes two arguments and return their sum.
//Define a function multiply (in a file multiply.js) which takes two arguments and return their product.
//From node, require and call the functions add and multiply to calculate and print the following: 2 * (4 + 4). You should get the correct result (16).

const add_num = require('./add');
const multiply_num = require ('./multiply');

console.log(multiply_num(2,add_num(4,4)));

