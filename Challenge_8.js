console.log('1. The program starts');

setTimeout(() => {
  console.log('4. The timer is lapsed, this callback function is now called');
}, 2000); // 2000ms = 2 seconds

console.log('2. The timer has started, and the callback function registered to be called later');

console.log('3. The rest of the program below (immediate tasks) will keep running immediately');

// Exercise

const printHello = () => {
    console.log('Hello!');
}

executeAfterDelay = (number,word) => {
    setTimeout(word,number*1000);
}

executeAfterDelay(5, printHello);

// Challenge


let counter = 0;

const increment = () => {
    console.log(counter++);
}

setInterval(increment,1000);
