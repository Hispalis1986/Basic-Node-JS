// Opcion 1
const newHello = require('./required.js');
newHello.sayHello()

// Opcion 2
const {
    sayHello
} = require('./required.js');
sayHello();

const fs = require('fs');
require('colors');

myfiles = fs.readdirSync('.');
myfiles.forEach(element => {
    console.log(element.green.bold)
});

if (fs.existsSync('/swapfile')) {
    console.log('SWAPPED'.green);

} else {
    console.log('UNSWAPPED'.red);
}
console.log(fs.readdirSync('c:\\windows'));

const cp = require('child_process');
result = cp.execSync('echo Hi', {
    encoding: 'utf-8'
});
console.log(result);

result = cp.execSync('type index.js', {
    encoding: 'utf-8'
});
console.log(result);