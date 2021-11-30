var playerName=window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

    //console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Andoroid", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
    //console.log(enemyNames.length);



var fight = function (enemyName) {
    window.alert("Welcome to Robot Gradiator!");
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose."); 

    if (promptFight==="fight" || promptFight==="FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
console.log (playerName + " attack "  + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")

if (enemyHealth <= 0) {
    window.alert (enemyName + " has died");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " remaining.")
}

    playerHealth = playerHealth - enemyAttack;
console.log (enemyName + " attack " + playerName + " . " + playerName+ " now has " + playerHealth+ " health remaining.")

if (playerHealth <= 0) {
    window.alert (playerName + " has died!");
 }
else {
    window.alert (playerName + " still has " + playerHealth + " remaining.")
} 
    } else if (promptFight==="skip" || promptFight==="SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + "has decide to skip the fight, Goodbye!")
            playerMoney = playerMoney - 2 ;
        }
        else {
            fight();
        }
        
        //window.alert = (playerName + " has chosen to skip the file!");
    }
    else {
        window.alert("You need to choose a valid option. Try Again!")
    }
}
for(var i=0; i<enemyNames.length; i++) {

    fight (enemyNames[i]);
    // console.log(enemyNames[i]);
    // console.log(i);
    // console.log(enemyNames[i] + " is at " + i + " index");
}

