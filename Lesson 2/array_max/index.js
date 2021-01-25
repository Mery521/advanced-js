function maxArrSalaries(arr){
    let max = arr[0].salary;
        for(i = 0; i < arr.length; i++){
            if (arr[i].salary > max){
               console.log(i);
               console.log(arr);
               console.log(arr[i]);
                max = arr[i].salary;
            }
        }
         return max;
  }

const salaries = [
     {name: 'Jack', salary: 100, unit: "$" },
     {name:  'Tom', salary: 250, unit: "$" },
     {name:  'Rob',  salary: 150, unit: "$" },
     {name:  'Sem',  salary: 350, unit: "$" },
];

    let new_max = maxArrSalaries(salaries);
    console.log(new_max);
    