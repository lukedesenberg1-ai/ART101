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
    type: "Yound Doe",
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