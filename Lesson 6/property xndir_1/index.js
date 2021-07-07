const count = obj => {
const q = 0;
    
    for(let key in obj){
        q++;
    }
    return q;
}
const a = {a:1, b:2, c:()=>{}};
console.log(count(a));

const b = function() {};
console.log(count(b));

const c = [1, 2, 3];
console.log(count(c));

const d = [];
d[100] = 1;
console.log(count(d)); 
const e = {a:1, b:2, c:()=>{}};
console.log(count(e));
