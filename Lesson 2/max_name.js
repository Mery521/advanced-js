
    function maxNameSalaries(x){
        let max = 0;
        let maxName="";
            for(let key in x){
                if (x[key].salary > max ){
                    max = x[key].salary;  
                    maxName = key;
                }
            }
              return [maxName, max];
        }
        
        const salaries = {
            Jack:{ salary: 100, unit: "$" },
            Tom: { salary: 250, unit: "$" },
            Rob: { salary: 150, unit: "$" },
            Sem: { salary: 350, unit: "$" },
            }
        let new_max = maxNameSalaries(salaries);
        console.log(new_max[0]);
        console.log(new_max[1]);