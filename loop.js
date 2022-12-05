let studentDetails = [
    {name: "Olayemi", testScore: 20, examScore: 70, Subject: "Mathematics",    matricNumber: 1012567},
    {name: "Kilasho", testScore: 30, examScore: 20, Subject: "Physics",        matricNumber: 1013456},
    {name: "Adeyeri", testScore: 25, examScore: 40, Subject: "Economics",      matricNumber: 1015678},
    {name: "Alliy", testScore: 15, examScore: 10, Subject: "Literature",       matricNumber: 1017890},
    {name: "Olayiwola", testScore: 30, examScore: 6, Subject: "Chemistry",   matricNumber: 1013987},
    {name: "Oni", testScore: 10, examScore: 65, Subject: "Biology",            matricNumber: 1014598},
    {name: "Olowolagba", testScore: 28, examScore: 69, Subject: "Accounting",  matricNumber: 101111},
    {name: "Abdulsamad", testScore: 20, examScore: 70, Subject: "Mathematics", matricNumber: 1012222},
    {name: "Adeshina", testScore: 21, examScore: 71, Subject: "Commerce",      matricNumber: 1013333},
    {name: "Adebakin", testScore: 29, examScore: 0, Subject: "Government",    matricNumber: 1014444},
]

function findStudent(matricNumber){
  
    return  studentDetails.find(student=>student.matricNumber=matricNumber)
  }

function getTotalScore(student){
    const totalScore = student['testScore']+student['examScore'];
    const grade = getTotalGrade(totalScore)

    // The If statement is to print grade that are 'A' only
    if(grade == 'A'){
        console.log("Name: "+ student.name+"  Score: "+totalScore +" Grade: "+ grade);
    }

    // Uncomment to print all record
    // console.log("Name: "+ student.name+"  Score: "+totalScore +" Grade: "+ grade);
    
}
studentDetails.forEach((student) => {
  getTotalScore(student);
});


function getgrade(student){
    totalscore = student['testscore'] + student[examScore];
    grade = getTotalGrade(totalScore)
    if (grade == "A") {
      console.log(
        "Name: " + student.name + "  Score: " + totalScore + " Grade: " + grade
      );
    }
}

function getTotalGrade(Score){
    if(Score>=70){
      return "A";
    }else if(Score<70 && Score >=60){
        return "B"
    }else if(Score<60  && Score>=50){
       return "C"
    }else if(Score<50 && Score>=40){
        return "D"
    }else{
        return "F"
    }
}
//Looping 1
// let currentIndex=0;
// let totalItem = studentDetails.length;
// while(currentIndex<totalItem){
//     getTotalScore(studentDetails[currentIndex])
//     currentIndex++;
// }

// for(let student of studentDetails){
//     getTotalScore(student);
// }



// let startingIndex=0;
// let endIndex=10;
// while(startingIndex<=endIndex){
//     console.log(startingIndex);
//     startingIndex++;
// }
// console.log(studentDetails[0])



// let startingIndex=0;
// let endIndex=studentDetails.length;
// while(startingIndex<=endIndex){
//     console.log(studentDetails[startingIndex]);
//     startingIndex++;
//     console.log("#######################################################################")
// }


for (let i = 0; i < 10; i++) {
  if (i == 2 || i == 5) {
    continue;
  }
  console.log(i)
}

// function addNew(name, phone, email, dept, salary, empdate) {
//   let new_employee = {name: name, phone: phone, email: email, dept: dept, salary: salary, empdate: empdate};
//   arr.push(new_employee)
//   console.log(new_employee);
// }

// addNew('praise',9123848558, 'praise@gmail.com', 'engineering', 100_000,  new Date("2029-04-7"))


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

