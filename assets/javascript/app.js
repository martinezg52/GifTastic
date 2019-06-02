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
    
})

})