function bubbleSort(arr){
    for(let i = 0; i <arr.length -1; i++){
        isSorted = true;
        for(let j = 0; j< arr.length -i -1; j++){
            if(arr[j]> arr[j+1]){
                isSorted = false;
                swap(arr, j, j+1);
            }
        }
        if(isSorted) return arr
    }
    return arr;
}
// function swap(arr, i, j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
