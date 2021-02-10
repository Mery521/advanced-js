let sum = function (a, b){
    return a + b;
}
let  square = function(sum){
    return sum * sum;
}

function f_map(sqr,add){

   let squareAdd  = function(){
     console.log(sqr(add)+`=`+ add +`^2`);
     }
     return squareAdd;
}
 f_map(square, sum(4,5)) (); 
