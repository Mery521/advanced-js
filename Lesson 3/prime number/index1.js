function isPrime(num){
let count = 0;
    
    for(let i = 1; i <= num; i++){
        if(num % i !== 0){
        var pr_number = true;
        }

        for( let j = 2; j <= Math.sqrt(i); j++ ){
            if (i % j === 0){
                pr_number = false;
                break;
            }
        }
        if( pr_number === true){
            count ++;
        }
    }
        
    return count;
}
isPrime(100);

