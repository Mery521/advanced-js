
// function pluck(array,key){ //tarberak 1
// let arr = []; 
//     for(let elm of array){
//      arr.push(elm[key]);
//     }
//     return arr;
// }
// const char = [
//     {'name': 'bb', 'age':36},
//     {'name': 'bbb', 'age': 46}
// ]
// console.log(pluck(char,'name'));

function pluck(arr,key){
    let new_arr = [];
        for(let i = 0; i< arr.length; i++){
            new_arr.push(arr[i][key]);
        }
        return new_arr;
    }
    const char = [
        {'name': 'John', 'age':36},
        {'name': 'Tom', 'age':46}
    ]
    console.log(pluck(char,'name'));
    console.log(pluck(char,'age'));