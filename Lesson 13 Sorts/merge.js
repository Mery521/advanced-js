

const mergeSort= (arr) => 
arr.length <= 1
? arr
:merge (
  mergeSort(arr.splice(0, Math.floor(arr.length /2))),
  mergeSort(arr.splice(Math.floor(arr.length /2)))
);



const merge = (left,right) =>{
  let resArr = [], leftIndex = 0, rightIndex = 0;
  while(leftIndex < left.length && rightIndex< right.length){
    left[leftIndex] < right[rightIndex]
    ? resArr.push(left[leftIndex++])
    : resArr.push(right[rightIndex++])
  }
  return [...resArr, ...left.splice(leftIndex), ...right.splice(rightIndex)];
}
