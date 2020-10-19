//creating date objects

//js takes browsers time zones

const d=new Date()

console.log(d)

//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

const d1 = new Date(2018, 11, 24, 10, 33, 30, 0);

console.log(d1)

const d2=new Date(2018,10)

console.log(d2)

const d3=new Date(2018)

console.log(d3)//date will take from 1970 since treats as milliseconds

//Previous Century
//One and two digit years will be interpreted as 19xx:

console.log(new Date(99,11,24))

console.log(new Date(9,8,30))

//we create new objects with string format

console.log(new Date("October 13, 2014 11:13:00"))

//create date obj with milliseconds

console.log(new Date(0))

console.log(new Date(900000000))

console.log(new Date(-10000000000))

console.log(new Date().toString())

console.log(new Date().toUTCString())

console.log(new Date().toDateString())

console.log(new Date().toISOString())


//date formats

console.log(new Date("2015-03-25"))//y-m-d-iso dates
//short datess
console.log((new Date("03/25/2015")))//m-d-y or m/d/y

//long dates

console.log(new Date('20 jan 2018').toString())

console.log(Date.parse('March 21,2018'))

const date=new Date()
//The getTime() method returns the number of milliseconds since January 1, 1970:
console.log(date.getTime())


//The getFullYear() method returns the year of a date as a four digit number:
console.log(date.getFullYear())

//The getMonth() method returns the month of a date as a number (0-11):

console.log(date.getMonth())

//The getDate() method returns the day of a date as a number (1-31):

console.log(date.getDate())

//The getHours() method returns the hours of a date as a number (0-23):

console.log(date.getHours())

//The getMinutes() method returns the minutes of a date as a number (0-59):
console.log(date.getMinutes())

//The getSeconds() method returns the seconds of a date as a number (0-59):
console.log(date.getSeconds())

//The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
console.log(date.getMilliseconds())

//The getDay() method returns the weekday of a date as a number (0-6):
console.log(date.getDay())

let newDate

newDate=new Date()

newDate.setFullYear(2010)

newDate.setDate(25)

newDate.setMonth(05)

newDate.setHours(20)

newDate.setMinutes(45)

newDate.setSeconds(55)

newDate.setMilliseconds(560)

console.log(newDate)

const res=d>newDate

console.log(res)


