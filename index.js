// Your code here
function createEmployeeRecord([firstName,familyName,title,payPerHour]){
  return {
firstName: firstName,
familyName: familyName,
title: title,
payPerHour: payPerHour,
timeInEvents: [],
timeOutEvents: []
  }
}
function createEmployeeRecords(arr){
    let newArr = []
    arr.forEach(x => {
        newArr.push(createEmployeeRecord(x))
    });
    return newArr
}

function createTimeInEvent(employee,date){
let newD = date.split(" ")
let d = newD[0]
let h = parseInt(newD[1])
employee.timeInEvents.push({type:"TimeIn",date:d,
hour:h})
return employee
}
function createTimeOutEvent(employee,date){
  let newD = date.split(" ")
  let d = newD[0]
  let h = parseInt(newD[1])
  employee.timeOutEvents.push({type:"TimeOut",date:d,
  hour:h})
  return employee
}
function hoursWorkedOnDate(employee){

return (employee.timeOutEvents[0].hour - employee.timeInEvents[0].hour)/100
}
function wagesEarnedOnDate(employee){
return hoursWorkedOnDate(employee) * employee.payPerHour
}
function allWagesFor(employee){
  let total = 0
  employee.timeOutEvents.find(O => {
    employee.timeInEvents.find(I =>{
      if(O.date === I.date){
        let newTotal = (O.hour - I.hour)/100 * employee.payPerHour
total += newTotal
      }
    })
  })
  return total
}
function findEmployeeByFirstName(employee,name){
return  employee.find(x => x.firstName === name)
}
function calculatePayroll(arr){
 let s = arr.reduce((acc,cur)=> acc += allWagesFor(cur),0 )
 return s
}
