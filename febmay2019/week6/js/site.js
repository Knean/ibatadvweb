var globalMovieData;

$(function () {

    //console.log("jquery is loaded");
    startUp();
    loadMovies();

})

function  startUp() {

    $(".container").on('click',".viewMovie",function () {
        var movieId = $(this).data("id");
        bookMovie(movieId)

    })

}

function loadMovies() {

    var url = 'http://college-movies.herokuapp.com/';

    $.getJSON(url, function (jsonData) {

        globalMovieData = jsonData;

        console.log(jsonData);

        var templateData = []

        for(var i = 0; i < jsonData.length; i++) {

            templateData.push(getMovieTemplate(i, jsonData[i]));
        }



        $('#movieListing').append(templateData.join(" "));

    })


}


function getMovieTemplate(id, movieItem) {

    return `<div class="card" style="width: 18rem;">
               
    <div class="card-body">
      <h5 class="card-title">${movieItem.title}</h5>
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


      <button class="btn btn-primary bookMovie" data-id="${id}">Book Movie</button> 
    
    </div>
  </div>`;

}


function getCastTemplate(cast) {

    var html = [];
    html.push("<ul>");
    for(var i =0;i < cast.length; i++) {

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


days = day.map(x => {

    return `<option value='${x}'>${x}</option>`;

})

return `<select>${days.join(" ")}</select>`


}
