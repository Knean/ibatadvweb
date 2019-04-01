var globalMovieData;
var selectedGenres = [];
$(function () {

    startUp();
    loadMovies();

})

function loadGenresCheckbox() {
    var genres = [];
    var uniqueGenres = []
    var templateData = []
    //push all genres into an array
    $.each(globalMovieData, function (index, value, ) {
        genres = genres.concat(value.genre.split(', '))

    })
    //get only unique genres
    for (var i = 0; i < genres.length; ++i) {
        if (uniqueGenres.indexOf(genres[i]) === -1) {
            uniqueGenres.push(genres[i])
        }
    }
    // create the checkbox 
    uniqueGenres.forEach(function (element, index) {
        templateData.push(
            `<div class="form-check">
                <input class="form-check-input" type="checkbox" name="exampleRadios" id="${element}" value="option${index}" >
                <label class="form-check-label" for="${element}"> ${element} </label>
            </div>`
        )
    })

    $('#selectMovies').append(templateData.join(" "));
}




function startUp() {

    //genre checkbox event 
    $('.container').on('change', '.form-check-input', function (event) {
        var selected = event.target.attributes.id.nodeValue
        if (event.target.checked) {
            selectedGenres.push(selected)
        }
        else {
            selectedGenres.splice(selectedGenres.indexOf(selected), 1)
        }

        templateData = []
        for (var i = 0; i < globalMovieData.length; i++) {
            // check if movie genre list contains any of the selected genres
            if (globalMovieData[i].genre.split(', ').some(function (genre) { return selectedGenres.includes(genre) })) {
                templateData.push(getMovieTemplate(i, globalMovieData[i]));
            }
        }
        $('#movieListing').empty().append(templateData.join(" "));
    })
 
    // View Movie button
    $(".container").on('click', ".viewMovie", function () {
        var movieId = $(this).data("id");
        bookMovie(movieId)
        
        // ticket plus and minus buttons have a math class
        $('.math').on('click', function (event) {
            
            
            if(event.currentTarget.id=="plus"){
                var num = parseInt($('#tickets').text()) + 1
                
                $('#tickets').text(num)
            }
            else if(event.currentTarget.id=="minus"){
                var num = parseInt($('#tickets').text()) - 1
                num >= 0? $('#tickets').text(num): $('#tickets').text(0)
                
            }
            $('.math').blur()

            console.log(event.currentTarget.id)
        })

    })

    $(".container").on('change', "#chooseDay", function () {

        var id = $(this).data("movieid");
        var day = $(this).val();

        console.log(`You chose day ${day} for movie id ${id}`);
        console.log(globalMovieData[id].runningTimes);

        switch (day) {
            case "mon": times = globalMovieData[id].runningTimes.mon; break;
            case "tue": times = globalMovieData[id].runningTimes.tue; break;
            case "wed": times = globalMovieData[id].runningTimes.wed; break;
            case "thu": times = globalMovieData[id].runningTimes.thu; break;
            case "fri": times = globalMovieData[id].runningTimes.fri; break;
            case "sat": times = globalMovieData[id].runningTimes.sat; break;
            case "sun": times = globalMovieData[id].runningTimes.sun; break;
            default: times = [];

        }
        console.log(times);

        if (times.length == 0) {

            $('#chooseTime').empty().prop('disabled', true);
            return;

        }

        //empty select
        //append the array of options generated by map and joined 

        $('#chooseTime').empty().append(times.map(t => {

            return `<option value="${t}">${t}</option>`;

        }).join(" ")).prop('disabled', false);



    })


}

function loadMovies() {


    var url = 'http://college-movies.herokuapp.com/';

    $.getJSON(url, function (jsonData) {
        globalMovieData = jsonData;
        console.log(globalMovieData, 'jsonobject')
        var templateData = []
        loadGenresCheckbox()

        for (var i = 0; i < jsonData.length; i++) {

            templateData.push(getMovieTemplate(i, jsonData[i]));
        }



        $('#movieListing').append(templateData.join(" "));

    })
    console.log('jsonloaded')


}



