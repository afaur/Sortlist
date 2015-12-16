var _ = require('lodash');

// Get comma seperated keys and values for list a and b
var list_a_cs_keys   = process.env['list_a_keys'];
var list_a_cs_values = process.env['list_a_values'];

var list_b_cs_keys   = process.env['list_b_keys'];
var list_b_cs_values = process.env['list_b_values'];

// Get actual keys and values for list a and b
var list_a_keys   = list_a_cs_keys.split(',');
var list_a_values = list_a_cs_values.split(',');

var list_b_keys   = list_b_cs_keys.split(',');
var list_b_values = list_b_cs_values.split(',');

// Created 'key': value array for list a and b
var list_a = _.zipObject(
  list_a_keys,
  list_a_values
);

var list_b = _.zipObject(
  list_a_keys,
  list_a_values
);

// Have an array for storing our
// final rank based on the two lists
var mixed = [];

// Figure out the final rank by
// comparing rank from both lists
for (key in list_a) {
  mixed.push({
    name: key,
    value: ((list_a[key] + list_b[key]) / 2)
  });
}

// Display the result
console.log(
  _.sortByAll(
    mixed, ['value', 'name']
  )
);

