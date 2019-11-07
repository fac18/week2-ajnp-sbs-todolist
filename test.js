var test = require("tape");
var todoFunctions = require("./logic");
var oneTodo = [
  {
    id: 0,
    description: "smash avocados",
    done: true
  }
];
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

test("Example test", function(t) {
  t.pass();
  t.end();
});

test("returns array with original todos and the newTodo added to the end in addTodo function", function(t) {
  var actual = todoFunctions.addTodo(oneTodo, "make coffee");
  var expected = twoTodos;
  t.deepEqual(
    actual,
    expected,
    "Should return array containing todos with the newTodo added to the end."
  );
  t.end();
});

// should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
test("Input argument todos has not been altered in addTodo function", function(t) {
  todoFunctions.addTodo(oneTodo, "eat watermelon");
  t.deepEqual(
    oneTodo,
    [
      {
        id: 0,
        description: "smash avocados",
        done: true
      }
    ],
    "todos argument has not been altered."
  );
  t.end();
});

// Stretch goal test: to test the length of the original array and compare it to the output length todos.length

// test("Input argument todos has not been altered in addTodo function", function(t) {
//   todoFunctions.addTodo(oneTodo, "eat watermelon");
//   t.deepEqual(
//     oneTodo.length + 1,
//     todoFunctions.addTodo.newObjArr.length,
//     "newObjArr is 1 object longer than the original input."
//   );
//   t.end();
// });