function getMovieTemplate(id, movieItem) {

    return `<div class="card" style="width: 18rem;">
               
    <div class="card-body">
    
    <img src="https://via.placeholder.com/250x120" class="img-fluid"/>

   


    
      <h5 class="card-title">${movieItem.title} <span class="badge badge-secondary">${movieItem.genre}</span></h5>
      ${getCastTemplate(movieItem.cast.split(","))}
      <p class="card-text"></p>
      <button class="btn btn-primary viewMovie" data-id="${id}">View Movie</button> 
     
    </div>
  </div>`;

}


function getMovieBookingTemplate(id, movieItem) {

    return `<div class="card" style="width: 18rem;">

    <div class="card-body">
        <h5 class="card-title">${movieItem.title}</h5>
        <p class="card-text"></p>
        <div class="row">
            <div class="col-md-6">Mon</div>
            <div class="col-md-6">${getMovieTemplateTimes(movieItem.runningTimes.mon)}</div>
        </div>
        <div class="row">
            <div class="col-md-6">Tue</div>
            <div class="col-md-6">${getMovieTemplateTimes(movieItem.runningTimes.tue)}</div>
        </div>
        <div class="row">
            <div class="col-md-6">Wed</div>
            <div class="col-md-6">${getMovieTemplateTimes(movieItem.runningTimes.wed)}</div>
        </div>


        <div class="row">
            <div class="col-md-6">
                <select id="chooseDay" data-movieId="${id}">
                    <option value="">Select A Day</option>
                    <option value="mon">Monday</option>
                    <option value="tue">Tuesday</option>
                    <option value="wed">Wednesday</option>
                    <option value="thu">Thursday</option>
                    <option value="fri">Friday</option>
                    <option value="sat">Saturday</option>
                    <option value="sun">Sunday</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button id="minus" type="button" class="btn btn-primary btn-sm math"><i
                            class="fas fa-minus"></i></button>
                    <h1><span id="tickets" class="badge badge-light">1</span></h1>
                    <button id="plus" type="button" class="btn btn-primary btn-sm math"><span><i
                                class="fas fa-plus"></span></i></button>

                </div>
            </div>
            <div class="col-md-6">
                <span> pick a number of tickets </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md">
                <select id= "chooseticket" data-movieId="${id}">
                    <option value="">Select a ticket type</option>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    <option value="VIP">VIP</option>

                </select>

            </div>
            
            <div class="col-md">
                <p  > Price: </p>
                <div id = "totalPrice" style = " border-style:solid; border-color: green"> 9.99 € </div>
            </div>
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Name </span>
        </div>
        <input type="text" class="form-control" placeholder="John Doe" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">email</span>
  </div>
  <input type="text" class="form-control" placeholder="guy@email.com" aria-label="Username" aria-describedby="basic-addon1">
</div>

        <div class="col-md-6"><select id="chooseTime" disabled>
                <option>Choose Day</option>
            </select></div>



        <button class="btn btn-primary bookMovie" data-id="${id}">Book Movie</button>

    </div>
</div>`;

}


function getCastTemplate(cast) {

    var html = [];
    html.push("<ul>");
    for (var i = 0; i < cast.length; i++) {

        html.push(getCastTemplateItem(cast[i]));
    }
    html.push("</ul>");

    return html.join(" ");
}


function getCastTemplateItem(item) {

    return `<li>${item}</li>`;

}


function bookMovie(id) {

    console.log(`You want to book ${id}`)

    console.log(globalMovieData[id]);

    $('#movieDetail').html(getMovieBookingTemplate(id, globalMovieData[id]));

}


function getMovieTemplateTimes(day) {


    var days = day.map(x => {

        return `<option value='${x}'>${x}</option>`;

    });


    return `<select>${days.join(" ")}</select>`


}
