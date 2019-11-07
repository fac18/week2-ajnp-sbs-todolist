<<<<<<< HEAD
var test = require('tape');
var todoFunctions = require('./logic');
var oneTodo = [{
  id: 0,
  description: 'smash avocados',
  done: true,
}]

var twoTodos = [{
  id: 0,
  description: 'smash avocados',
  done: true,
},
{
  id: 1,
  description: 'make coffee',
  done: false,
}]

var threeTodos = [{
  id: 0,
  description: 'smash avocados',
  done: true,
},
{
  id: 1,
  description: 'make coffee',
  done: false,
},
{
  id: 2,
  description: 'make tea',
  done: false, 
}]
=======
var test = require("tape");
var todoFunctions = require("./logic");
var twoTodos = [
  {
    id: 0,
    description: "smash avocados",
    done: true
  },
  {
    id: 1,
    description: "make coffee",
    done: false
  }
];
var threeTodos = [
  {
    id: 0,
    description: "smash avocados",
    done: true
  },
  {
    id: 1,
    description: "make coffee",
    done: false
  },
  {
    id: 2,
    description: "drink",
    done: false
  }
];
>>>>>>> master

test("Example test", function(t) {
  t.pass();
  t.end();
});

<<<<<<< HEAD
test('Makes deleteTodo remove an idToDelete in an array of 2 objects', function(t) {
  t.deepEqual(todoFunctions.deleteTodo(twoTodos,1)
  
  ,oneTodo,
  
  "Removes idToDelete from array");
t.end();
});

test('Makes deleteTodo remove an idToDelete in an array of 3 objects', function(t) {
  t.deepEqual(todoFunctions.deleteTodo(threeTodos,2)
  
  ,
  
  twoTodos,
  
  "Removes idToDelete from array of 3 objects");
t.end();
});

test('deleteTodo keep the original todo the same', function(t) {
  
  todoFunctions.deleteTodo(twoTodos,1);

  t.deepEqual(twoTodos,
    [
      {
        id: 0,
        description: 'smash avocados',
        done: true,
      },
      {
        id: 1,
        description: 'make coffee',
        done: false,
      }]
    ,
  
  "Original was kept the same")
t.end();
});
=======
// should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
test("Input argument todos has not been altered in addTodo function", function(t) {
  t.equal(
    twoTodos,
    [
      {
        id: 0,
        description: "smash avocados",
        done: true
      },
      {
        id: 1,
        description: "make coffee",
        done: false
      }
    ],
    "todos argument has not been altered."
  );
  t.end();
});

test("returns array with original todos and the newTodo added to the end in addTodo function", function(t) {
  t.equal(
    todoFunctions.addTodo(twoTodos, "drink"),
    threeTodos,
    "Should return array containing todos with the newTodo added to the end."
  );
  t.end();
});

// test("newTodo has an id key in addTodo function", function(t) {
//   var actual
//   var expected
//
//   t.equal(
//
//   );
//   t.end();
// });
>>>>>>> master
