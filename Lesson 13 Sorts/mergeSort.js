function merge(left, right){
    let resultArr = [], leftIndex = 0, rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){ 
        if(left[leftIndex] < right[rightIndex]){
            resultArr.push(left[leftIndex]);
            leftIndex ++;
        }
        else{
            resultArr.push(right[rightIndex]);
            rightIndex ++;
        }
    }
    return resultArr 
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function mergeSort(unsortedArr){
    if(unsortedArr <= 1){
        return unsortedArr;
    }
    const middle = Math.floor(unsortedArr.length / 2);
    const left = unsortedArr.slice(0, middle);
    const right = unsortedArr.slice(middle);

    return merge(
        mergeSort(left), mergeSort(right)
    );
}

//minjev merge linely katarvum e recrsia u mergsort 