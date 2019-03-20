$(function () {

    console.log("Loading jquery");

    initButtons();



})
function initButtons() {

    $('#btnFlavour').on("click", function () {

      console.log("initButtons()");

      var favouriteFlavour = $('#tbFlavour').val();

      localStorage.setItem('flavour', favouriteFlavour);

      $('#setFlavour').hide();
      $('#getFlavour').show();
    })


    
    $('#btnRetrieveFlavour').on("click", function () {

       console.log('retrieving')
        favouriteFlavour = localStorage.getItem('flavour');
  
        $('#showFlavour').html(favouriteFlavour);
      
      })

  


}