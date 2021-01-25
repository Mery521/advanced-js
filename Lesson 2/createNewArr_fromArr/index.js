function createNewArr(x){
 let s = 0;
 let arrName = x[0].name;
 let arr = [];
    for(let i = 0; i < x.length; i++){
        arrName = x[i].name
        s = x[i].name +" " + x[i].salary;
        arr.push(s);
    }
    return arr;
}

const salaries = [
    {name: 'Jack', salary: 100, unit: "$" },
    {name:  'Tom', salary: 250, unit: "$" },
    {name:  'Rob',  salary: 150, unit: "$" },
    {name:  'Sem',  salary: 350, unit: "$" },
];
let new_object=createNewArr(salaries)
console.log(new_object);