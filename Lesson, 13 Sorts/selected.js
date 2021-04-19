
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        const minValueIndex = minIndex(arr, i)
        swap(arr, i, minValueIndex);
    }
    return arr
}
function minIndex(arr, startIndex){
    //    or this variant
    //    let minValue = arr[startIndex];
    
    //    for(let i = startIndex + 1; i < arr.length; i++){
    //        if(arr[i] < minValue){
    //            minValue = arr[i];
    //        }
    //    }

    //    or this variant
    const minValue = Math.min(...arr.slice(startIndex))
    return arr.indexOf(minValue, startIndex)
}

//2 varient
function selectionSort(arr){
    for(let i = 0; i< arr.length; i++){
        let min = i;
        for(let j = i+1;j< arr.length; j++){
            if(arr[min]> arr[j]){
                min = j;
            }
        }
        if(i != min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return temp;

}
