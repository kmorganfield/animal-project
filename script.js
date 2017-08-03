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
    }
    else if (sceneNum == 2) {
        animals = ["whale", "dolphin", "seal", "penguin"]
        noises = ["whaleSound", "dolphinSound", "sealSound", "penguinSound"]
    }
    else {

    }
    console.log(animals)
    console.log(noises)
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

function info(animalID) {
    if (animalID == "jaguar") {
        var text = document.getElementById("animalText")
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Jaguars unexpectedly live in the rainforest. They have incredibly powerful jaws, strong enough to pierce a skull and crack a sea turtle’s shell. They are fearsome predators and will hunt anything from frogs, fish and reptiles to livestock, cows and deer. If necessary jaguars are competent climbers and will scale trees. They often use their high position among the branches to pounce on unsuspecting prey below. (nationalgeographic.com)")
    }
    else if (animalID == "frog") {
        var text = document.getElementById("animalText")
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Red eyed tree frogs seem like they wouldn't survive well in the wild due to their color. However, they tuck their legs in close to its body and close their eyes to hide. When they sense a predator, they open their eyes and jump away, exposing their bright colors. At night, when they are less at risk of becoming a meal, the frogs are much more active. They spend time hunting for insects. One cool fact is that they use their eyes to help them swallow. They retract their eyes into their body to push the meal down their throats. (mentalfloss.com)")

    }
    else if (animalID == "monkey") {
        var text = document.getElementById("animalText")
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Spider monkeys live in wet and dense tropical rainforests. Unfortunately, the number of spider monkeys is constantly decreasing because of the habitat loss, intense deforestation, hunt (indigenous people eat the meat of spider monkeys), and pet trade. They are listed as critically, endangered animals. One cool fact is that spider monkeys are named that way because they hang from the trees by holding different branches with their limbs and long tails, shaped like spiders. (softschools.com)")
    }
    else if (animalID == "toucan") {
        var text = document.getElementById("animalText")
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Toucan’s most recognizable trait is their beak made of protein keratin that has many air pockets allowing for a very low mass. Their beak allows them to peel fruit—their main source of food. Toucans are not very good at flying, so they get around by hopping. They nest in the hollows of trees. (animalfactguide.com)")
    }
    else if (animalID == "chicken") {
        var text = document.getElementById("animalText")
        text.setAttribute("visible", "true");
        text.setAttribute("value", "People have been raising chickens for more than 7,000 years. Chickens were first domesticated in Indian and China. You might think of chickens as farm animals, but even people in cities can raise a few chickens in the backyard. Chicken coops don’t take up much room.Chickens are raised mostly for their eggs and meat, but chickens also make good pets. Some chickens are very tame and will allow you to hold or pet them. Chickens eat almost anything – grass, bugs, fruit, vegetables and table scraps. If you don’t clean your plate, your chickens will!(easyscienceforkids.com)")
    }
    else if (animalID == "cow") {

    }
    else if (animalID == "sheep") {

    }
    else if (animalID == "pig") {

    }

}

function correctAnimal(animalID) {
    info(animalID);
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
        }
        else {
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
    if (oldScene == "rainforest-scene") {
        sceneNum = 1;
    }
    else if (oldScene == "farm-scene") {
        sceneNum = 2;
    }
    else if (oldScene == "ocean-scene") {
        sceneNum = 3;
    }
    beginGame();

    var scene = document.querySelector('a-scene');
    scene.removeAttribute("rain")

    var oldScene = document.getElementById(oldScene);
    var newScene = document.getElementById(newScene);
    oldScene.setAttribute("visible", "false");
    newScene.setAttribute("visible", "true");

    var box1 = document.getElementById(box1);
    var box2 = document.getElementById(box2);
    var box3 = document.getElementById(box3);
    var box4 = document.getElementById(box4);
    box1.setAttribute("position", "0 1000 0");
    box2.setAttribute("position", "0 1000 0");
    box3.setAttribute("position", "0 1000 0");
    box4.setAttribute("position", "0 1000 0");

    var oldSceneSound = document.getElementById(oldSceneSound);
    var newSceneSound = document.getElementById(newSceneSound);
    oldSceneSound.components.sound.pauseSound();
    newSceneSound.components.sound.playSound();
    /*    oldSceneSound.setAttribute("autoplay", "false");
        oldSceneSound.setAttribute("volume", "0");
        newSceneSound.setAttribute("autoplay", "true");*/
}

//give each animal an id

//onclick, set value of animal's clicked function to true (define a variable to identify it as the one clicked?)

//if correct animal==animal clicked, then make a "correct" sound, else make an "incorrect" sound
//if correct animal==animal clicked, then add 1 to score counter

//if score counter == number of animals in the ecosystem, then display transition box --> move to new ecosystem
require('aframe');
require('aframe-rain');
