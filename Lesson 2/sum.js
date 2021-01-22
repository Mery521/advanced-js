function sumSalaries(x){
    let sum = 0;
        for(let key in x){
            sum += x[key].salary;
        }
          return sum;
    }
    
    const salaries = {
        Jack:{ salary: 100, unit: "$" },
        Tom: { salary: 250, unit: "$" },
        Rob: { salary: 150, unit: "$" },
        Sem: { salary: 350, unit: "$" },
        }
    console.log(sumSalaries(salaries));