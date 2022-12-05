//given an array of employee he has name,phone, email,departemnt,salary,employement date
//write a function that accept employee and add it to the list of the array
let arr =[
  {name:"taofeek", phone:0814869958, email:"tao2003@gmail.com", dept:"social science", salary:50000, empdate: new Date("2021-09-2")},
  {name:"kilasho", phone:0802907612, email:"kaywise3@gmail.com", dept:"environmental science", salary:30500, empdate: new Date("2022-06-4")},
  {name:"saheed", phone:09149581623, email:"bolas@gmail.com", dept:"law", salary:4000, empdate: new Date("2020-05-15")},
  {name:"muhammad", phone:08016239910, email:"tao2003@gmail.com", dept:"engineering", salary:41500, empdate: new Date("2021-07-1")},
  {name:"abdullah", phone:08012341079, email:"oxzino@gmail.com", dept:"finance", salary:45000, empdate: new Date("2019-07-21")},
  {name:"jamal", phone:08016239910, email:"tao2003@gmail.com", dept:"accounting", salary:40500, empdate: new Date("2019-01-19")}
];
 arr.push({name:"samad", phone:08019102751, email:"flow2003@gmail.com", dept:"survery", salary:35100, empdate: new Date("2019-04-27")},
 {name:"oni", phone:08019102751, email:"oni03@gmail.com", dept:"survery", salary:35200, empdate: new Date("2019-01-5")},
  {name:"mumin", phone:08019102751, email:"black003@gmail.com", dept:"arabic", salary:30500, empdate: new Date("2029-04-7")}
 )
 console.log(arr);

 //write a function that return employee with the lowset and the lowest and highest paid
function minMaxPaid(employeeArray) {
  return {
    lowestPaid: employeeArray.filter(
      (employee) =>
        employee.salary ===
        Math.min(...employeeArray.map((employee) => employee.salary))
    ),
    highestPaid: employeeArray.filter(
      (employee) =>
        employee.salary ===
        Math.max(...employeeArray.map((employee) => employee.salary))
    ),
  };
}
console.log(minMaxPaid(arr));

//write a function that return an arrray of employee wuth invalid email address
let filterArray = arr.filter(
  (employee) => !(employee.email.includes("@") && employee.email.includes("."))
);
console.log(filterArray);

