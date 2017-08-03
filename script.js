//set global variable for score counter to 0

//randomize sound function:
//give each sound an id
//if sound matching animal plays, set that animal's correct value(?) to true (ex. if a monkey howls, the monkey's correct value(?) will be set to true)
//randomize animals
var animals
var id = ["toucan", "jaguar", "frog", "monkey"];
var noises
//array that tells you if it has been played already - 0 means not used, 1 means used
var used;
var sceneNum = 0;
var moveOn = true;
/*var noises = ["REPLACE", "REPLACE", "frogSound", "monkeySound"]*/

var randomAnimal;

//idk why but this is the only way i can load the arrays and not have them reset every time
function beginGame() {
    console.log(sceneNum)
    if (sceneNum == 0) {
        animals = ["toucan", "jaguar", "frog", "monkey"];
        noises = ["toucanSound", "jaguarSound", "frogSound", "monkeySound"]
    }
    else if (sceneNum == 1) {
        animals = ["cow", "chicken", "pig", "sheep"]
        noises = ["cowSound", "chickenSound", "pigSound", "sheepSound"]
    } else {
        animals = ["whale", "dolphin", "seal", "penguin"]
        noises = ["whaleSound", "dolphinSound", "sealSound", "penguinSound"]
    }
    used = ["0", "0", "0", "0"]
}

function animalGuess() {
    displayAnimal();
    playSound(randomAnimal);
}


function displayAnimal() {
    if (moveOn == true) {
        moveOn = false;
        //removes "correct/incorrect" text from previous animal when sphere is clicked
        var text2 = document.getElementById("correct")
        text2.setAttribute("visible", "false")

        var text = document.getElementById("display")
        var index = Math.floor(Math.random() * 4);
        while (used[index] != 0 && allUsed() == false) {
            index = Math.floor(Math.random() * 4);
        }
        randomAnimal = animals[index]
        used[index] = 1;
        /*    randomAnimal = animals[3]*/
        console.log(randomAnimal)
        text.setAttribute("visible", "true")
        text.setAttribute("value", "Find a" + " " + randomAnimal)
        console.log(used)
    }


}

function correctAnimal(animalID) {
    console.log(randomAnimal)
    if (randomAnimal != null) {
        // var randomId = document.getElementbyId("monkey")
        //how do we know the Id of the random animal????? I justpput monkey as a placeholder
        console.log(randomAnimal)
        console.log(animalID)
        if (randomAnimal == animalID) {
            moveOn = true;
            var text2 = document.getElementById("correct")
            //changes the a-text w/ an id of correct to be visible and changes text to indicate the user was not correct
            text2.setAttribute("visible", "true")
            text2.setAttribute("value", "You have selected the correct animal!")
            var yay = document.getElementById("yay")
            yay.components.sound.playSound();
            var ani = document.getElementById(animalID)
            //makes the randomId animal dissapear
            ani.setAttribute("visible", "false")
            console.log("helllooooo")
        } else {
            moveOn = false;
            var text2 = document.getElementById("correct")
            //changes the a-text to be visible, but changes to text to indicate that the user was not correct
            text2.setAttribute("visible", "true")
            text2.setAttribute("value", "You have selected the wrong animal!")
            var fail = document.getElementById("fail")
            fail.components.sound.playSound();
        }
    }
    allUsed();
    console.log(moveOn)
}

//function checks if all animals have been used yet
function allUsed() {
    for (var i = 0; i <= used.length; i++) {
        if (used[i] == 0) {
            return false;
        }
    }
    // sceneNum = sceneNum+1;
    return true;
}

function playSound() {
    if (randomAnimal == animals[0]) {
        var toucan = document.getElementById(noises[0])
        toucan.components.sound.playSound();
        console.log("should play toucan sound")
    }
    else if (randomAnimal == animals[1]) {
        var jaguar = document.getElementById(noises[1])
        jaguar.components.sound.playSound();
        console.log("should play jaguar sound")
    }
    else if (randomAnimal == animals[2]) {
        var frog = document.getElementById(noises[2])
        frog.components.sound.playSound();
        console.log("should play frog sound")
    }

    else if (randomAnimal == animals[3]) {
        var monkey = document.getElementById(noises[3])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
}

function changeScene(oldScene, newScene, box1, box2, box3, box4, oldSceneSound, newSceneSound) {
    sceneNum = sceneNum+1;
    beginGame();
    
    var oldScene = document.getElementById(oldScene);
    var newScene = document.getElementById(newScene);
    oldScene.setAttribute("visible", "false");
    newScene.setAttribute("visible", "true");

    var box1 = document.getElementById(box1);
    var box2 = document.getElementById(box2);
    var box3 = document.getElementById(box3);
    var box4 = document.getElementById(box4);
    box1.setAttribute("onclick", "");
    box2.setAttribute("onclick", "");
    box3.setAttribute("onclick", "");
    box4.setAttribute("onclick", "");
    
    var oldSceneSound = document.getElementById(oldSceneSound);
    var newSceneSound = document.getElementById(newSceneSound);
    oldSceneSound.setAttribute("autoplay", "false");
    oldSceneSound.setAttribute("volume", "0");
    newSceneSound.setAttribute("autoplay", "true");
}

//give each animal an id

//onclick, set value of animal's clicked function to true (define a variable to identify it as the one clicked?)

//if correct animal==animal clicked, then make a "correct" sound, else make an "incorrect" sound
//if correct animal==animal clicked, then add 1 to score counter

//if score counter == number of animals in the ecosystem, then display transition box --> move to new ecosystem
require('aframe');
require('aframe-rain');
