// Add Part time Employee & Wage
const fullTime = 1;
const emp_rate_per_hour = 20;
const partTime = 2;
const absent = 0;
let empHrs;
function employee (){
let empCheck = Math.floor((Math.random() * 10) % 3);
if (empCheck == fullTime ){
     empHrs = 8;
}
else if (empCheck == partTime ){
    empHrs = 4;
}
else{
    console.log("Employe is absent");
}
let empWage = empHrs * emp_rate_per_hour;
console.log("Daily Employee Wage = " + empWage);
}
employee();
