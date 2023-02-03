let activeEnemy = {

};

let zoneOneEnemies = ["Goblin","Bat","Slime"];

let Enemy = {

  Goblin: {

    name: "Goblin",
    rarity: "",
    currenthealth: 10,
    maxhealth: getRandomInt(10, 15),
    armor: getRandomInt(1, 5),
    evasionRating: getRandomInt(40, 50),
    damage: getRandomInt(1, 3),
    src: "./Assets/Media/Art/Characters/Goblin.png"

  },

  Bat: {

    name: "Bat",
    rarity: "",
    currenthealth: 10,
    maxhealth: getRandomInt(8, 13),
    armor: getRandomInt(1, 5),
    evasionRating: getRandomInt(40, 50),
    damage: getRandomInt(1, 3),
    src: "./Assets/Media/Art/Characters/Bat.png"

  },

  Slime: {

    name: "Slime",
    rarity: "",
    currenthealth: 10,
    maxhealth: getRandomInt(10, 15),
    armor: getRandomInt(1, 5),
    evasionRating: getRandomInt(40, 50),
    damage: getRandomInt(1, 3),
    src: "./Assets/Media/Art/Characters/Slime.png"

  }


}
