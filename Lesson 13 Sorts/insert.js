function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let el = arr[i];
        for(let j = 0; j < i; j++){
            if(arr[j] > el){
                for(let l = i; l > j; l--){
                    arr[l] = arr[l - 1];
                }
                arr[j] = el;
                break;
            }
        }
    }
    return arr;
}
function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let el = i;
        for(let j = 0; j< i; j++){
            if(arr[j]> el){
                for(let l = i;l> j; l--){
                    arr[i] = arr[l-1];
                }
                arr[j] = el;
                break;
            }
        }
    }
    return arr;
}