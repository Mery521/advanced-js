let square = function(arr){
    let new_arr = [];
    for(let i = 0; i < arr.length; i++){
        new_arr.push(arr[i] * arr[i]);
    }
    return new_arr ;
} 
let  array = [1,2,3,4];

function map(x,y){
    return x(y);
}
console.log(map(square, array)); 
