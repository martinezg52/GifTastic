//Define an array of topics as per homework instructions, I have chosen different types of aircraft for the topics array

$(document).ready(function() {

var topicsArray = ["aircraft", "helicopter", "airbus", "boeing", "747", "pilot", "landing", "turbulence", "glider", "airport", "sky", "rocket"]

//function to create buttons and assign a class and attribute for the topics in the array to HTML with the use of a for loop

function renderButtons() {

    $("#topicButtons").empty();

    for (var i=0; i < topicsArray.length; i++) {

        var a = $("<button>");

        a.addClass("topics");

        a.attr("data-name", topicsArray[i]);

        a.text(topicsArray[i]);

        $("#topicButtons").append(a);

    }
}

//Adding push method to push the topic input to the topics Array

$("#add-topic").on("click", function(event) {

event.preventDefault();

var topic = $("#topic-input").val().trim();

topicsArray.push(topic);

renderButtons();

});

$(document).on("click", ".topics", function() {

    var topic = $(this).attr("data-name");

//adding URL and API key, with limit 10 gifs

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=FWMQ409HZVj1FLIklggd0ZDDmDQPn3xf&limit=10";

//adding Ajax function to query the API and bring back image results

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .done(function(response) {

        var results = response.data;

//created for loop and topicDiv var and assigned it a picture class, rating and rest of classes as attribute including the 
//data-animate class to allow it to play when clicked.

        $("#imageGoHere").empty();

        for (var i = 0; i < results.length; i++) {

            var topicDiv = $("<div class = 'picture'>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var topicImage = $("<img>");

            topicImage.attr("src", results[i].images.fixed_height_still.url);

            topicImage.attr("data-still", results[i].images.fixed_height_still.url);

            topicImage.attr("data-animate", results[i].images.fixed_height.url);

            topicImage.attr("data-state", "still");

            topicDiv.append(p);
            topicDiv.append(topicImage);

            $("#imageGoHere").prepend(topicDiv);
        }
    });

});

//As of right now when testing, the images do populate, but when clicked they do not play yet, classes are defined above and now need
//to add a click event to trigger them to play
//Also need to define a variable "state" and conditionals to have the state change from still to animate

$(document).on("click", "img", function() {

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");

    }
});

// calling again the renderButtons function so that the buttons up front for each topic show when the website first loads.

renderButtons();

})