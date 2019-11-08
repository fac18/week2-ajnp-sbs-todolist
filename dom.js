// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -3, description: "Scare humans", done: false },
    { id: -2, description: "Send Mowgli to get honey", done: false },
    { id: -1, description: "Make marmalade sandwich", done: false }
  ];
  // this is our initial todoList
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");

    // add span holding description
    var label = document.createElement("label");
    todoNode.appendChild(label);
    label.setAttribute("for", todo.id);

    label.textContent = todo.description;

    // add markTodo button
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", todo.id);

    label.appendChild(checkbox);

    var paw = document.createElement("div");
    label.appendChild(paw);
    // you will need to use addEventListener

    if (todo.done) {
      label.classList.add("checked");
      paw.classList.add("checked");
    } else {
      label.classList.remove("checked");
      paw.classList.remove("checked");
    }

    todoNode.addEventListener("click", function(event) {
      if (checkbox.classList.contains("checked")) {
        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
      } else {
        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
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
      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, description); // ?? change this!
      update(newState);
      event.target.querySelector("input").value = "";
    });
  }

  

  document.getElementById("sortBtn").addEventListener("click", function(){
    var newState = todoFunctions.sortTodos(state);
    update(newState);
  });

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
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
  })
();
