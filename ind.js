
 function getgrade(score){

  if (score >= 70) {
    console.log("A");
  } else if (score < 70 && score >= 60) {
    console.log("B");
  }
    else if (score < 60 && score >= 50) {
      console.log("C");
    } 
  else if (score < 50 && score >= 40) {
     console.log("D");
   }
  else if (score < 40) {
     console.log("F");
  }

 }

 getgrade(100);
 getgrade(69);
 getgrade(59);
 getgrade(49);
 getgrade(39);



let studentinfo = [
{name:"derock", subject:"government", matricnum:"1030CE", testscore:25, examscore:60,},
{name:"muhmin", subject:"irk", matricnum:"3010TC", testscore:20, examscore:56,},
{name:"hokage", subject:"chemistry", matricnum:"5630AZ", testscore:23, examscore:45,},
{name:"oxzino", subject:"commerce", matricnum:"1030RE", testscore:19, examscore:50,},
{name:"bolas", subject:"literature", matricnum:"4700IP", testscore:26, examscore:50,},
{name:"cty", subject:"account", matricnum:"5671EB", testscore:27, examscore:40,},
{name:"young fx", subject:"geography", matricnum:"5671EB", testscore:25, examscore:60},
{name:"slykis", subject:"account", matricnum:"0012TP", testscore:28, examscore:47,},
{name:"kaywise", subject:"physics", matricnum:"7021BZ", testscore:24, examscore:48,},
{name:"aliiy", subject:"yoruba", matricnum:"1001EB", testscore:21, examscore:60,},
]

function array(){
  list = [studentinfo]
console.log (list)}

array()

function ismatnum(matricnum ) {
  return matricnum.matricnum === "5671EB";
}
console.log(studentinfo.find(ismatnum));








