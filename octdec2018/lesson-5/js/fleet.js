/* Version 1 of fleet object */
/*
var fleet = [

    { "mf": "Ford", "models": []},
    { "mf": "Fiat", "models": []},
    { "mf": "Nissan", "models": []}

]
*/


var fleet = [

    { "mf": "Ford", "models": [
            { 
                "name": "Model 1",  "colour": "Red1", "engine": "2.0", "mf": "Ford" 
            },
            { 
                "name": "Model 1.1",  "colour": "Red1", "engine": "2.0", "mf": "Ford" 
            },

            { 
                "name": "Model 1.2",  "colour": "Red1", "engine": "2.0", "mf": "Ford" 
            },

            { 
                "name": "Model 1.3",  "colour": "Red1", "engine": "2.0", "mf": "Ford" 
            },





        ]},
    { "mf": "Fiat", "models": [
        { 
            "name": "Model 2",  "colour": "Red2", "engine": "2.0", "mf": "Ford" 
        }
    ]},


    { "mf": "Nissan", "models": [
        { 
            "name": "Model 3",  "colour": "Red3", "engine": "2.0", "mf": "Ford" 
        }
    ]},

]
/*
Challenge: When select box changes, load the corresponding model for
the chosen manufacturer into the table as before
*/

function renderPage() {
    renderList();
}
function renderList() {
    //Get the element on the page that you want to interact with
    var carSelectObject = document.getElementById("carListing");

    //Set length to 0 to truncate or remove all options in the select
    carSelectObject.length = 0;

    //Iterate through the fleet and create options
    for (var i = 0; i < fleet.length; i++) {
        /* Add a value */
        var optionText = fleet[i].mf;
        var optionID = i
        // new Option creates an Option object and requires the text and value
        // You then push it onto the array (which has been emptied)
        carSelectObject[i] = new Option(optionText, optionID);
    }
}

function renderModel(carId) {
    //Get the element on the page that you want to interact with
    var modelSelectObject = document.getElementById("carModelListing");

    //Set length to 0 to truncate or remove all options in the select
    modelSelectObject.length = 0;

    //Iterate through the fleet and create options
    for (var i = 0; i < fleet[carId].models.length; i++) {
        /* Add a value */
        var currentModel = fleet[carId].models[i];
        var optionText = currentModel.name;
        var optionID = i
        // new Option creates an Option object and requires the text and value
        // You then push it onto the array (which has been emptied)
        modelSelectObject[i] = new Option(optionText, optionID);
    }
}

function handleCarChoice() {

    //Select Items have options
    var e = document.getElementById("carListing");
    var carId = e.options[e.selectedIndex].value;

    console.log("I am changing selected car with id %d", carId)

    renderModel(carId);

    var currentCar = fleet[carId].models[0];

    console.log(currentCar);

    var mf = document.getElementById("carMf");
    mf.innerHTML = currentCar.mf;

    var colour = document.getElementById("carColour");
    colour.innerHTML = currentCar.colour;

    var engine = document.getElementById("carEngine");
    engine.innerHTML = currentCar.engine;





}



