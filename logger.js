var url = 'http://mylogger.io/log';

function log(message) {
    //Send HTTP request
    console.log(message);
}

let num = 24;

module.exports.log = log;
// module.exports = log 
//We can do like this as well and now it is a function not an object and can be accessed directly.
// logger('Hello Node'); --> This will work the same


module.exports.num = num;
// module.exports.endPoint = url; {let's keep it private}

console.log(__filename);
console.log(__dirname);