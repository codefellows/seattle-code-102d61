// FUNCTIONS

// Block of code, set of statements that perform a task or calculate a value

// BASIC STRUCTURE OF A FUNCTION

//                    extra info from outside the function
// function functionName(parameters){steps the function will execute when it is used}

// ------------------------------------------------------------------------------------------

// If you want information back from a function, you NEED a return statement

function askName() {
  let usersName = prompt('What is your name?');
  console.log(usersName);
  document.write("Glad you're here " + usersName);
  return usersName;
}
// askName() is invoked in HTML on line 31

function askAge() {
  const usersAge = prompt("How old are you?");
  console.log(usersAge);
  console.log(typeof (usersAge));
  
  if (usersAge >= 21) {
    document.write("You can go to the bar;");
  } else if (usersAge < 21) {
    document.write('You are not old enough to drink!');
  } else {
    document.write('I did not catch your age');
  }
}
// askAge() is invoked in HTML on line 22

// This function expects outside information - PARAMETER - to do its job
function specialMessage(nameGoesHere) {
  alert('Welcome! To the socks page...');
  document.write('If you want socks you came to the right place' + nameGoesHere);
}
// specialMessage() is invoked in HTML on line 34


function askSocks() {
  let usersAnswer = prompt('Do you want some socks? Type yes or no please!');

  console.log('User typed: ' + usersAnswer);

  while (usersAnswer != 'yes'){
    usersAnswer = prompt('Do you want some socks? Type yes or no please!');
  }

  document.write('Let us give you socks!');

  // if (usersAnswer == 'yes') {              
  //   document.write('Let us give you socks!');
  // } else if (usersAnswer == 'yes please') {      
  //   document.write('You have such good manners!');    
  // } else {
  //   document.write('Maybe you will want socks another time');
  // }
}
// askSocks() is invoked in HTML on line 88

function guessMyColor() {
  let userGuess = prompt("Guess my favorite color!");

  while (userGuess != 'yellow') {
    userGuess = prompt("Guess again!");
  }

  alert("You guessed my favorite color!")
}
// guessMyColor() is invoked in HTML on line 13

function gimmeANumber() {
  let theNumber = prompt("Choose a number between 1 and 10.");

  for (let i = 1; i <= theNumber; i++) {
    document.write('<img class="silly-pic" src="jurassic-park.jpg" alt="shhhhh its a secret..." >');
  }
}

// gimmeANumber() is invoked in HTML on line 82


