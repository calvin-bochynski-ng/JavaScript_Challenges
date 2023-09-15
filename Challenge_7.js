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


//Challenge
//Declare a function notifyByEmail that accepts an email address as argument and returns the string 'Email sent to: <EMAIL>'.
//Declare a function notifyByText that accepts a phone number (as a string) as argument and returns the string 'Text sent to: <PHONE NUMBER>'.
//Now declare a generic function notify that accepts a first string argument (either an email or a phone), and the function to use in second argument. This function should only rely on calling the function passed in second argument, not declare a string by itself.
//Use the function notify with the two previous functions to:
//send an email to hello@testing.com and get the expected output.
//send a text to +10000000000 and get the expected output.


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

