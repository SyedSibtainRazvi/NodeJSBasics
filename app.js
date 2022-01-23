console.log("Hello"); //global objects

// setTimeout()
// clearTimeout()

// setInterval()
// clearInterval()

// In node we can use global object to access these things as we do not have window object in Node.
// Node is just an Javascript run time environment.
// When we define a variable object, it is added to the global scope and is available via the window object.
// Avoid declaring variables in global scope and we need modularity and encapsulation.


// MODULE 
// Every file in node is considered as a module and varibales and functions defined in that module are private/encapsulated.
// If we need to use there varibales/function somewhere else, we need to export it 
// Every node application has a main file/module.

console.log(module);

// Module {
//     id: '.',
//     path: 'C:\\Users\\syeds\\OneDrive\\Desktop\\Node Practice',
//     exports: {},
//     filename: 'C:\\Users\\syeds\\OneDrive\\Desktop\\Node Practice\\app.js',
//     loaded: false,
//     children: [],
//     paths: ['C:\\Users\\syeds\\OneDrive\\Desktop\\Node Practice\\node_modules',
//     'C:\\Users\\syeds\\OneDrive\\Desktop\\node_modules',
//     'C:\\Users\\syeds\\OneDrive\\node_modules',
//     'C:\\Users\\syeds\\node_modules',
//     'C:\\Users\\node_modules',
//     'C:\\node_modules'
//   ]
// }


// LOADING A MODULE
// We use require function to load a module in nodejs

const logger = require('./logger')
// We can also write logger.js, but node assumes it is a JS file.
// Better to use const or let variables

// console.log(logger);
// { log: [Function: log] }

logger.log('Hello Node');
// And we get the message in the console

console.log(logger.num);
// This will export the number from the node js logger module