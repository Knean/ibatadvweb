console.log("Demo Shopping Cart");


function getPriceOfItem(item) {


    var price = 0;

    switch(item) {
        case 'choc': price=10; break;
        case 'diamonds': price=80; break;
        case 'whiskey' : price=20; break;
        case 'batteries' : price = 7; break;
        default: price=50; break;

    }

    return price;

}


function BuyEverythingRegardlessOfBudget(listOfItems) {

    var itemsIBought = [];
    var costOfShopping = 0;

    while (listOfItems.length > 0 ) {

            //Extract the current item from end of shopping list
            var currentItem = listOfItems.pop();
            itemsIBought.push(currentItem);

            //Get the current price of it
            var currentPrice = getPriceOfItem(currentItem)

            //Keep adding up how much you spent
            costOfShopping+= currentPrice;
    }

    console.log("I bought", itemsIBought.toString());
    //finally
    return costOfShopping;

} // BuyEverythingRegardlessOfBudget 




function BuyWhatYouCanWithBudget(budget, listOfItems) {

    var itemsIBought = [];
    var costOfShopping = 0;
    var cashFloat = budget; 

    while (listOfItems.length > 0 && cashFloat > 0) {

            //Extract the current item from start of shopping list
            var currentItem = listOfItems.shift();

            //console.log(" I am buying %s", currentItem);

            //Get the current price of it
            var currentPrice = getPriceOfItem(currentItem)

            console.log("Price of %s is %d  %d", currentItem, currentPrice);

            //If price is below my current cash float
            if(currentPrice <= cashFloat) {
                costOfShopping+= currentPrice;
                cashFloat = cashFloat - currentPrice;
                itemsIBought.push(currentItem);
              
            }

            //Keep adding up how much you spent
           
    }

    var changeLeftOver = cashFloat;

    console.log("I bought", itemsIBought.toString());
    console.log("Change left is %d", changeLeftOver);
    //finally
    return costOfShopping;

} // BuyEverythingRegardlessOfBudget 




function BuyAsManyItemsWithBudget(budget, listOfItems) {

    var itemsIBought = [];
    var costOfShopping = 0;
    var cashFloat = budget; 


    //Tricky this one - you need a custom function 
    //See lower page of https://www.w3schools.com/jsref/jsref_sort.asp
    // \t means put a tab in the output log - purely for formatting

    console.log("CurrentListOrder: \t\t\t\t%s", listOfItems.toString())

    listOfItems.sort( function (a,b) { return getPriceOfItem(a) - getPriceOfItem(b)  } );

    console.log("CurrentListOrder after sorting low to high: \t%s", listOfItems.toString())

    //Notice the rest of the code is the same

    while (listOfItems.length > 0 && cashFloat > 0) {

            //Extract the current item from start of shopping list
            var currentItem = listOfItems.shift();

            //console.log(" I am buying %s", currentItem);

            //Get the current price of it
            var currentPrice = getPriceOfItem(currentItem)

            console.log("Price of %s is %d  %d", currentItem, currentPrice);

            //If price is below my current cash float
            if(currentPrice <= cashFloat) {
                costOfShopping+= currentPrice;
                cashFloat = cashFloat - currentPrice;
                itemsIBought.push(currentItem);
              
            }

            //Keep adding up how much you spent
           
    }

    var changeLeftOver = cashFloat;

    console.log("I bought", itemsIBought.toString());
    console.log("Change left is %d", changeLeftOver);
    //finally
    return costOfShopping;

} // BuyAsManyItemsWithBudget 


function BuyMostExpensiveItemsFirstWithBudget(budget, listOfItems) {

    var itemsIBought = [];
    var costOfShopping = 0;
    var cashFloat = budget; 


    //Tricky this one - you need a custom function 
    //See lower page of https://www.w3schools.com/jsref/jsref_sort.asp
    // \t means put a tab in the output log - purely for formatting

    console.log("CurrentListOrder: \t\t\t\t%s", listOfItems.toString())

    listOfItems.sort( function (a,b) { return getPriceOfItem(b) - getPriceOfItem(a)  } );

    console.log("CurrentListOrder after sorting low to high: \t%s", listOfItems.toString());

    //Notice the rest of the code is the same

    while (listOfItems.length > 0 && cashFloat > 0) {

            //Extract the current item from start of shopping list
            var currentItem = listOfItems.shift();

            //console.log(" I am buying %s", currentItem);

            //Get the current price of it
            var currentPrice = getPriceOfItem(currentItem)

            console.log("Price of %s is %d  %d", currentItem, currentPrice);

            //If price is below my current cash float
            if(currentPrice <= cashFloat) {
                costOfShopping+= currentPrice;
                cashFloat = cashFloat - currentPrice;
                itemsIBought.push(currentItem);
              
            }

            //Keep adding up how much you spent
           
    }

    var changeLeftOver = cashFloat;

    console.log("I bought", itemsIBought.toString());
    console.log("Change left is %d", changeLeftOver);
    //finally
    return costOfShopping;

} // BuyMostExpensiveItemsFirstWithBudget 


/******************* DRIVER CODE *******************/

var costOfShopping = 0;

console.log("********************************************* Buy Everything *********************************************");

//Buy everything regardless of budget
var listOfItems =  ["choc","diamonds","whiskey","batteries"]
costOfShopping=  BuyEverythingRegardlessOfBudget(listOfItems);
console.log("If i buy everything in list it will cost %d", costOfShopping);

console.log("*********************************************Buy What you Can with Budget*********************************************");

//Buy what you can regardless of order
//You need to reset the list as it gets cleaned out 
listOfItems =  ["choc","diamonds","whiskey","batteries"]
costOfShopping =  BuyWhatYouCanWithBudget(100, listOfItems);
console.log("I just spent %d", costOfShopping);


console.log("********************************************* Buy Cheapest Items First *********************************************");
//Buy as many items (cheapest first...);
//You need to reset the list as it gets cleaned out 
listOfItems =  ["choc","diamonds","whiskey","batteries"]
costOfShopping =  BuyAsManyItemsWithBudget(100, listOfItems);
console.log("I just spent %d", costOfShopping);


console.log("********************************************* Buy Most Expensive First *********************************************");
//Buy as many items (cheapest first...);
//You need to reset the list as it gets cleaned out 
listOfItems =  ["choc","diamonds","whiskey","batteries"]
costOfShopping =  BuyMostExpensiveItemsFirstWithBudget(100, listOfItems);
console.log("I just spent %d", costOfShopping);

