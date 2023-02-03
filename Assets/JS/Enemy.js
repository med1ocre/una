let activeEnemy = {

};

let zoneOneEnemies = ["Goblin","Bat","Slime"];

let Enemy = {

  Goblin: {

    name: "Goblin",
    rarity: "",
    health: getRandomInt(10, 15),
    armor: getRandomInt(1, 5),
    evasionRating: getRandomInt(10, 20),
    damage: getRandomInt(1, 3),
    src: "./Assets/Media/Art/Characters/Goblin.png"

  },

  Bat: {

    name: "Bat",
    rarity: "",
    health: getRandomInt(8, 13),
    armor: getRandomInt(1, 5),
    evasionRating: getRandomInt(20, 25),
    damage: getRandomInt(1, 3),
    src: "./Assets/Media/Art/Characters/Bat.png"

  },

  Slime: {

    name: "Slime",
    rarity: "",
    health: getRandomInt(10, 15),
    armor: getRandomInt(1, 5),
    evasionRating: getRandomInt(10, 20),
    damage: getRandomInt(1, 3),
    src: "./Assets/Media/Art/Characters/Slime.png"

  }


}
