import {player,EnemyOutside,enemies} from './actors.js'
import {SpawnEnemies} from './spawnManager.js'
import {isCollided} from './detectCollision.js'
import {stopGame,gameOver} from './gameManager.js'

player.style.animationName = "none"

//Update loop
function Update()
{
    window.requestAnimationFrame(Update);
    EnemyOutside();

    if(!gameOver)
        if(isCollided(20,20,player,enemies[0]))
        {
            //I lost the game
            stopGame()
            //Stop spawn interval
            clearInterval(spawnInterval)
        }
}

window.requestAnimationFrame(Update);

//Movement player
window.addEventListener('keydown', function(event) {
    if(player.style.animationName === "none") {
        if(event.key == ' ')
        {
            player.style.animationName = "movement";
            this.setTimeout(function(){
                player.style.animationName = "none"
            },1300); 
        }
    }
})

//Spawn enemies
var spawnInterval = setInterval(SpawnEnemies,2000)
    