var test = require('tape');
var todoFunctions = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

test('Makes deleteTodo remove an idToDelete', function(t) {
  t.deepEqual(todoFunctions.deleteTodo([
    {
      id: 0,
      description: 'smash avocados',
      done: true,
    },
    {
      id: 1,
      description: 'make coffee',
      done: false,
    },
  ],1)
  
  ,
  
  [{
    id: 0,
    description: 'smash avocados',
    done: true,
  }]),
  
  "Removes idToDelete from array";
t.end();
});