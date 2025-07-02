let userName = 'User'; // Insert Name
let userQuestion = 'Is this a question?'; // Insert Question
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber;


// Outputs "Hello, user's name!" or if no user name output "Hello!"
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Output user's question or tells user to ask a question
userQuestion ? console.log(`Your question is: ${userQuestion}`) : console.log('Please ask a question!');

// Determines answer
switch(randomNumber) {
  case 0:
    console.log(`It is certain! ${userName}`);
    break;
  case 1:
    console.log(`It is decidedly so! ${userName}`);
    break;
  case 2:
    console.log(`Reply hazy, try again ${userName}`);
    break;
  case 3:
    console.log(`Cannot predict now ${userName}`);
    break;
  case 4:
    console.log(`Do not count on it :/ ${userName}`);
    break;
  case 5:
    console.log(`My sources say no -_- ${userName}`);
    break;
  case 6:
    console.log(`Outlook not so good :( ${userName}`);
    break;
  case 7:
    console.log(`Signs point to yes! :D ${userName}`);
    break;
}