var myPastDate = new Date(1545, 11, 2, 10, 30, 12); //YearMonthDayHoursMinuteSecond
var myFutureDate = new Date(2515, 0, 31); //YearMonthDay

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1985, 0, 15, 11, 15, 25);

console.log('Month: '+ birthday.getMonth());
console.log('Year: '+ birthday.getFullYear());
console.log('Date: '+birthday.getDate());
console.log('Day: '+birthday.getDay());
console.log('Hours: '+birthday.getHours());
console.log('time: '+birthday.getTime());//return as Mele seconds