// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -3, description: "Scare humans" },
    { id: -2, description: "Send Mowgli to get honey" },
    { id: -1, description: "Make marmalade sandwich" }
  ];
  console.log(state);
  // this is our initial todoList
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");

    // add markTodo button
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", todo.id);

    todoNode.appendChild(checkbox);

    // add span holding description
    var label = document.createElement("label");
    todoNode.appendChild(label);
    label.setAttribute("for", todo.id);

    console.log(todo.description);
    label.textContent = todo.description;

    // you will need to use addEventListener
    todoNode.addEventListener("click", function(event) {
      if (checkbox.classList.contains("checked")) {
        checkbox.classList.remove("checked");
        label.classList.remove("checked");
      } else {
        checkbox.classList.add("checked");
        label.classList.add("checked");
      }
    });

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);
    deleteButtonNode.textContent = "Delete";
    deleteButtonNode.classList.add("button");
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      event.preventDefault();

      // what is inside event.target?
      var description = event.target.querySelector("input").value; // event.target ....
      console.log(description);
      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, description); // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
    console.log("new:", state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
