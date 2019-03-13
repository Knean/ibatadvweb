
var toDoItems=["bins","shops","washing"];

$(function() {
    console.log("to do is loaded");
    initButtons() ;
    renderToDoList(toDoItems);

})

function initButtons() {
    $('#btnAddItem').on("click", function () {
           toDoItems.push( $('#tbItem').val() );
           renderToDoList(toDoItems);
    });
}

function renderToDoList(listOfItems) {

    var htmlString =[];
    htmlString.push("<ol>");

    var lineItems = listOfItems.map( currentItem => {

        return `<li>${currentItem}</li>`

    })
    console.log({lineItems});
    htmlString.push(lineItems.join(" "));

    /*
    for(var i = 0; i < listOfItems.length; i++) {
        var currentItem = listOfItems[i];

        //var str = "<li>" + currentItem + "</li>";

        htmlString.push(`<li>${currentItem}</li>`);
    }
    */
    htmlString.push("</ol>");

    $('#messagePanel').html( htmlString.join(" "));
}