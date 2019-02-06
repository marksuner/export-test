var func = require('./function.import');
var value = require('./value.import');
var obj = require('./object.import');

module.exports = {
  func,
  value,
  obj
}

// the above module exports equivalent
// try tunning `node test.js` in your command line
// module.exports = {
//   func: func,
//   value: value,
//   obj: obj
// }