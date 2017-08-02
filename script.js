require('aframe');
require('aframe-rain');

//set global variable for score counter to 0

//randomize sound function:
//give each sound an id
//if sound matching animal plays, set that animal's correct value(?) to true (ex. if a monkey howls, the monkey's correct value(?) will be set to true)
//randomize animals
var animals = ["toucan", "jaguar", "red-eyed tree frog", "spider monkey"];
var id = ["toucan", "jaguar", "frog", "monkey"];
/*var noises = ["REPLACE", "REPLACE", "frogSound", "monkeySound"]*/

var randomAnimal;

function animalGuess() {
    displayAnimal();
    playSound(randomAnimal);
}


function displayAnimal() {
    var animals = ["toucan", "jaguar", "red-eyed tree frog", "spider monkey"];
    var text = document.getElementById("display")
    var index = Math.floor(Math.random() * 4);
    /*var randomAnimal = animals[index]*/
    randomAnimal = animals[3]
    console.log(randomAnimal)
    text.setAttribute("visible", "true")
    text.setAttribute("value", "Find a" + " " + randomAnimal)
    console.log(animals[1])

}

function playSound() {
    var animals = ["toucan", "jaguar", "red-eyed tree frog", "spider monkey"];
    var noises = ["REPLACE", "REPLACE", "frogSound", "monkeySound"]
    if (randomAnimal == animals[0]) {

    }
    else if (randomAnimal == animals[1]) {

    }
    else if (randomAnimal == animals[2]) {
        var frog = document.getElementById("frogSound")
        frog.components.sound.playSound();
        console.log("should play frog sound")
    }

    else if (randomAnimal == animals[3]) {
        var monkey = document.getElementById("monkeySound")
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
}

//give each animal an id

//onclick, set value of animal's clicked function to true (define a variable to identify it as the one clicked?)
//var randomId = document.getElementbyId("")
//if (randomAnimal == box.clicked)

//if correct animal==animal clicked, then make a "correct" sound, else make an "incorrect" sound
//if correct animal==animal clicked, then add 1 to score counter

//if score counter == number of animals in the ecosystem, then display transition box --> move to new ecosystem
