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
        animals = ["Emma", "Kennedy", "Faith", "Dana", "Taylor", "Melanie", "Alex", "Marley", "Anya", "Kaylin", "Rachael", "Kammy", "Annebelle", "CJ",
            "Alexandra", "Amanda", "Blossom", "Carly", "Elaine", "Zahwa", "Aliza", "Priya"
        ]
        noises = ["emmaSound", "kennedySound", "faithSound", "danaSound", "taylorSound", "melanieSound", "alexSound", "marleySound", "anyaSound",
            "kaylinSound", "rachaelSound", "kammySound", "annebelleSound", "cjSound", "alexandraSound", "amandaSound", "blossomSound", "carlySound",
            "elaineSound", "zahwaSound", "alizaSound", "priyaSound"
        ]
    }
    console.log(animals)
    console.log(noises)
    if (sceneNum == 3) {
        used = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
    }
    else {
        used = ["0", "0", "0", "0"]
    }
}

function animalGuess() {
    displayAnimal();
    playSound(randomAnimal);
}


function displayAnimal() {
    if (moveOn == true) {
        moveOn = false;
        //removes "correct/incorrect" text from previous animal when sphere is clicked
        var helper = sceneNum + 1;
        var textID = "correct" + (sceneNum + 1)
        var text2 = document.getElementById(textID)
        text2.setAttribute("visible", "false")

        var displayID = "display" + helper;
        var text = document.getElementById(displayID)
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
    var helper = sceneNum + 1;
    var textID = "animalText" + (sceneNum + 1)
    console.log(textID)
    if (animalID == "jaguar") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Jaguars unexpectedly live in the rainforest. They have incredibly powerful jaws, strong enough to pierce a skull and crack a sea turtle’s shell. They are fearsome predators and will hunt anything from frogs, fish and reptiles to livestock, cows and deer. If necessary jaguars are competent climbers and will scale trees. They often use their high position among the branches to pounce on unsuspecting prey below. (nationalgeographic.com)")
    }
    else if (animalID == "frog") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Red eyed tree frogs seem like they wouldn't survive well in the wild due to their color. However, they tuck their legs in close to its body and close their eyes to hide. When they sense a predator, they open their eyes and jump away, exposing their bright colors. At night, when they are less at risk of becoming a meal, the frogs are much more active. They spend time hunting for insects. One cool fact is that they use their eyes to help them swallow. They retract their eyes into their body to push the meal down their throats. (mentalfloss.com)")

    }
    else if (animalID == "monkey") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Spider monkeys live in wet and dense tropical rainforests. Unfortunately, the number of spider monkeys is constantly decreasing because of the habitat loss, intense deforestation, hunt (indigenous people eat the meat of spider monkeys), and pet trade. They are listed as critically, endangered animals. One cool fact is that spider monkeys are named that way because they hang from the trees by holding different branches with their limbs and long tails, shaped like spiders. (softschools.com)")
    }
    else if (animalID == "toucan") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Toucan’s most recognizable trait is their beak made of protein keratin that has many air pockets allowing for a very low mass. Their beak allows them to peel fruit—their main source of food. Toucans are not very good at flying, so they get around by hopping. They nest in the hollows of trees. (animalfactguide.com)")
    }
    else if (animalID == "chicken") {
        console.log("should change chicken text")
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "People have been raising chickens for more than 7,000 years. Chickens were first domesticated in Indian and China. You might think of chickens as farm animals, but even people in cities can raise a few chickens in the backyard. Chicken coops don’t take up much room.Chickens are raised mostly for their eggs and meat, but chickens also make good pets. Some chickens are very tame and will allow you to hold or pet them. Chickens eat almost anything – grass, bugs, fruit, vegetables and table scraps. If you don’t clean your plate, your chickens will!(easyscienceforkids.com)")
    }
    else if (animalID == "cow") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Cows are cud chewing mammals, known as ruminants. Until the 1950s, almost every family had their own cow and now, dairy cows produce more than 90% of the world's milk supply. Below is a list of interesting facts and information about cows.Did you know that all ‘cows’ are female? Only males are called bulls. Before having a calf, a cow is called a heifer. In order for a cow to produce milk, they must first have a calf.(farmsforcitykids.com)")
    }
    else if (animalID == "sheep") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Sheep are the first animal to be domesticated in Asia. These mammals are believed to have originated in Asia and Europe. Now they are very common in Australia and America. There are more than one billion sheep in the entire world. The country with the largest number of sheep in the world is China. In 1996, the first mammal to be cloned from a somatic cell was a sheep named Dolly. Did you know there are more sheep in New Zealand than people?(easyscienceforkids.com)")
    }
    else if (animalID == "pig") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Although, they have an image of dirty animal but in actual, they are quite clean. They roll off in the mud just to cool themselves off. If we will keep them in a cool environment, they will stay very clean. They are very curious and intelligent animals. They can be easily found all over the world.They are extremely social animals. They use different types of loud vocal expressions to communicate with each other.Mother pigs sing to their young.(easyscienceforkids.com)")
    }
    else if (animalID == "whale") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Whales are the largest animals that have ever lived on earth and are the largest animals that live in the ocean. They are even bigger than the largest dinosaur and it is believed that millions of years ago, whales probably walked upon land. Their back legs disappeared over time and their front legs became flippers. Whales are mammals, so they feed milk to their babies and breathe air. Since whales are not fish they do not have gills, so they cannot breathe under water. They must come up to the surface of the water to get air.(kidskonnect.com)")
    }
    else if (animalID == "dolphin") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "Dolphins are sometimes thought of as the dogs of the sea because they are usually playful and friendly. They’re also among the smartest animals on Earth. Dolphins are water mammals. Scientists believe they’re as smart as chimpanzees or dogs. They live in rivers and oceans, but they must come up to breathe air.Like bats, dolphins use echolocation to find food and objects.(easyscienceforkids.com)")
    }
    else if (animalID == "seal") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "When you think of a seal, you might think of the animals that perform tricks at water amusement parks, but these animals are usually sea lions, not seals. Sea lions have large front flippers which help them get around on land, while seals are slow and awkward. Seals are definitely made for swimming!There are more than 30 species of seals living in many parts of the world. Seals eat fish, birds and shellfish and most of them live in cold water where fish are plentiful. The Caspian seal is the world’s smallest seal, weighing as much as an adult woman.(easyscienceforkids.com)")
    }
    else if (animalID == "penguin") {
        var text = document.getElementById(textID)
        text.setAttribute("visible", "true");
        text.setAttribute("value", "There are 17 species of penguin, each slightly different. All of the species live in the Southern hemisphere. Many live at the South Pole on Antarctica Some are found on the coasts of South America, the Galapagos Islands, Australia, Africa, and New Zealand. There may be as many as 100 million penguins in the world.Penguins eat seafood. Their main diet is fish, though they’ll also eat squid, small shrimplike animals called “krill” and crustaceans. If you look closely at a penguin’s bill you’ll notice a hook at the end, perfect for grabbing dinner. They also have backward facing bristles on their tongues that helps slippery seafood from getting away.(kidskonnect.com)")
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
            var helper = sceneNum + 1;
            var textID = "correct" + (sceneNum + 1)
            var text2 = document.getElementById(textID)
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
            var helper = sceneNum + 1;
            var textID = "correct" + (sceneNum + 1)
            var text2 = document.getElementById(textID)
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
    else if (randomAnimal == animals[4]) {
        console.log("shouldn't be here")
        var monkey = document.getElementById(noises[4])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[5]) {
        var monkey = document.getElementById(noises[5])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[6]) {
        var monkey = document.getElementById(noises[6])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[7]) {
        var monkey = document.getElementById(noises[7])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[8]) {
        var monkey = document.getElementById(noises[8])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[9]) {
        var monkey = document.getElementById(noises[9])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[10]) {
        var monkey = document.getElementById(noises[10])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[11]) {
        var monkey = document.getElementById(noises[11])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[12]) {
        var monkey = document.getElementById(noises[12])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[13]) {
        var monkey = document.getElementById(noises[13])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[14]) {
        var monkey = document.getElementById(noises[14])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[15]) {
        var monkey = document.getElementById(noises[15])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[16]) {
        var monkey = document.getElementById(noises[16])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[17]) {
        var monkey = document.getElementById(noises[17])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[18]) {
        var monkey = document.getElementById(noises[18])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[19]) {
        var monkey = document.getElementById(noises[19])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[20]) {
        var monkey = document.getElementById(noises[20])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
    else if (randomAnimal == animals[21]) {
        var monkey = document.getElementById(noises[21])
        monkey.components.sound.playSound();
        console.log("should play monkey sound")
    }
}

function changeScene(oldScene, newScene, box1, box2, box3, box4, oldSceneSound, newSceneSound, sceneSphere) {
    if (allUsed() == true) {
        console.log("plz work")
        moveOn = true;
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

        var sphere = document.getElementById(sceneSphere);
        sphere.setAttribute("position", "0 1000 0")

        var oldSceneSound = document.getElementById(oldSceneSound);
        var newSceneSound = document.getElementById(newSceneSound);
        oldSceneSound.components.sound.pauseSound();
        newSceneSound.components.sound.playSound();

        var helper = sceneNum +1;
       var displayID = "display" + helper;
        var text = document.getElementById(displayID)
        text.setAttribute("visible", "false")
    }
    else {
        var helper = sceneNum +1;
       var displayID = "display" + helper;
        var text = document.getElementById(displayID)
        text.setAttribute("visible", "true")
        text.setAttribute("value", "You have not finished this stage yet!")
    }

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
