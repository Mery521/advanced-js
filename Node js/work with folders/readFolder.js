const fs = require('fs');

let files;
try{
    files = fs.readdirSync(__dirname + '../../');
} catch(err) {
    console.error(err);
}
console.log(files);