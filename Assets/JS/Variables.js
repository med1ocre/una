let element = {

   playerCurrentHealthText: document.getElementById("PlayerCurrentHealth"),
   playerTotalHealthText: document.getElementById("PlayerTotalHealth"),
   playerRegenText: document.getElementById("PlayerRegen"),
   goldText: document.getElementById("gold"),
   dpsText: document.getElementById("DPS"),
   enemyDpsText: document.getElementById("EnemyDPS"),
   chanceToHitText: document.getElementById("ChanceToHit"),
   enemyChanceToHitText: document.getElementById("EnemyChanceToHit"),
   playerAttackIntervalText: document.getElementById("PlayerAttackInterval"),
   enemyAttackIntervalText: document.getElementById("EnemyAttackInterval"),
   armorText: document.getElementById("Armor"),
   evasionRatingText: document.getElementById("EvasionRating"),
   chanceToEvadeText: document.getElementById("ChanceToEvade"),
   fireResText: document.getElementById("FireRes"),
   coldResText: document.getElementById("ColdRes"),
   lightResText: document.getElementById("LightRes"),
   enemyCurrentHealthText: document.getElementById("EnemyCurrentHealth"),
   enemyMaxHealthText: document.getElementById("EnemyMaxHealth"),
   enemyNameText: document.getElementById("EnemyName"),
   readout1Text: document.getElementById("readout1"),
   readout2Text: document.getElementById("readout2"),
   readout3Text: document.getElementById("readout3"),
   readout4Text: document.getElementById("readout4"),
   readout5Text: document.getElementById("readout5"),
   shatteringDustText: document.getElementById("shatteringdust"),
   reformationDustText: document.getElementById("reformationdust"),
   polishingDustText: document.getElementById("polishingdust"),
   swordBaseAmountText: document.getElementById("swordbaseamount"),
   armorBaseAmountText: document.getElementById("armorbaseamount"),
   amuletBaseAmountText: document.getElementById("amuletbaseamount"),




   startCombatBtn: document.getElementById("ZoneButton"),
   startDungeonBtn: document.getElementById("DungeonButton"),


   activeEnemyImg: document.getElementById("ActiveEnemyImg"),


   zoneButton: document.getElementsByClassName('ZoneButton'),
   dustButtons: document.getElementsByClassName('dustbuttons'),


   enemyHealthBar: document.getElementById("EnemyHealthBar"),
   playerHealthBar: document.getElementById("PlayerHealthBar"),
   shatteringDustBar: document.getElementById("ShatteringDustBar"),
   reformationDustBar: document.getElementById("ReformationDustBar"),
   polishingDustBar: document.getElementById("PolishingDustBar"),


   enemyContent: document.getElementById("EnemyContent"),
   enemyContentStats: document.getElementById("EnemyContentStats"),
   loader: document.getElementById("Loader"),


}


let flag = {


  zoneOne: 0,
  zoneTwo: 0,

  swordBaseSelected: false,


}
