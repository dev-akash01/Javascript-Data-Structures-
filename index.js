// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Stack</h1>`;

/*** CREATING A STACK ***/
var Stack = function() {
  this.count = 0;
  this.storage = {};

  /** Add Value to Stack **/
  this.addValue = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  /** Remove Value from Stack **/
  this.removeValue = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  /** Return the size of Stack **/
  this.stackSize = function() {
    return this.count;
  };

  /** Return the value at the end of Stack **/
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

var checkStack = new Stack();

checkStack.addValue(1);
checkStack.addValue('Akash');

//var remove = checkStack.removeValue();
var peek = checkStack.peek();
var size = checkStack.stackSize();
//console.log(remove)
console.log(peek);
console.log(size);
