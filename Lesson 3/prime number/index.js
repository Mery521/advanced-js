function isPrime(num){
    for(let i = 2, max = Math.sqrt(num); i <= max; i++){
            if(num % i === 0){
               return false;
            } 
        }
         return  num > 1;
}
function getPrime(num){
let primes = [];
    for( let i = 2; i < num; i++){
         if(isPrime(i)){
            primes.push(i);                     
        }
    }
    return primes;
}
getPrime(120);
//avelacvum e nor zangvaci mej