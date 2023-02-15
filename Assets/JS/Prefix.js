function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}

let Prefix = {

  Sword: [

    {

      IncreasedPhysicalDamage:{name: "% Increased Physical Damage", value: getRandomInt(5, 20)},

    },

    {

      IncreasedAccuracyRating:{name: "+ Accuracy Rating", value: getRandomInt(5, 30)},

    },

    {

      ReducedEnemyBlockChance:{name: "% Reduced Enemy Block Chance", value: getRandomInt(5, 15)},

    },

    {

      IncreasedDamageOverTime:{name: "% Increased Damage Over Time", value: getRandomInt(5, 20)},

    },

    {

      CausesBleedingOnHit:{name: "Causes Bleeding On Hit",},

    },

    {

      AddedColdDamage:{name: "Added Cold Damage", value: getRandomInt(5, 30)},

    },

    {

      AddedFireDamage:{name: "Added Fire Damage", value: getRandomInt(5, 30)},

    },

    {

      AddedLightningDamage:{name: "Added Lightning Damage", value: getRandomInt(5, 30)},

    }

  ],

  Armor: [],
  Amulet: []

}
