let sum = function (a, b){
    return a + b;
}
function square(sum){
    return sum * sum;
}

function f_map(sqr,add){

    function e(){
     console.log(sqr(add)+`=`+ add +`^2`);
     }
     return e;
}
 f_map(square, sum(4,5)) (); 
