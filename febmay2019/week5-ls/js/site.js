$(function () {

    console.log("Loading jquery");

    initButtons();



})

function initButtons() {

    $('#B1').on("click", function () {

        $('#F2').show();
        $('#F1').hide();
    })

    $('#B2').on("click", function () {

        $('#F1').show();
        $('#F2').hide();
    })


}