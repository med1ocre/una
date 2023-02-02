function triggerModal(id){

  if(id == 1){
    $('#landingModal').modal('show');
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

function toggleZones(){

  //Make start btn invisible
  element.startCombatBtn.style.display = "none";
  //Make zone buttons visible
  for (var i = 0; i < element.zoneButton.length; i++) {
        element.zoneButton[i].style.display = element.zoneButton[i].style.display == 'inline' ? 'none' : 'inline';
  }

}

function startCombat(){



  //Choose an enemy to fight



}
