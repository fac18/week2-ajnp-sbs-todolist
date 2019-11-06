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

test("Example test", function(t) {
  t.pass();
  t.end();
});

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
