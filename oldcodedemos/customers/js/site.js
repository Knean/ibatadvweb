$(function () {

    /*
        $.ajaxSetup({
            beforeSend: function (xhr) {
                if (xhr.overrideMimeType) {
                    xhr.overrideMimeType("application/json");
                }
            }
        })
    */
    console.log("jquery is loaded");

    $.getJSON("customer.json", function (jsonData) {

        console.log(jsonData);

        $htmlItems = [];
        $.each(jsonData, function (key, customer) {
            $htmlItems.push("<p>")
            $htmlItems.push(customer.firstName + " " + customer.lastName)
            $htmlItems.push("</p>")
            $htmlItems.push("<p>")
            $htmlItems.push(customer.age)
            $htmlItems.push("</p>")
            $htmlItems.push("<p>")
            $htmlItems.push(customer.address.streetAddress + "<br/>");
            $htmlItems.push(customer.address.city + "<br/>");
            $htmlItems.push(customer.address.state + "<br/>");
            $htmlItems.push(customer.address.postalCode + "<br/>");
            $htmlItems.push("</p>")
        })

        $('#customers').html($htmlItems.join(" "));




    })






})
