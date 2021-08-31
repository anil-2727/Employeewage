//To check daily wage of employee
const fullTime = 1;
const emp_rate_per_hour = 20;
const absent = 0;
let empCheck = Math.floor((Math.random() * 10) % 2);
if (empCheck == fullTime ){
    let empHrs = 8;
    let empWage = empHrs * emp_rate_per_hour;
    console.log("Daily Employee Wage = " + empWage);
}
else{
    console.log("Employe is absent");
}