console.log("Date and Time Demos")
var now = new Date();
console.log( "time is %s", now )

var yy = now.getFullYear();
console.log("Year is %s", yy)

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var mt = now.getMonth();
console.log("Month is %d [%s]", mt, months[mt])

var days = ["Sun", "Mon","Tue","Wed","Wed","Thu","Fri","Sat"]
var dy = now.getDay();
console.log("Day is %d [%s]", dy , days[dy])