//wage of a month
const fullTime = 1;
const partTime = 2;
const absent = 0;
const emp_rate_per_hour = 20;
const num_of_working_days = 20;
let empHrs = 0;
let totalEmpWage = 0;
let empWage;
function employee (){
    for(let day = 0; day < num_of_working_days ; day++){
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
empWage = empHrs * emp_rate_per_hour;
console.log(empWage);
totalEmpWage += empWage;
}
console.log(totalEmpWage);
}
employee();
