// sample 1: using values
var TestValue = require('./value.import.js')
console.group('TEST VALUE')
console.log(TestValue);
console.groupEnd();

// sample 2: using function
var TestFunction = require('./function.import.js')
TestFunction(100, 200)

// sample 3: using object
var TestObject = require('./object.import.js')
console.group('TEST OBJECT')
console.log(TestObject.add(2, 5))
console.log(TestObject.minus(10, 5))
console.log(TestObject.name)
console.groupEnd()

