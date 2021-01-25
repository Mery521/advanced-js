function worker (x){
 let max = 0;
 let value = 0;
    for(let key in x){
        if (x[key].unit == "$"){
            value = x[key].salary * 520 + "֏"; 
            console.log(value);
        }
       else if (x[key].unit == "₽" ){ 
            console.log(key);
            value = x[key].salary * 8 + "֏";
            console.log(value);
        }  
        else value = x[key].salary + "֏";
        
        if(x[key].salary > max){
         max = 'maxNumber:'+ ' ' + x[key].salary;    
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
