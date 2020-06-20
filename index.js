function createEmployeeRecord(arr){
    return{
      firstName:arr[0],
      familyName:arr[1],
      title:arr[2],
      payPerHour:arr[3],
      timeInEvents: [],
      timeOutEvents:[]
    }
  }
  function createEmployeeRecord(arr){
    return{
      firstName:arr[0],
      familyName:arr[1],
      title:arr[2],
      payPerHour:arr[3],
      timeInEvents: [],
      timeOutEvents:[]
    }
  }
  function createEmployeeRecords(arr){
let newArr = arr.map(x=> createEmployeeRecord(x))
return newArr
  }
function createTimeInEvent(employee,time){
  let dateStamp = time.split(" ")
  let date = dateStamp[0]
  let hour = parseInt(dateStamp[1])
  employee.timeInEvents.push({
    type:"TimeIn",
    hour:hour,
    date:date
  })
  return employee
}
function createTimeOutEvent(employee,time){
  let dateStamp = time.split(" ")
  let date = dateStamp[0]
  let hour = parseInt(dateStamp[1])
  employee.timeOutEvents.push({
    type:"TimeOut",
    hour:hour,
    date:date
  })
  return employee
}
function hoursWorkedOnDate(employee,time){
  let x = employee.timeInEvents.find(a=> a.date === time)
  let y = employee.timeOutEvents.find(a=>a.date === time)
  return (y.hour - x.hour)/100
}
function wagesEarnedOnDate(employee,time){
  return hoursWorkedOnDate(employee,time) * employee.payPerHour
}
function allWagesFor(employee){
let dates = employee.timeInEvents.map(x=>x.date)
let eachWage = dates.map(x=> wagesEarnedOnDate(employee,x))
let all = eachWage.reduce((acc,cur)=>acc+=cur,0)
return all
}
function findEmployeeByFirstName(employee,name){
  return employee.find(x=>x.firstName === name)
}
function calculatePayroll(employees){
return  employees.reduce((acc,cur)=> acc + allWagesFor(cur),0)
}
