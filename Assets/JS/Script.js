function triggerModal(id){

  if(id == 1){
    $('#landingModal').modal('show');
  }

}

function updatePlayerStats(){


  element.playerCurrentHealthText.innerHTML = Player.currentHealth;
  element.playerTotalHealthText.innerHTML = Player.totalHealth;
  element.chanceToHitText.innerHTML = Player.chanceToHit;
  element.attacksPerSecondText.innerHTML = Player.attacksPerSecond;
  element.armorText.innerHTML = Player.armor;
  element.evasionRatingText.innerHTML = Player.evasionRating;
  element.chanceToEvadeText.innerHTML = Player.chanceToEvade;
  element.fireResText.innerHTML = Player.fireRes;
  element.coldResText.innerHTML = Player.coldRes;
  element.lightResText.innerHTML = Player.lightRes;


}
