function sumArrSalaries(arr){

    let sum = 0;
        for(i = 0; i < arr.length; i++){
             sum += arr[i].salary;
        }
          return sum;
  }

const salaries = [
     {name: 'Jack', salary: 100, unit: "$" },
     {name:  'Tom', salary: 250, unit: "$" },
     {name:  'Rob',  salary: 150, unit: "$" },
     {name:  'Sem',  salary: 350, unit: "$" },
];

let new_sum = sumArrSalaries(salaries);
console.log(new_sum);
    