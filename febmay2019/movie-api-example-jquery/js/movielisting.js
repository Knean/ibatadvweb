//https://pastebin.com/bG4t5Rtn
//set up Jqueryu

function generateSelect(id, day, items) {

    htmlString = [];
    htmlString.push(`<select id='${id}' data-day='${day}' class='movieTimes formcontrol'>`);
    htmlString.push("<option value=''>Choose a time</option");

    var options = items.map(x => {

        return `<option value='${x}'>${x}</option>`;

    })


    htmlString.push(options.join(" "))
    htmlString.push("</select>");


    return htmlString.join(" ");
}



$(function () {

    $('#movieListingBody').on('change', '.movieTimes', function() {

        var element = $(this).prop('id');
        var currentTimeChosen = $(this).val();
        var currentDayChosen = $(this).data('day');
        console.log('movie time have changed for id: ' + element);
        console.log('movie time is set for : ' + currentTimeChosen);
        console.log('movie day is set for : ' + currentDayChosen);
    })


    //Add the button handler
    $('#btnLoadMovies').on("click", function () {
        $.getJSON('https://college-movies.herokuapp.com/', function (movies) {
            var htmlString = [];
            for (var i = 0; i < movies.length; i++) {

                var currentMovie = movies[i];
                htmlString.push("<tr>");
                htmlString.push("<td>");
                htmlString.push(currentMovie.title);
                htmlString.push("</td>");

                var monday = currentMovie.runningTimes.mon;
                var mondayTxt = [];
                mondayTxt.push("<td>");
                for (var movieTime = 0; movieTime < monday.length; movieTime++) {

                    mondayTxt.push(monday[movieTime]);
                    mondayTxt.push(" | ");

                }
                mondayTxt.push("</td>");
                // console.log(monday);

                htmlString.push(mondayTxt.join(" "));

                htmlString.push("<td>")

                htmlString.push(currentMovie.runningTimes.tue.map(x => {
                    return x + ' | ';
                }).join(" "));

                htmlString.push("</td>")


                htmlString.push("<td>");
                htmlString.push(generateSelect('wedTimes', 'Wednesday', currentMovie.runningTimes.wed));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('thuTimes', 'Thursday', currentMovie.runningTimes.thu));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('friTimes', 'Friday', currentMovie.runningTimes.fri));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('satTimes', 'Saturday', currentMovie.runningTimes.sat));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('sunTimes', 'Sunday', currentMovie.runningTimes.sun));
                htmlString.push("</td>");


                htmlString.push("</tr>");
            }

            var finalHTML = htmlString.join(" ")

            $('#movieListingBody').append(finalHTML);

        })

    })

})