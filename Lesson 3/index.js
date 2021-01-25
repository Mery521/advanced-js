function worker (x){
//  let max = Object.entries(x);
let max =0;
 let value = 0;
    for(let key in x){

        if(x[key].unit == "֏"){
            value = x[key].salary;
       }
        else if (x[key].unit == "$"){
            value = x[key].salary * 520; 
        }
        else if (x[key].unit == "₽" ){ 
            value = x[key].salary * 8 ;
        }  
        if(value > max){
            max = 'maxNumber:'+ ' ' + value;    
        }
    }
     return max;
}

const salaries = {
    Jack: { salary: 400, unit: "$" },
    Tom: { salary: 25000, unit: "₽" },
    Rob: { salary: 150000, unit: "֏" },
    Sem: { salary: 350, unit: "$" },
  }
console.log(worker(salaries));
