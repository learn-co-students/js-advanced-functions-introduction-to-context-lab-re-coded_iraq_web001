// Your code here
function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(array){
let records = array.map(obj=> createEmployeeRecord(obj))
return records
}

let createTimeInEvent = (employee, dateStamp)=>{
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),date
    })

    return employee
}
let createTimeOutEvent = (employee, dateStamp)=>{
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}
let hoursWorkedOnDate = (employee, dateStamp)=>{
    let inEvent = employee.timeInEvents.find(function(elem){
        return elem.date === dateStamp
    })

    let outEvent = employee.timeOutEvents.find(function(elem){
        return elem.date === dateStamp
    })
    let timeElapsed = outEvent.hour - inEvent.hour;
    return timeElapsed / 100
}
let wagesEarnedOnDate = (employee, dateStamp) => {
  let hours = hoursWorkedOnDate(employee, dateStamp);
  let wages = hours* employee.payPerHour;

  return parseFloat(wages.toString())
};
let allWagesFor =  (employee)=> {
  let matchedDates = employee.timeInEvents.map(function (elem) {
    return elem.date;
  });

  let paid = matchedDates.reduce( (memo, d)=> {
    return memo + wagesEarnedOnDate(employee, d);
  }, 0);

  return paid;
};

let findEmployeeByFirstName =  (records, firstName) =>{
  return records.find(function (rec) {
    return rec.firstName === firstName;
  });
};

let calculatePayroll = (records) => {
  return records.reduce(function (memo, rec) {
    return memo + allWagesFor(rec);
  }, 0);
};
