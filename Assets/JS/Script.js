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

function updatePlayerStats(){


  element.playerCurrentHealthText.innerHTML = Player.currentHealth;
  element.playerTotalHealthText.innerHTML = Player.totalHealth;
  element.dpsText.innerHTML = Player.dps;
  element.chanceToHitText.innerHTML = Player.chanceToHit;
  element.attacksPerSecondText.innerHTML = Player.attacksPerSecond;
  element.armorText.innerHTML = Player.armor;
  element.evasionRatingText.innerHTML = Player.evasionRating;
  element.chanceToEvadeText.innerHTML = Player.chanceToEvade;
  element.fireResText.innerHTML = Player.fireRes;
  element.coldResText.innerHTML = Player.coldRes;
  element.lightResText.innerHTML = Player.lightRes;


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

  }

  //After enemy is chosen, set all of the stats/image
  element.activeEnemyImg.src = activeEnemy.src;
  //Set name
  element.enemyNameText.innerHTML = activeEnemy.name;

  //Set Health

  element.enemyCurrentHealthText.innerHTML = activeEnemy.health;
  element.enemyMaxHealthText.innerHTML = activeEnemy.health;

  element.enemyHealthBar.value = activeEnemy.health;
  element.enemyHealthBar.max = activeEnemy.health;

  //Make health bar visible
  element.enemyContent.style.display = "inline-block";

}

function startCombat(){

  //Choose an enemy to fight
  spawnEnemy();

  //Make zone button invisible
  for (var i = 0; i < element.zoneButton.length; i++) {
        element.zoneButton[i].style.display = element.zoneButton[i].style.display == 'inline' ? 'none' : 'inline';
  }


}
