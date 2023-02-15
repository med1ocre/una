function triggerModal(id){

  if(id == 1){
    $('#landingModal').modal('show');
  }

  if(id == 2){
    $('#signUpModal').modal('show');
  }

  if(id == 3){
    $('#logInModal').modal('show');
  }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}

//Pick multiple random items from array
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function getRandomFromArray(randomarray){

  //Pick random from the zone one enemies array
  if(randomarray == 1){

    const randomElement = zoneOneEnemies[Math.floor(Math.random() * zoneOneEnemies.length)];
    return(randomElement);

  }

}



function stopPlayerHealthRegen(){

  if(typeof(playerRegenInterval) != 'undefined'){
    clearInterval(playerRegenInterval);
  }

  element.playerRegenText.style.display = "none";

}

function dropGold(amount){

  min = 0;
  max = 100;

  chance = getRandomInt(min, max);

  if(chance >= 50){

    Player.gold += activeEnemy.goldReward;

    DisplayMessage("The enemy dropped " + activeEnemy.goldReward + " gold");

  }

}

function checkIfEnemyDead(){

  //set an interval of a couple sec after they die because js is annoyin
    if(activeEnemy.currentHealth <= 0){

      checkIfEnemyDeadInterval = setInterval(function(){

        dropGold(activeEnemy.goldReward);
        dropDust();
        dropBase();

        clearInterval(playerAttackInterval);
        clearInterval(enemyAttackInterval);
        loadEnemy();

        clearInterval(checkIfEnemyDeadInterval);

      }, 100);

    }


}

function checkIfPlayerDead(){

  //set an interval of a couple sec after they die because js is annoyin
    if(Player.currentHealth <= 0){

      checkIfPlayerDeadInterval = setInterval(function(){

        clearInterval(enemyAttackInterval);
        clearInterval(playerAttackInterval);
        clearInterval(checkIfPlayerDeadInterval);

        Player.currentHealth = 0;
        stopCombat();
        DisplayMessage("You have Died!");

        //Start regening health
        regenPlayerHealth(Player.healthRegen);
        element.playerRegenText.style.display = "inline-block";

      }, 100);

    }
}

function regenPlayerHealth(regenamount){

  playerRegenInterval = setInterval(function(){

    Player.currentHealth += regenamount;

    if(Player.currentHealth == Player.totalHealth){

      clearInterval(playerRegenInterval);
      element.playerRegenText.style.display = "none";

    }

  }, 1000);

}

function DisplayMessage(msg){

  element.readout5Text.innerHTML = element.readout4Text.innerHTML;
  element.readout4Text.innerHTML = element.readout3Text.innerHTML;
  element.readout3Text.innerHTML = element.readout2Text.innerHTML;
  element.readout2Text.innerHTML = element.readout1Text.innerHTML;
  element.readout1Text.innerHTML = msg;


}

function calculateChanceToHit(attackeraccuracy, defenderevasion){

  x = defenderevasion*1/5;
  y = attackeraccuracy + Math.pow(x, 0.9);
  z = 1.25 * attackeraccuracy / y;


  //
  fracNum = 1;

  formattednum = z.toFixed(2);

  finalnum = (Math.floor((formattednum / fracNum) * 100));

  return finalnum;


}

function dropBase(){

  x = 0;
  min = 0;
  max = 100;

  ranNum = getRandomInt(min, max);


  if(ranNum >= 1 && ranNum <= 50){

    x = 1;

  }

  if(x == 1){

    ranNum = getRandomInt(min, max);

    if(ranNum >= 1 && ranNum <= 32){

      Player.armorBaseAmount += 1;

    }else if(ranNum >= 33 && ranNum <= 66){

      Player.swordBaseAmount += 1;

    }else if(ranNum >= 67 && ranNum <= 100){

      Player.amuletBaseAmount += 1;

    }

  }

}

function dropDust(){

  x = 0;
  min = 0;
  max = 100;

  ranNum = getRandomInt(min, max);


  if(ranNum >= 1 && ranNum <= 40){

    x = 1;

  }

  if(x == 1){

    ranNum = getRandomInt(min, max);
    if(ranNum == 1){

      Player.polishingDust += 1;

    }else if(ranNum >= 2 && ranNum <= 13){

      Player.reformationDust += 1;

    }else if(ranNum >= 14 && ranNum <= 100){

      Player.shatteringDust += 1;

    }

  }

}

function updatePlayerStats(){

  Player.dps = "(" + Player.minimumHit + "-" + Player.maximumHit + ")";

  element.shatteringDustBar.value = Player.shatteringDust;
  element.reformationDustBar.value = Player.reformationDust;
  element.polishingDustBar.value = Player.polishingDust;

  element.swordBaseAmountText.innerHTML = Player.swordBaseAmount;
  element.armorBaseAmountText.innerHTML = Player.armorBaseAmount;
  element.amuletBaseAmountText.innerHTML = Player.amuletBaseAmount;

  element.shatteringDustText.innerHTML = Player.shatteringDust;
  element.reformationDustText.innerHTML = Player.reformationDust;
  element.polishingDustText.innerHTML = Player.polishingDust;
  element.playerHealthBar.value = Player.currentHealth;
  element.playerHealthBar.max = Player.totalHealth;
  element.goldText.innerHTML = Player.gold;
  element.dpsText.innerHTML = Player.dps;
  element.chanceToHitText.innerHTML = Player.chanceToHit;
  element.playerAttackIntervalText.innerHTML = Player.attackInterval + "s";
  element.armorText.innerHTML = Player.armor;
  element.evasionRatingText.innerHTML = Player.evasionRating;

}

