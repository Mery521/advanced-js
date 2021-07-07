function add(a,b){
    return a + b;
}
function multi(a,b,c){
    return a * b * c;
}

function partial(fn, param1){
    return function(...args){ // mnacacarg add um 5 in gumarvac 2-y
        return fn(param1, ...args) //fix arg or - add 5 -y
    }
}

const add5 = partial(add,5);
console.log(add5(2)); //7
const multi2 = partial(multi,2);
//fixesinq 1 parametry
console.log(multi2(4,5))// fixsvac 2 * 4 * 5
