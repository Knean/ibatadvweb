$(function () {

    console.log("Jquery goodness is loaded");
    /*
        localStorage.setItem("car-1", "Ford1");
        localStorage.setItem("car-2", "Ford2");
        localStorage.setItem("car-3", "Ford3");
        localStorage.setItem("car-4", "Ford4");
    */
    loadFlavour(); // Load the flavour saved in previous session

    //Set up listener to save to local storage on button click 

    $('#btnSave').on('click', function () {
        saveFlavour(); // This function is defined outside the jquery ready function
    })

    $('#btnSaveCar').on('click', function () {
        saveCar(); // This function is defined outside the jquery ready function
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


















function _saveCar() {
    var car = {};
    car.wheels = 4;
    car.doors = 2;
    car.sound = 'vroom';
    car.name = 'Lightning McQueen';
    console.log( car );
    localStorage.setItem( 'car', JSON.stringify(car) );
    console.log( JSON.parse( localStorage.getItem( 'car' ) ) );

}