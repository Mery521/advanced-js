console.log('Main module is starting!');
 var a  = require('./testA');
 var b  = require('./testB');

 console.log('in main test A.done-', a.done, 'testB.done-', b.done);