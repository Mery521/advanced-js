const fs = require('fs');
let ws = fs.createWriteStream("lesson5/hello.txt");
ws.write("Hello \n");
ws.write("World  \n");
ws.end("The end");

let rs = fs.createReadStream("lesson5/hello.txt", "utf8");
rs.on("data", function(chunck){
    console.log(chunck)
});
