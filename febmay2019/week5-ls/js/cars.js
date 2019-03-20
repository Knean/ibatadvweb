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

    $('#fleet').on("click", '.btnDelete', function () {
        var carId = $(this).data("id");
        console.log(`Deleting car: ${carId}`);  
        renderFleet(deleteFromFleet(carId));
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
    var d = new Date();
    carObject.id = d.getTime();

    localStorage.setItem('make', carObject.make);
    localStorage.setItem('model', carObject.model);
    localStorage.setItem('colour', carObject.colour);
    localStorage.setItem('engine', carObject.engine);

    var fleet = retrieveFleet();
    fleet.push(carObject);

    fleet.sort(compare);
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
    htmlString.push(`<button class='btnDelete' data-id='${carObject.id}'>Delete </button>`);
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
fleet.sort(compare);

return fleet;

}



function compare(carA,carB) {

    let comparison = 0;
    if (carA.engine > carB.engine) {
      comparison = 1;
    } else if (carA.engine < carB.engine) {
      comparison = -1;
    }
    return comparison;


}

function deleteFromFleet(carID) {
    fleet = retrieveFleet();
//delete


    fleet = fleet.filter(car => car.id != carID)

    localStorage.setItem("fleet", JSON.stringify(fleet));

    return fleet;
}