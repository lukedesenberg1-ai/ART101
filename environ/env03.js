// VARIABLE
let enviromentTitle = "The Mythical Forest";

// ARRAY
let forestCreatures = [
    "Fairies",
    "Trolls",
    "Water Spirits",
    "Satyr"
];

// OBJECT
let mainEntity = {
    name: "Luna",
    type: "Young Doe",
    mood: "Curious",
    favoritePlace: "The Stream of Wonder"
};

// VARIABLE
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

    $("#environment-output").html(

        "<h2>Forest Magic</h2>" +

        "<p>" + magicMessage + "</p>"

    );
});

// FUNCTION WITH PARAMETER AND CONDITIONAL
function changeTime(timeOfDay) {

    if (timeOfDay === "day") {

        $("html").css("background-color", "#87CEEB");

        mainEntity.mood = "Happy";

        $("#environment-output").html(
            "<h2>Daytime in the Mythical Forest</h2>" +
            "<p>Luna feels " + mainEntity.mood +
            " while exploring in the sunlight.</p>"
        );

    } else if (timeOfDay === "night") {

        $("html").css("background-color", "#1d3557");

        mainEntity.mood = "Mysterious";

        $("#environment-output").html(
            "<h2>Nighttime in the Mythical Forest</h2>" +
            "<p>Luna feels " + mainEntity.mood +
            " beneath the glowing moon.</p>"
        );

    } else {

        $("#environment-output").html(
            "<p>Please enter 'day' or 'night'.</p>"
        );

    }
}

// BUTTON 5
$("#time-button").click(function () {

    let userChoice = prompt("Enter day or night:");

    changeTime(userChoice);

});