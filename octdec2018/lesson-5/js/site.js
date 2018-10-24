var fleet = [
    { "colour": "Red", "engine": "2.0", "mf": "Ford" },
    { "colour": "Red", "engine": "2.1", "mf": "Nissan" },
    { "colour": "Red", "engine": "2.2", "mf": "Fiat" }
]

var currentStep = 0;

function loadNextCar() {

    var currentCar = fleet[currentStep];

    console.log("step is %d", currentStep)

    //ternary operator 
    currentStep = currentStep > 1 ? 0 : currentStep + 1;

    /*
        if (currentStep > 1) {
            currentStep = 0
        } else {
    
            currentStep = currentStep + 1;
        }
    */


    console.log("step is now %d", currentStep)


    var mf = document.getElementById("carMf");
    mf.innerHTML = currentCar.mf;

    var colour = document.getElementById("carColour");
    colour.innerHTML = currentCar.colour;

    var engine = document.getElementById("carEngine");
    engine.innerHTML = currentCar.engine;

}

function renderPage() {

    var car1 = {};
    car1.colour = "Red"
    car1.engine = "2.0"
    car1.mf = "Ford"

    console.log(car1);

    var mf = document.getElementById("carMf");
    mf.innerHTML = car1.mf;

    var colour = document.getElementById("carColour");
    colour.innerHTML = car1.colour;

    var engine = document.getElementById("carEngine");
    engine.innerHTML = car1.engine;
    
    renderList() 

}

function renderList() {

   
    var e = document.getElementById("listOfCars");
    var htmlString = []
    htmlString.push("<ul class='list-group'>")
    for (i = 0; i < fleet.length; i++) {
        currentCar = fleet[i];
        htmlString.push("<li class='list-group-item'>");
        htmlString.push(currentCar.mf);
        htmlString.push("</li>");
        console.log(htmlString)
    }
    htmlString.push("</ul>");
    console.log(htmlString)
    e.innerHTML = htmlString.join(" ");









}