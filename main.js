// 1. Initialize your object.

var myPerson = {
  firstName: 'joshua', 
  lastName: 'byrd', 
  eyeColor:'brown',
  weight: 160 
}; // Fill in the object here.

// 2. Practice reading properties.

console.log('This person\'s eye color is '+ myPerson.eyeColor);
console.log('This person\'s lastName is ' +  myPerson['lastName']);

var propName = 'weight'
console.log('This person\'s weight is '+ myPerson[propName] );

myPerson ['eyeColor'] = 'hazel'
myPerson.lastName = 'Jingleheimer'


// 3.Use bracket syntax with a variable
var propName = 'firstName';


// 4. Use bracket syntax for an update.


// 5. Use dot syntax for an update.


// PLEASE DO NOT ALTER BELOW THIS LINE. THIS IS CODE
// USED BY THE AUTOMATED TESTS.
console.log(myPerson);