function updateEnemyStats(){

  element.enemyChanceToHitText.innerHTML = activeEnemy.chanceToHit;
  element.enemyAttackIntervalText.innerHTML = activeEnemy.attackInterval + "s";
  element.enemyDpsText.innerHTML = "(" + activeEnemy.minimumHit + "-" + activeEnemy.maximumHit + ")";

}


function selectZone(zone){

  if(zone == 1){

    flag.zoneOne = 1;

    startCombat();

  }else if (zone == 2) {

    flag.zoneTwo = 1;

  }


}

function toggleZones(){

  //Make start btn invisible
  element.startCombatBtn.style.display = "none";
  element.startDungeonBtn.style.display = "none";
  //Make zone buttons visible
  for (var i = 0; i < element.zoneButton.length; i++) {
        element.zoneButton[i].style.display = element.zoneButton[i].style.display == 'inline' ? 'none' : 'inline';
  }

}

function loadEnemy(){

  element.enemyContent.style.display = "none";
  element.activeEnemyImg.style.display = "none";
  element.loader.style.display = "inline-block";

  loadInterval = setInterval(function(){

    element.loader.style.display = "none";

    spawnEnemy();

    clearInterval(loadInterval);

  }, 1000)

}

function spawnEnemy(){

  if(flag.zoneOne == 1){

    let randomEnemy = getRandomFromArray(1);

    if(randomEnemy == "Goblin"){
      activeEnemy = Enemy.Goblin
    }else if (randomEnemy == "Bat") {
      activeEnemy = Enemy.Bat
    }else if (randomEnemy == "Slime") {
      activeEnemy = Enemy.Slime
    }

    activeEnemy.currentHealth = activeEnemy.maxhealth;

  }

  //After enemy is chosen, set all of the stats/image
  element.activeEnemyImg.style.display = "inline-block";
  element.activeEnemyImg.src = activeEnemy.src;
  //Set name
  element.enemyNameText.innerHTML = activeEnemy.name;

  //Set Health

  element.enemyCurrentHealthText.innerHTML = activeEnemy.maxhealth;
  element.enemyMaxHealthText.innerHTML = activeEnemy.maxhealth;

  element.enemyHealthBar.value = activeEnemy.maxhealth;
  element.enemyHealthBar.max = activeEnemy.maxhealth;

  //Make health bar and stats visible
  element.enemyContent.style.display = "inline-block";
  element.enemyContentStats.style.display = "block";


  //After the enemy has been spawned we need to calculate the players chance to hit
  Player.chanceToHit = calculateChanceToHit(Player.accuracyRating, activeEnemy.evasionRating);

  //And also calculate the enemies stats aswell!
  activeEnemy.chanceToHit = calculateChanceToHit(activeEnemy.accuracyRating, Player.evasionRating);

  //After calculating, attack!
  attackEnemy();
  enemyAttack();

}


function attackEnemy(){

  playerAttackInterval = setInterval(function(){

    x = 0;
    y = 100;
    z = Player.chanceToHit;

    dmg = getRandomInt(Player.minimumHit, Player.maximumHit);
    hitroll = getRandomInt(x, y);


    if(hitroll <= Player.chanceToHit){

      activeEnemy.currentHealth -= dmg;

      //update healthbar
      element.enemyCurrentHealthText.innerHTML = activeEnemy.currentHealth;
      element.enemyHealthBar.value = activeEnemy.currentHealth;

      //Check enemy health
      checkIfEnemyDead();

      DisplayMessage("You hit the enemy for " + dmg + " total damage!");

    }else if (hitroll >= Player.chanceToHit) {
      DisplayMessage("Your attack missed!");
    }

  }, Player.attackInterval*1000);

}

function enemyAttack(){

  enemyAttackInterval = setInterval(function(){

    x = 0;
    y = 100;
    z = activeEnemy.chanceToHit;

    dmg = getRandomInt(activeEnemy.minimumHit, activeEnemy.maximumHit);
    hitroll = getRandomInt(x, y);


    if(hitroll <= activeEnemy.chanceToHit){

      Player.currentHealth -= dmg;

      //Check enemy health
      checkIfPlayerDead();

      DisplayMessage(activeEnemy.name + " hit you for " + dmg + " total damage!");

    }else if (hitroll >= activeEnemy.chanceToHit) {
      DisplayMessage("The enemy missed!");
    }

  }, activeEnemy.attackInterval*1000);

}

// Selectzone() > StartCombat() > LoadEnemy() > SpawnEnemy() > Attack()

function startCombat(){

  stopPlayerHealthRegen();

  //Choose an enemy to fight
  loadEnemy();

  //Make zone button invisible
  for (var i = 0; i < element.zoneButton.length; i++) {
        element.zoneButton[i].style.display = element.zoneButton[i].style.display == 'inline' ? 'none' : 'inline';
  }


}

function stopCombat(){

  element.enemyContent.style.display = "none";
  element.enemyContentStats.style.display = "none";
  element.activeEnemyImg.style.display = "none";

  for (var i = 0; i < element.zoneButton.length; i++) {
        element.zoneButton[i].style.display = element.zoneButton[i].style.display == 'inline' ? 'none' : 'inline';
  }

}

function craftSword(){

  if(Player.swordBaseAmount >= 1){

    for (var i = 0; i < element.dustButtons.length; i++) {
          element.dustButtons[i].style.display = element.dustButtons[i].style.display == 'inline' ? 'none' : 'inline';
    }

    flag.swordBaseSelected = true;



  }else{

    DisplayMessage("You need a sword base first!");

  }

}

//the fuynction below is broken and will output and undefined, for some reason??? it was working 5 min before

function craftShattering(){

  if(Player.shatteringDust >= 1){


    if(flag.swordBaseSelected == 'false'){

      prefixAmount = getRandomInt(1,4);

      randomPrefixes = getRandom(Prefix.Sword, prefixAmount);



    }

  }

}
