function arrayInobject(x){
 let s = 0;
 let array= [];
    for(let key in x){
        s = key + ' ' + x[key].salary;
        array.push(s);
    }
    return array;
}
  const salaries = {
        Jack:{ salary: 100, unit: "$" },
        Tom: { salary: 250, unit: "$" },
        Rob: { salary: 150, unit: "$" },
        Sem: { salary: 350, unit: "$" },
        }
  let new_array= arrayInobject(salaries)
  console.log(new_array);