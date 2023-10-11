// VARIABLES

// Variable is a container for information (data)

// 4 ways to DECLARE a variable

// 1: let
// 2: const
// 3: var <-- DON'T USE IT
// 4: (none) <-- DON'T USE IT

// CONST --> Constant: Unchangeable
// LET --> can be changed later on

const myName = 'Kassie';

let myAge = 34;
// birthday happens
myAge = 35;

// DATA TYPE
// strings: text - has quotation marks
// EXAMPLES: 'Kassie' -- '34' -- 'Hello world'

// boolean: True Or False

// number: no quotation marks
// EXAMPLES: 42 -- 12345 -- 0

// ASSIGNMENT OPERATOR

let x = 5
let y = '5'

// == EVALUATES IF THIS IS TRUE

// (TRUE)
(x == y) // LOOSELY equivalent

// (FALSE)
(x === y) // STRICTLY equivalent, DATA TYPES must match

// ------------------------------------------------------------------

// CONDITIONAL LOGIC

// if (this condition evaluates to true) {execute this code}

// if (this is true) {execute this code} else {execute this code for literally anything else}

// if (this is true) {execute this code} else if (this is true) {execute this} else {do this for anything else not previously specified}

let x = 5;
let y = '5';

if (x == y) {
  console.log('Yes it is');
} else {
  console.log('No it is not');
}