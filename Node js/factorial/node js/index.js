// server http
const http = require('http');
http.createServer(function(req,res){
    res.end("text");
}).listen(3000, '127.0.0.1', function(){
    console.log("server is listening");
});
//os
//  const os =  require('os');
//  const greeting = require('./greeting')
//  let userName = os.userInfo().username;
//  console.log(userName);

//  //module.exports user.js ->
// function User(name, age){
//      this.name = name;
//      this.age = age;
//      this.info = function()  {
//         console.log(`it is  ${this.name} and ${this.age}`);
//      } 
//  } 
// User.prototype.sayHi = function(){
//         console.log(`hi ${this.age}`);
// }
// module.exports = User;

// //index.js->
// const User = require('./user.js');
//  let x = new User('Ann', 15);
//  x.sayHi();

//  //async
//  function displaySync(data){
//      console.log(data);
//  }
//  console.log('text1'); //1
//  displaySync('sunc text');//2

//  //
//  function displaySync(callback){ callback() }
//  console.log('text1'); //1

//  setTimeout(() => {
//      console.log('after 500');//3
//  }, 500);

// displaySync(function(){ console.log('text2')} ); //2

//  //file
//  let fileCont = fs.readFileSync('hello.txt'); //sync
//  fs.readFile('hello.txt', function(err, data){}); //async

//  const fs = require('fs');//2
//   fs.readFile('html.txt', function(err, data){
//       console.log('text async');
//       if(err) throw new error;
//       console.log(data);
//   });
//   fs.readFileSync('html.txt');//1
//  //events-emit
//  const Emitter = require('events');
//  const emitter = new Emitter();

//  const eventName = 'Guest';
//  emitter.on(eventName, function(){
//      console.log(data);
//  });
// emitter.emit(eventName,'hi');
// //jarangumy eventi

// cons util = require('util');
// const EventEmitter = require('events');
// const { utimes } = require('node:fs');

// function User(){

// }
// util.inherits(User, EventEmitter); //.....

//  //pipe 
//  const fs = require('fs');
//  let readableStream = fs.createReadStream('hello.txt');
//  let writeableStream = fs.createWriteStream('hello.txt');
//  readableStream.on(function(chunk){
//      writeableStream(chunk)
//  }); //chun dzevov
//  const fs = require('fs');
//  let readableStream = fs.createReadStream('hello.txt');
//  let writeableStream = fs.createWriteStream('hello.txt');
//  readableStream.pipe(writeableStream);
 
 

//  //server request, response

//  const http = require('http');
//  http.createServer(function(response, request){
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
//     if(request.url === '/'){
//         response.write('<h1> Text </h1>')
//     }
//     response.end()
//  }).listen(3000);

//  //express
//  const express = require('express');

//  const app = express();
//  app.get('/', function(request, response){
//      response.send('<h1> Text </h1>');
//  });
//  app.listen(3000);
//  //midlever
//  const express = require('express');
// const app = express();

// app.use(function(request,response, next){
//     console.log('text');
//     next();
// });
// app.get("/", function(request, response){
//     console.log("Route /");
//     response.send("Hello");
// });
// app.listen(3000);

// //send
// const express = require("express");
// const app = express();
 
// app.use("/home/foo/bar",function (request, response) {
//   response.sendStatus(404)
// });
 
// app.listen(3000);
// //static
// const express = require("express");
// const app = express();
// app.use(express.static(__dirname + '/public'));
// app.use('/about', function(req,res){
//     res.send('<h1><h1/>');
// });
// app.listen(3000);
// //redirect
// const express = require("express");
// const app = express();
// app.use('/home', function(req,res){
//     res.redirect('about');
// });
// //post
// app.post("/register", urlencodedParser, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// });