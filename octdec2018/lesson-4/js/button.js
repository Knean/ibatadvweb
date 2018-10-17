function loadDate() {

    var e = document.getElementById("messagePanel");

    var now = new Date();

    var yy = now.getFullYear();

    var timeStamp = Date.now();

    e.innerHTML = "<p>The year is " + yy + " [ " + timeStamp + " ] </p>"

    
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var mt = now.getMonth();
    console.log("Month is %d [%s]", mt, months[mt])

    //Notice the += which means concatentate to previous content
    e.innerHTML += "<p>The month # is " + mt + " [ " + months[mt] + " ] </p>"

}