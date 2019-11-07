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
    description: "make tea",
    done: false
  }
];

test("Example test", function(t) {
  t.pass();
  t.end();
});

// Beginning of tests for addtodo
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

//Beginning of tests for deleteTodo

test("Makes deleteTodo remove an idToDelete in an array of 2 objects", function(t) {
  t.deepEqual(
    todoFunctions.deleteTodo(twoTodos, 1),

    oneTodo,

    "Removes idToDelete from array"
  );
  t.end();
});

test("Makes deleteTodo remove an idToDelete in an array of 3 objects", function(t) {
  t.deepEqual(
    todoFunctions.deleteTodo(threeTodos, 2),

    twoTodos,

    "Removes idToDelete from array of 3 objects"
  );
  t.end();
});

test("deleteTodo keep the original todo the same", function(t) {
  todoFunctions.deleteTodo(twoTodos, 1);

  t.deepEqual(
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
    "Original was kept the same"
  );
  t.end();
});


test("markTodo keep the original todo the same", function(t) {
  todoFunctions.markTodo(twoTodos, 1);
  t.deepEqual(
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
    "Original was kept the same"
  );
  t.end();
});


test("Makes markTodo mark an object's done key as true using threeTodos test", function(t) {
  t.deepEqual(
    todoFunctions.markTodo(threeTodos, 2),

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
      },
      {
        id: 2,
        description: "make tea",
        done: true
      }
    ],

    "Marks todo id 2's done key as true (using threeTodos test)"
  );
  t.end();
});

test("Sorts elements by done key in ascending order (false first)", function(t) {
  t.deepEqual(
    todoFunctions.sortTodos(threeTodos),

    [ {
      id: 1,
      description: "make coffee",
      done: false
    },
    {
      id: 2,
      description: "make tea",
      done: false
    },
      {
        id: 0,
        description: "smash avocados",
        done: true
      }
    ],

    "Sorts elements by done key in ascending order (false first)"
  );
  t.end();

  test("sortTodos keeps the original todo the same", function(t) {
    todoFunctions.sortTodos(threeTodos);
    t.deepEqual(
      threeTodos,
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
        },
        {
          id: 2,
          description: "make tea",
          done: false
        }
      ],
      "Original was kept the same"
    );
    t.end();
  });

});