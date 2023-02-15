let activeEnemy = {

};

let zoneOneEnemies = ["Goblin","Bat","Slime"];

let Enemy = {

  Goblin: {

    name: "Goblin",
    rarity: "",
    currentHealth: 10,
    maxhealth: getRandomInt(10, 15),
    armor: getRandomInt(1, 5),
    evasionRating: getRandomInt(40, 50),
    minimumHit: 1,
    maximumHit: 3,
    chanceToHit: 0,
    accuracyRating: getRandomInt(10, 25),
    attackInterval: 2.25,
    goldReward: getRandomInt(5, 8),
    src: "./Assets/Media/Art/Characters/Goblin.png"

  },

  Bat: {

    name: "Bat",
    rarity: "",
    currentHealth: 10,
    maxhealth: getRandomInt(8, 13),
    armor: getRandomInt(1, 5),
    evasionRating: getRandomInt(40, 50),
    minimumHit: 1,
    maximumHit: 3,
    chanceToHit: 0,
    accuracyRating: getRandomInt(10, 25),
    attackInterval: 1.5,
    goldReward: getRandomInt(6, 9),
    src: "./Assets/Media/Art/Characters/Bat.png"

  },

  Slime: {

    name: "Slime",
    rarity: "",
    currentHealth: 10,
    maxhealth: getRandomInt(10, 15),
    armor: getRandomInt(1, 5),
    evasionRating: getRandomInt(40, 50),
    minimumHit: 1,
    maximumHit: 3,
    chanceToHit: 0,
    accuracyRating: getRandomInt(10, 25),
    attackInterval: 2.5,
    goldReward: getRandomInt(5, 15),
    src: "./Assets/Media/Art/Characters/Slime.png"

  }


}
