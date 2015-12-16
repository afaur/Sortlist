var readlineSync = require('readline-sync');

// Read comma seperated items
var list_cs = process.env['list_keys'];

// Turn that into an array of items
var list = list_cs.split(',');

// Sort the items based on user input choices
list = list.sort(function(el1, el2) {
  var answer = readlineSync.question('1) ' + el1 + '\n2) ' + el2 + '\n\n>');
  if (answer === '1') { return -1; }
  if (answer === '2') { return 1; }
  return 0;
});

// Return final list as array
console.log(list);

// Return final list as comma seperated
// Use this for changing your start_sample
// list_a_keys and ranks based on order
console.log(
  list.join(',')
);

