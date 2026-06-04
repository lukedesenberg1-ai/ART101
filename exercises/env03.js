$(document).ready(function () {

    // VARIABLES
    let enviromentTitle = "The Mythical Forest";

    let forestCreatures = [
        "Fairies",
        "Trolls",
        "Water Spirits",
        "Satyr"
    ];

    let mainEntity = {
        name: "Luna",
        type: "Young Doe",
        mood: "Curious",
        favoritePlace: "The Stream of Wonder"
    };

    let magicMessage = "The trees whisper secrets during the moonlight.";

    // BUTTON 1
    $("#title-button").click(function () {
        $("#environment-output").html(
            "<h2>" + enviromentTitle + "</h2>"
        );
    });

    // BUTTON 2
    $("#creatures-button").click(function () {

        let creatureText = "";

        for (let i = 0; i < forestCreatures.length; i++) {
            creatureText += "<p>" + forestCreatures[i] + "</p>";
        }

        $("#environment-output").html(creatureText);
    });

    // BUTTON 3
    $("#deer-button").click(function () {

        $("#environment-output").html(
            "<h2>Main Entity</h2>" +
            "<p>Name: " + mainEntity.name + "</p>" +
            "<p>Type: " + mainEntity.type + "</p>" +
            "<p>Mood: " + mainEntity.mood + "</p>" +
            "<p>Favorite Place: " + mainEntity.favoritePlace + "</p>"
        );
    });

    // BUTTON 4
    $("#magic-button").click(function () {

        $("html").toggleClass("magic");

        $("#environment-output").html(
            "<h2>Forest Magic</h2>" +
            "<p>" + magicMessage + "</p>"
        );
    });

    // BUTTON 5 (TIME CHANGE)
    function changeTime(timeOfDay) {

        if (timeOfDay === "day") {

            $("html").css("background-color", "#87CEEB");
            mainEntity.mood = "Happy";

            $("#environment-output").html(
                "<h2>Daytime in the Mythical Forest</h2>" +
                "<p>Luna feels " + mainEntity.mood + " in the sunlight.</p>"
            );

        } else if (timeOfDay === "night") {

            $("html").css("background-color", "#1d3557");
            mainEntity.mood = "Mysterious";

            $("#environment-output").html(
                "<h2>Nighttime in the Mythical Forest</h2>" +
                "<p>Luna feels " + mainEntity.mood + " under the moon.</p>"
            );

        } else {
            $("#environment-output").html(
                "<p>Please enter 'day' or 'night'.</p>"
            );
        }
    }

    $("#time-button").click(function () {
        let userChoice = prompt("Enter day or night:");
        changeTime(userChoice);
    });

    // HOVER OVER DEER
    $("#deer").mouseenter(function () {

        $("#environment-output").html(
            "<h2>Luna Notices You</h2>" +
            "<p>The young doe looks up curiously.</p>"
        );

        $("#deer").css("transform", "scale(1.1)");
    });

    $("#deer").mouseleave(function () {

        $("#environment-output").html(
            "<p>Luna returns to exploring the forest.</p>"
        );

        $("#deer").css("transform", "scale(1)");
    });

    // DOUBLE CLICK FOREST
    $("#forest").dblclick(function () {

        $("#environment-output").html(
            "<h2>Hidden Secret Found!</h2>" +
            "<p>A glowing fairy appears between the trees.</p>"
        );

        $("#forest").css("border", "5px solid gold");
    });

});