const fs = require('fs');

fs.mkdirSync('myPath1');
fs.mkdir('myPath5', (err)=>{

    if(err) throw new Error;
    console.log("Create new folder")
    var text ='text..';
    fs.writeFile('./myPath5/text.txt', text, (err)=>{

        if(err) throw new Error;
        console.log("The file has been saved successfully.")
    });

});