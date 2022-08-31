import {player,EnemyOutside} from './actors.js'
import {SpawnEnemies} from './spawnManager.js'

player.style.animationName = "none"

//Update loop
function Update()
{
    window.requestAnimationFrame(Update);
    EnemyOutside();
    
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
setInterval(SpawnEnemies,2000);