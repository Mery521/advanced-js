function factorial(x) {
    if (x == 1)  return 1;
    else{
        return x * factorial(x - 1);
    }
    
}
  console.log( factorial(5) ); //120

  function factorial(n) {
   let s = 1;
   for(let i = 2; i <= n; i++){
   s *= i;
   }
   return s;
}
console.log( factorial(5) ); //120

const http = require('http');
http.createServer(function (req,res){
    Response.end('hello')
}).listen(3000);

