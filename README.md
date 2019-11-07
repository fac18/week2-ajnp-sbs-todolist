# week2-ajnp-sbs-todolist

### STOP
1. Choose beautifier/prettier/linter
2. miniature issues: miniature time 10:10:10
Learning points (end of last week)
1. BEM
2. ES6 code
3. reduce, map, filter
4. spread

### GO  
1. HTML and CSS classes decided together
2. Presentation - give it more time and more practice
3. user stories (further research)

### CONTINUE
1. Great team work
2. creating issues and closing them
3. Initial brain storm
4. Style guide
5. final sprint - focussing on individual issues while consulting

---
## Alex, Gillian, Kin, and Reggie's Epic 🐻 Project (group AJNP)

## WHY
1. To learn how to do test driven development
2. Improve knowledge of DOM manipulation

## WHAT
1.  Enter tasks I need to do into a web page :
        1.1 add a new object in the list
2. View the tasks I have added in the list
3. Mark tasks as complete
4. Delete an object from the list
5. The to-dos to be large enough

## HOW

#### Building the basic outline.

Having worked together last week we decided to take some of the labour out of it by using the same css and layout.

As a change from last week, we decided to all work together to create this first mock. Before quickly moving on to understanding the tests.

#### Testing

We spent a good amount of time, trying to understand what exactly we had to test.
Struggles:
1. How do we access the functions we want to test?
2. Why is the test returning as undefined
3. How do we test for each part of the function?
4. Why are we writing the solution instead of a test?
5. I need more coffee.

![Grandma struggling on a computer without mouse](https://media.giphy.com/media/j0v5E8cE6mr84kWEMf/giphy.gif)

We split the first two functions and coded them in pairs
We decided to create hard coded variables (examples of oneTodo & and twoTodos) and then we started making progress.
Our test were passing and so we moved on to creating the code

#### Coding
Once we'd written the tests, the writing of the code was comparitively easy.
TDD made sure we deeply understood what the function was asking us to do before we'd started solving it.
We learnt the hard way that the map function only works to copy shallow arrays (arrays, not an array of objects). https://medium.com/@gamshan001/javascript-deep-copy-for-array-and-object-97e3d4bc401a

#### DOM
Gillian is our resident DOM master. 
![Gillian baby with crown]()
![We specialise in Domination](https://media.giphy.com/media/pP3r879z4WtxrdeCGi/giphy.gif)

#### Looking back

What we could've done better
- Reviewing it all together before starting 
- We could likely have been more modular with our tests: for example testing the length of our todo array when adding or deleting a new object rather than just testing it against hard coded examples.
- We made a small mistake by moving on to the dom.js before the the test and our functions were completed - this meant that we started trying to code the functions into our dom.js...
![Two bears looking at a computer screaming "oh god no"](https://media.giphy.com/media/ppFaBYPO8paUg/giphy.gif)






