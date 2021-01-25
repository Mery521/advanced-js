function maxSalaries(x){
    let max = 0;
        for(let key in x){
            if (x[key].salary > max){
                max = x[key].salary;
            }
        }
          return max;
    }
    
    const salaries = {
        Jack:{ salary: 100, unit: "$" },
        Tom: { salary: 250, unit: "$" },
        Rob: { salary: 150, unit: "$" },
        Sem: { salary: 350, unit: "$" },
        }
    console.log(maxSalaries(salaries));
    