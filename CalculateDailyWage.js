//solving using case statement
const fullTime = 1;
const emp_rate_per_hour = 20;
const partTime = 2;
const absent = 0;
let empHrs;
function employee (){
let empCheck = Math.floor((Math.random() * 10) % 3);
switch ( empCheck ){
    case fullTime:
        empHrs = 8;
        break;
    case partTime:
        empHrs = 4;
        break;
    default:
        empHrs = 0;
}
let empWage = empHrs * emp_rate_per_hour;
console.log("Daily Employee Wage = " + empWage);
}
employee();


