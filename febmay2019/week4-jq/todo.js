
var toDoItems = [
    { title: "bins", completed: true },
    { title: "shops", completed: false },
    { title: "washing", completed: false }];

$(function () {
    console.log("to do is loaded");
    initButtons();
    renderToDoList(toDoItems);


})

function styleList() {

    $("#todoList li:eq( 2 )").css("color", "red");
}

function initButtons() {
    $('#btnAddItem').on("click", function () {

        var todo = { title: $('#tbItem').val(), completed: false }
        toDoItems.push(todo);
        renderToDoList(toDoItems);
    });
}

function renderToDoList(listOfItems) {

    var htmlString = [];
    htmlString.push("<ol id='todoList'>");

    var lineItems = listOfItems.map(currentItem => {
        //ternary operator  var stuff = condition ? true: false; 
        var isCompleted = currentItem.completed ? ' checked ' : '';
        var cb = `<input type='checkbox' ${isCompleted}/>`;
        return `<li>${cb} ${currentItem.title}</li>`

    })
    console.log({ lineItems });
    htmlString.push(lineItems.join(" "));

    /*
    for(var i = 0; i < listOfItems.length; i++) {
        var currentItem = listOfItems[i];

        //var str = "<li>" + currentItem + "</li>";

        htmlString.push(`<li>${currentItem}</li>`);
    }
    */
    htmlString.push("</ol>");

    $('#messagePanel').html(htmlString.join(" "));

    styleList();
}