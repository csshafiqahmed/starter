//console.log(arguments);
//console.log(require('module').wrapper);
//module.exports
const calculator = require('./test-module-1');

const calc1 = new calculator();
console.log(calc1.add(2, 5));

//exports
const calc2 = require('./test-module-2');
console.log(calc2.add(2, 5));
