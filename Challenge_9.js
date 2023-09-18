// Assign an array to the constant numbers
const numbers = [1, 2, 3, 4];

const newNumbers = numbers.concat(5); // adds one element and return a new array

// We can access elements with []
console.log(numbers[0]); // 1

console.log(numbers); // [1, 2, 3, 4]

console.log(newNumbers) // [1, 2, 3, 4, 5]

console.log(numbers.length) // 4

console.log(newNumbers.length) // 5

// Loop through the array and execute code for each element
numbers.forEach((number) => {
  console.log(number);
})


///// Exercise

const names = ['Monika', 'Ben', 'Megan'];

console.log(names.length);

console.log(names[1]);

console.log(names.concat('Calvin'));

// Challenge

const addToBatch = (array, num) => {
    if (array.length >= 5){
        console.log(array);
    }
    else{
        console.log(array.concat(num))
    };
}

addToBatch([1], 3); 

addToBatch([1, 2, 3], 4); 

addToBatch([], 8); 

addToBatch([1, 2, 3, 4, 5, 6], 7); 

addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);

