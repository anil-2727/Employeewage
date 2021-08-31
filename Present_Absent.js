//Check Employee is Present or Absent
const fullTime = 1;
const absent = 0;
let empCheck = Math.floor((Math.random() * 10) % 2);
if (empCheck == fullTime ){
    console.log("Employe is present");
}
else{
    console.log("Employe is absent");
}