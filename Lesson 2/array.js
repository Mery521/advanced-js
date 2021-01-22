function maxArrSalaries(x){
    let max = x[0];
        for(i=0; i<x.length; i++){
            if (x[i].salary > max){
                max = x[i].salary;
            }
        }
          return max;
    }
    
    const salaries = []
        Jack:{ salary: 100, unit: "$" },
        Tom: { salary: 250, unit: "$" },
        Rob: { salary: 150, unit: "$" },
        Sem: { salary: 350, unit: "$" },
]
    console.log(maxArrSalaries(salaries));
    