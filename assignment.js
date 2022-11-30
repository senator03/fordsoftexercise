// // 1
// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join("+"));
// console.log("=====================================")

// //4
// var numbers = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// var nums = numbers.filter((even) => even % 2 == 0);
// console.log(nums);;
// console.log("====================================")

// var num = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// let sortedArray = num.sort();
// console.log(sortedArray);
// console.log("=============================")

// //7
// function calcHypotenus(base,  per) { 
//     return Math.sqrt(base*base  + per*per) ; 
// } 
// console.log(calcHypotenus(5, 5))
// //5
//  let animal=['lion', 'gorilla', 'Dog', 'kangaroo', 'cat', 'elephant']
//  function fiveChar(animal) {
//    return animal.filter(function(animal) { 
//   return animal.length <=  5;
//    });
//  }
//  console.log(animal)

 
//  const personList = [
//    {
//     name: "John",
//      occupation: "Data Scientist",
//      age: 34,
//    },
//    {
//      name: "Kola",
//      occupation: "Biodata Scientist",
//      age: 32,
//    },
//    {
//      name: "John",
//      occupation: "Data Analyst",
//      age: 12,
//    },
// ];

// function list(occupation) {
//   return occupation();
// } 
// console.log(occupation);


let arr =[
  {name:"taofeek", phone:0814869958, email:"tao2003@gmail.com", dept:"social science", salary:50000, empdate: new Date("2021-09-2")},
  {name:"kilasho", phone:0802907612, email:"kaywise3@gmail.com", dept:"environmental science", salary:30500, empdate: new Date("2022-06-4")},
  {name:"saheed", phone:09149581623, email:"bolas@gmail.com", dept:"law", salary:4000, empdate: new Date("2020-05-15")},
  {name:"muhammad", phone:08016239910, email:"tao2003@gmail.com", dept:"engineering", salary:41500, empdate: new Date("2021-07-1")},
  {name:"abdullah", phone:08012341079, email:"oxzino@gmail.com", dept:"finance", salary:45000, empdate: new Date("2019-07-21")},
  {name:"jamal", phone:08016239910, email:"tao2003@gmail.com", dept:"accounting", salary:40500, empdate: new Date("2019-01-19")}
];


// arr.push({name:"samad", phone:08019102751, email:"flow2003@gmail.com", dept:"survery", salary:35100, empdate: new Date("2019-04-27")},
// {name:"oni", phone:08019102751, email:"oni03@gmail.com", dept:"survery", salary:35200, empdate: new Date("2019-01-5")},
//  {name:"mumin", phone:08019102751, email:"black003@gmail.com", dept:"arabic", salary:30500, empdate: new Date("2029-04-7")}
// )
// console.log(arr);


let filterArray = arr.filter((employee) =>
    !(employee.email.includes('@') && employee.email.includes('.'))
);

console.log(filterArray);

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


// function addNew(name, phone, email, dept, salary, empdate) {
//   let new_employee = {name: name, phone: phone, email: email, dept: dept, salary: salary, empdate: empdate};
//   arr.push(new_employee)
//   console.log(new_employee);
// }

// addNew('praise',9123848558, 'praise@gmail.com', 'engineering', 100_000,  new Date("2029-04-7"))




// function arr(datefrom, dateto) {
//   let orderdate = arr.sort((datefrom, dateto) => {
//     let datecomresult = new arr(datefrom.empdate) - new arr(dateto.empdate);
//     return datecomresult;
//   });

// }



