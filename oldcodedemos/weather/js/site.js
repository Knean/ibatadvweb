$(function () {



    $.getJSON("http://api.openweathermap.org/data/2.5/group?id=7778677,2965140,2962941,2964179&units=metric&appid=e12f07c8d9437ef9fe18015f148b88b8", function (jsonData) {


        htmlItems = [];
        htmlItems.push('<ul class="list-group">');
        $.each(jsonData.list, function (key, weatherStation) {
             console.log(weatherStation);
           // console.log(bikeStation.name)
            var badge =  "<span class='badge'>T:" + weatherStation.main.temp + " / H " + weatherStation.main.humidity + "</span>";
           htmlItems.push('<li class="list-group-item">' + weatherStation.name + badge + '</li>')


        })
        htmlItems.push('</ul>');
        $('#weatherStation').html(htmlItems.join(" "));


    })






})

//https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=013c96fda1ac6937698c8402e42b0c31f2-

