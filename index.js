// Your code here
let keyArr= ['firstName','familyName','title','payPerHour', 'timeInEvents', 'timeOutEvents'];
function createEmployeeRecord(array){
  let i=0;
  let arrayObject =array.reduce((accumulator, currentValue) => {
    accumulator[keyArr[i]] = currentValue;
    i++;
    return accumulator;
  },{})
  arrayObject[keyArr[4]]=[];
  arrayObject[keyArr[5]]=[];
  return arrayObject;
}
function createEmployeeRecords(array){
let records = array.map(object=> createEmployeeRecord(object))
return records
}
function createTimeInEvent(object,dateStamp){
  let [date, hour] = dateStamp.split(' ')
  object.timeInEvents.push({
   type: "TimeIn",
   hour: parseInt(hour, 10),date
  })
  return object
}
function createTimeOutEvent(object,dateStamp){
  let [date, hour] = dateStamp.split(' ')
  object.timeOutEvents.push({
   type: "TimeOut",
   hour: parseInt(hour, 10),date
  })
  return object;
}

function hoursWorkedOnDate(employee,date){
  let timeIn = employee.timeInEvents.find(el => el.date === date).hour
  let timeOut = employee.timeOutEvents.find(el => el.date === date).hour
  let time= (timeOut - timeIn) / 100
return time;
  
}

function wagesEarnedOnDate(employee,date){
  return hoursWorkedOnDate(employee,date)*employee.payPerHour;
}

function allWagesFor(employee){
  let arrayDates = employee.timeInEvents.map(element => element.date)
  return arrayDates.reduce((accumulator, currentValue) => {
    accumulator += wagesEarnedOnDate(employee, currentValue)
    return accumulator
  }, 0);}
  
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(el => el.firstName === firstName)
}

function calculatePayroll(employeeRecordsArray) {
  return employeeRecordsArray.reduce((accumulator, currentValue) => {
    accumulator += allWagesFor(currentValue)
    return accumulator
  }, 0)
}
