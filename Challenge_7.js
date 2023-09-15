//Declare a function lowercaseMessage that returns the lowercase version of the given string.

//Declare a function transform that behaves like the one above:

//takes one string and one function as arguments
//calls the function on the given string.
//Call transform by giving it the string 'WHY ARE YOU SHOUTING?' and the function lowercaseMessage. It should return a lowercase version of the message ('why are you shouting?')


const lowercaseMessage = (message) => {
    return message.toLowerCase();
  }

const transform = (message, transformFunction) => {
    return transformFunction(message);
  }
  
console.log(transform("WHY ARE YOU SHOUTING?", lowercaseMessage));  


//////////////////////////


const notifyByEmail = (email) => {
  return ("Email sent to: " + email);
}

const notifyByText = (number) => {
  return("Text sent to: " + number);
}

const notify = (text, notifyfunction) => {
  return notifyfunction(text);
}

console.log(notify("hello@testing.com",notifyByEmail));
console.log(notify("+100000000000",notifyByText));

