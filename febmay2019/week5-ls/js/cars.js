$(function () {

    console.log("Loading jquery");

    initButtons();



})
function initButtons() {
    $('#btnSaveCar').on("click", function () {
        renderFleet( saveCar() );
    })

    $('#btnClearScreen').on("click", function () {
       $('#fleet').empty();
    })


    $('#btnRetrieveFleet').on("click", function () {
       
       renderFleet( retrieveFleet() );
     })

}

function saveCar() {
    console.log("Saving car")

    carObject = {};
    carObject.make = $('#tbMake').val();
    carObject.model = $('#tbModel').val();
    carObject.colour = $('#tbColour').val();
    carObject.engine = $('#tbEngine').val();

    localStorage.setItem('make', carObject.make);
    localStorage.setItem('model', carObject.model);
    localStorage.setItem('colour', carObject.colour);
    localStorage.setItem('engine', carObject.engine);

    var fleet = retrieveFleet();
    fleet.push(carObject);
    localStorage.setItem('fleet', JSON.stringify(fleet));

   return fleet;
}

function renderFleet(fleet) {

    $('#fleet').empty();

    var htmlString = [];
    for(var i = 0; i < fleet.length; i++) {
        carObject = fleet[i];
    htmlString.push("<tr>");

    htmlString.push("<td>");
    htmlString.push(carObject.make);
    htmlString.push("</td>");

    htmlString.push("<td>");
    htmlString.push(carObject.model);
    htmlString.push("</td>");

    htmlString.push("<td>");
    htmlString.push(carObject.colour);
    htmlString.push("</td>");

    htmlString.push("<td>");
    htmlString.push(carObject.engine);
    htmlString.push("</td>");

    htmlString.push("<td>");
    htmlString.push("<button>Delete</button>");
    htmlString.push("</td>");

    htmlString.push("</tr>");

    }

    $('#fleet').append(htmlString.join(" "))



}

function retrieveFleet() {

fleetData  = localStorage.getItem('fleet');
fleet = [];

if ( fleetData === null) {

    fleet = [];
} else {

    fleet = JSON.parse(fleetData);
}

return fleet;

}