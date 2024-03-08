// Date -

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString(), ' - to String')
console.log(myDate.toDateString(), ' - Date String')
console.log(myDate.toISOString(), ' - ISO String')
console.log(myDate.toJSON(), ' - to JSON')
console.log(myDate.toLocaleDateString(), ' - toLocaleDateString')
console.log(myDate.toLocaleString(), ' - toLocaleString')
console.log(myDate.toLocaleTimeString(), ' - toLocaleTimeString')
console.log(typeof myDate, ' - typeof Date')

console.log('------------------------------------------------')

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString(), ' - Created Date')

let myCreatedDateTime = new Date(2023, 0, 23, 5, 0)
console.log(myCreatedDateTime.toLocaleString(), ' - Created Locale String')

let myCreatedDateFormat = new Date('2023-01-14')
console.log(
    myCreatedDateFormat.toLocaleString(),
    ' - Created Locale String Format'
)

let myCreatedDateMonth = new Date('01-14-2023')
console.log(
    myCreatedDateMonth.toLocaleString(),
    ' - Created Locale String Month'
)

console.log('_____________________________________________________')

let myTimeStamp = Date.now()
console.log(myTimeStamp, ' - myTimeStamp')
console.log(myCreatedDateMonth.getTime(), ' - Time Stamp')

console.log(Math.floor(Date.now()/1000), ' - Converted to Seconds from MilliSeconds')

console.log('==================================================================')

let newDate = new Date()
console.log(newDate , 'newData')
console.log(newDate.getDate() , ' - Date')
console.log(newDate.getDay(), ' - Day')
console.log(newDate.getMonth() , ' - Month')    // Starts from 0 like Index

console.log(newDate.toLocaleString('default', {weekday : 'short'}) , ' - Week Day')
