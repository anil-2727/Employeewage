const fullTime = 1;
const partTime = 2;
const absent = 0;
const emp_rate_per_hour = 20;
const num_of_working_days = 20;
const max_hrs_in_month = 100;
let empHrs = 0;
let totalEmpWage;
let empWage;
let totalWorkingDays = 0;
let totalEmpHrs = 0;
function employee (){
while ( totalEmpHrs < max_hrs_in_month && totalWorkingDays <= num_of_working_days ){
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
totalEmpHrs +=  empHrs;
console.log(totalEmpHrs);
}
totalEmpWage = totalEmpHrs * emp_rate_per_hour;
console.log("total wage =" + totalEmpWage );
}
employee();
