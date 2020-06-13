// Your code here
function createEmployeeRecord(empInfo) {
  return {
    firstName: empInfo[0],
    familyName: empInfo[1],
    title: empInfo[2],
    payPerHour: empInfo[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}
let createEmployeeRecords  = array =>
   array.map(createEmployeeRecord);

let createTimeInEvent= (object,dateStamp)=>{
  let dates = dateStamp.split(' ');
  object.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(dates[1]),
    date:dates[0]
  })
  return object;
}

let createTimeOutEvent= (object,dateStamp)=>{
  let dates = dateStamp.split(' ');
  object.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(dates[1]),
    date:dates[0]
  })
  return object;
}

let hoursWorkedOnDate = (empObj, dateForm)=>{
   let timeIn = empObj.timeInEvents.find(x => x.date === dateForm)
    let timeOut = empObj.timeOutEvents.find(x => x.date === dateForm)
    let hours = (timeOut.hour - timeIn.hour) / 100
    return hours
}


function wagesEarnedOnDate (empObj, dateForm){
    let hours = hoursWorkedOnDate (empObj, dateForm)
    return hours * empObj.payPerHour
}

function allWagesFor (empObj){
    return empObj.timeInEvents.reduce((a,b)=> a + wagesEarnedOnDate(empObj, b.date)
    ,0)
}


let findEmployeeByFirstName = (scrArray,firstName)=>{
   return scrArray.find(function(object) {return object.firstName === firstName})
}

let calculatePayroll = function(empArray){
    return empArray.reduce(function(acc, val){
        return acc + allWagesFor(val)
    }, 0)
}