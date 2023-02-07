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
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomFromArray(randomarray){

  //Pick random from the zone one enemies array
  if(randomarray == 1){

    const randomElement = zoneOneEnemies[Math.floor(Math.random() * zoneOneEnemies.length)];
    return(randomElement);

  }

}

function checkIfEnemyDead(){

  //set an interval of a couple sec after they die because js is annoyin
    if(activeEnemy.currenthealth <= 0){

      checkIfEnemyDeadInterval = setInterval(function(){

        clearInterval(playerAttackInterval);
        loadEnemy();

        clearInterval(checkIfEnemyDeadInterval);

      }, 100);

    }


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

  fracNum = 1;

  formattednum = z.toFixed(2);

  finalnum = (Math.floor((formattednum / fracNum) * 100));

  return finalnum;


}


function updatePlayerStats(){

  Player.dps = "(" + Player.minimumHit + "-" + Player.maximumHit + ")";


  element.playerCurrentHealthText.innerHTML = Player.currentHealth;
  element.dpsText.innerHTML = Player.dps;
  element.chanceToHitText.innerHTML = Player.chanceToHit;
  element.playerAttackIntervalText.innerHTML = Player.attackInterval + "s";
  element.armorText.innerHTML = Player.armor;
  element.evasionRatingText.innerHTML = Player.evasionRating;
  element.chanceToEvadeText.innerHTML = Player.chanceToEvade;

}

function updateEnemyStats(){

  element.enemyChanceToHitText.innerHTML = activeEnemy.chanceToHit;
  element.enemyAttackIntervalText.innerHTML = activeEnemy.attackInterval + "s";

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

    activeEnemy.currenthealth = activeEnemy.maxhealth;

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

}


function attackEnemy(){

  playerAttackInterval = setInterval(function(){

    x = 0;
    y = 100;
    z = Player.chanceToHit;

    dmg = getRandomInt(Player.minimumHit, Player.maximumHit);
    hitroll = getRandomInt(x, y);


    if(hitroll <= Player.chanceToHit){

      activeEnemy.currenthealth -= dmg;

      //update healthbar
      element.enemyCurrentHealthText.innerHTML = activeEnemy.currenthealth;
      element.enemyHealthBar.value = activeEnemy.currenthealth;

      //Check enemy health
      checkIfEnemyDead();

      DisplayMessage("You hit the enemy for " + dmg + " total damage!");

    }else if (hitroll >= Player.chanceToHit) {
      DisplayMessage("Your attack missed!");
    }

  }, Player.attackInterval*1000);

}

// Selectzone() > StartCombat() > LoadEnemy() > SpawnEnemy() > Attack()

function startCombat(){

  //Choose an enemy to fight
  loadEnemy();

  //Make zone button invisible
  for (var i = 0; i < element.zoneButton.length; i++) {
        element.zoneButton[i].style.display = element.zoneButton[i].style.display == 'inline' ? 'none' : 'inline';
  }


}
