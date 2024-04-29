// Simple for loop
// Create a for loop that logs out the numbers from 74 - 98

for  (let i = 74; i <= 98; i++) {
    console.log(i);
}

// For loop in a function
// Create a function that has two parameters: stringToLog and numberOfTimesToLog

// When calling the function it should log out the stringToLog the amount of times specified in numberOfTimesToLog. Use a for loop.

// logString('hello', 3);
// // hello
// // hello
// // hello

function logString (stringToLog, numberOfTimes) {
  for(i=0; i<numberOfTimes; i++){
      console.log(stringToLog)}
}

logString ('hello', 3);

// Imagine we work at a company. Peter from the HR department wants us to send out a couple of emails to some recepients. The only problem is that he sent us the email in a weird format: benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com

// Use the sendEmailTo function to send an email to all the recepients that we got from Peter.

// Hint use the .split method and look up iterating an array js for loop on google.

// // This function emulates sending emails to receipients
// function sendEmailTo(recepient) {
//     // But really it only logs out a string
//     console.log('email sent to ' + recepient);
// }

// This function emulates sending emails to receipients
function sendEmailTo(recepient) {
    // But really it only logs out a string
    console.log("email sent to " + recepient);
  }
  
  const allEmails =
    "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
  const allEmailsArray = allEmails.split("|");
  
  for (let i = 0; i < allEmailsArray.length; i++) {
    const email = allEmailsArray[i];
    sendEmailTo(email);
  }