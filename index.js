// Your code here
const employee =["Gray", "Worm","Security",1]
function createEmployeeRecord (employee){
return { firstName :employee[0],
          familyName:employee [1],
          title :employee[2],
          payPerHour :employee[3],
          timeInEvents:[],
          timeOutEvents:[]
}
}

let twoRows = [
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
      ]

function createEmployeeRecords(twoRows){
  return  twoRows.map(row => createEmployeeRecord(row))
  }

function createTimeInEvent(employee ,Date){
  let [date , hour]= Date.split(' ')
  
  employee.timeInEvents.push({
    type:"TimeIn",
    date:date,
    hour:parseInt(hour,10)
    
  })
  return employee
}


function createTimeOutEvent(employee ,Date){
  let [date , hour]= Date.split(' ')
  
  employee.timeOutEvents.push({
    type:"TimeOut",
    date:date,
    hour:parseInt(hour,10)
    
  })
  return employee
}


function hoursWorkedOnDate(employee,reqDate){
  let timeIn = employee.timeInEvents.find(event=>event.date===reqDate)
 let timeOut = employee.timeOutEvents.find(event=>event.date===reqDate)
 
 return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(employee,reqDate){
  return hoursWorkedOnDate(employee,reqDate)*employee.payPerHour
}

function allWagesFor(employee){
  let days = employee.timeInEvents.map(event=>event.date)
  let wages = days.reduce((accum,value)=> accum + wagesEarnedOnDate(employee,value),0)
  return wages
}


function findEmployeeByFirstName(empArr,firstName){
 return  empArr.find(emp=>emp.firstName === firstName)
  
}

function calculatePayroll(employee){
 return  employee.reduce((accum,emp)=>accum + allWagesFor(emp),0)
  
}



