
function findDuplicates(arr){
let sortArr = arr.sort();
let result = [];
    for(let i = 0; i < sortArr.length; i++){
        for(let j = 0 ; j < i; j++){
            if(sortArr[i] == sortArr[j]){
                result.push(sortArr[i]);
            }
        }
    }
    return result;
}
let duplicatedArray = [2, 3, 4, 5, 6, 4, 7, 4];
console.log(findDuplicates(duplicatedArray));


