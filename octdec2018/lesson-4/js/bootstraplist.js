function renderPage() {
    
    listRainbowColours();
}

function listRainbowColours() {
    var colours = ["Red", "Yellow", "Orange", "Green"];

    var e = document.getElementById("listOfRainbowColours");

    var countItems = colours.length;

    var htmlString = []
    htmlString.push("<ul class='list-group'>")
    for (var i = 0; i < countItems; i++) {
        htmlString.push("<li class='list-group-item'>");
        htmlString.push(colours[i]);
        htmlString.push("</li>");
        console.log(htmlString)
    }
    htmlString.push("</ul>");
    console.log(htmlString)
    e.innerHTML = htmlString.join(" ");


}