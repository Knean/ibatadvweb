$(function () {

    console.log("Jquery goodness is loaded");
    /*
        localStorage.setItem("car-1", "Ford1");
        localStorage.setItem("car-2", "Ford2");
        localStorage.setItem("car-3", "Ford3");
        localStorage.setItem("car-4", "Ford4");
    */
    loadFlavour(); // Load the flavour saved in previous session

    readCarDetails();

    readCarDetailsFromListing(0);

    //Set up listener to save to local storage on button click 

    $('#btnSave').on('click', function () {
        saveFlavour(); // This function is defined outside the jquery ready function
    })

    $('#btnSaveCar').on('click', function () {
        //saveCar(); // This function is defined outside the jquery ready function
        saveCarDetails()
    })

    $('#btnSaveCarListing').on('click', function () {
        //saveCar(); // This function is defined outside the jquery ready function

       
       saveCarDetailsToList()
    })

    var counter = 1;
    $('#btnNextCarListing').on('click', function () {
        //saveCar(); // This function is defined outside the jquery ready function

       
        counter = readCarDetailsFromListing(counter);
    })

 
    
    
})

/*
    Loads flavour from local storage
*/
function loadFlavour() {
    console.log("loading flavour")
    var savedFlavour = localStorage.getItem('favFlavour');

    $('#savedFlavour').val(savedFlavour)

}
/*
    Saves flavour from local storage
*/
function saveFlavour() {
    console.log("Saving flavour")
    localStorage.setItem('favFlavour', $('#favFlavour').val());
}

/*
This function shows how to save and retrive (unwrap) an object so you can store 
composite values 
*/

function saveCar() {
    var car = {};
    car.wheels = 4;
    car.doors = 2;
    car.sound = 'vroom';
    car.name = 'Lightning McQueen';
    console.log( car );
    //Pay attention to JSON.stringify() - this converts object into a string which can be saved as value
    localStorage.setItem( 'car', JSON.stringify(car) );

    //Note the JSON.parse() - this is how you 'unwrap' the object
    console.log( JSON.parse( localStorage.getItem( 'car' ) ) );

}

function saveCarDetails() {
    console.log("Saving car details")
    var carModel = {};
    carModel.mf = $('#tbMf').val();
    carModel.model = $('#tbModel').val();
    carModel.colour = $('#tbColour').val();
  
    console.log( carModel );
    localStorage.setItem( 'carModel', JSON.stringify(carModel) );
    console.log( JSON.parse( localStorage.getItem( 'carModel' ) ) );

}


function readCarDetails() {
    console.log("reading car details")
    var carModel = JSON.parse( localStorage.getItem( 'carModel' ) );

    if(carModel === null) return;
    $('#tbMfRead').val(carModel.mf);
    $('#tbModelRead').val(carModel.model);
    $('#tbColourRead').val(carModel.colour);
  
    console.log(carModel)

}


function saveCarDetailsToList() {
    console.log("Saving car details to List")
    

    var carModel = {};
    carModel.mf = $('#tbMfListing').val();
    carModel.model = $('#tbModelListing').val();
    carModel.colour = $('#tbColourListing').val();

    var listOfCars = JSON.parse(localStorage.getItem('listOfCars'))

    if (listOfCars === null) {

        listOfCars=[];
    }

    listOfCars.push(carModel);

    localStorage.setItem( 'listOfCars', JSON.stringify(listOfCars) );

}

function readCarDetailsFromListing(indexPosition) {
    console.log("READ car details FROM List")


    var listOfCars = JSON.parse(localStorage.getItem('listOfCars'))

    if (listOfCars === null) {

       return;
    }
    console.log("index pos is %d", indexPosition)
    if (indexPosition > listOfCars.length-1) {

        indexPosition = listOfCars.length-1
    }
    console.log("index pos is %d", indexPosition)
    $('#tbMfReadListing').val(listOfCars[indexPosition].mf)
    $('#tbModelReadListing').val(listOfCars[indexPosition].model)
    $('#tbColourReadListing').val(listOfCars[indexPosition].colour)

    return indexPosition+1;

}










