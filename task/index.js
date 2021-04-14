
let arr = [];
for(i = 0; i <= 79; i++){
    if(i % 2 === 0){
        arr.push(i);
    }
}
console.log(arr)

function sumNumbers(str){
let sum = 0;
    for(let i = 0; i< str.length; i++){
        if(!isNaN(Number(str[i]))){
           sum += Number(str[i]);
        }
    }
    return sum;
}
console.log(sumNumbers('FwtY45KHL120mn10p'));

//texapoxel a ov
const p = ' If the dog reacted, was it really lazy?';

console.log(p.replaceAll('a', '*'));
//
for(let i = 0; i < 6; i++){
    for(let j = 1; j <= i; j++){
        document.write('*');
    }
    document.write('<br>');
}