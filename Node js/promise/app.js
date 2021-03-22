var file  = require("./fileDirectory");
var x = new  file();

x.organizeDirectory("catalog")
.then(function(r){
    console.log("Հրամանը կատարված է։");
    console.log(r);
}).catch(function(x){
    console.log(x)
})