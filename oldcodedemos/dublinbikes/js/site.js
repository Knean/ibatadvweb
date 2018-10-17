$(function () {



    $.getJSON("https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=013c96fda1ac6937698c8402e42b0c31f2cc081e", function (jsonData) {


        htmlItems = [];
        htmlItems.push('<ul class="list-group">');
        $.each(jsonData, function (key, bikeStation) {
            // console.log(bikeStation);
            console.log(bikeStation.name)
            var badge = " <span class='badge'>" + bikeStation.available_bikes + "</span>";
            htmlItems.push('<li class="list-group-item">' + bikeStation.name + badge + '</li>')


        })
        htmlItems.push('</ul>');
        $('#bikeStations').html(htmlItems.join(" "));


    })






})

//https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=013c96fda1ac6937698c8402e42b0c31f2-

