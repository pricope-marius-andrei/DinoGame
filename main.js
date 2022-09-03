import {player,EnemyOutside,enemies} from './actors.js'
import {SpawnEnemies} from './spawnManager.js'
import {isCollided} from './detectCollision.js'
import {stopGame,gameOver,UpdateScore,Restart} from './gameManager.js'
import {highScore} from './designElements.js'

//initialize values
player.style.animationName = "none"
if(localStorage.getItem('highscore'))
    highScore.textContent = "HI: " + localStorage.getItem('highscore')

//values
var score = 0;
var dificulty = 1500;

//Update loop
function Update()
{
    window.requestAnimationFrame(Update);
    EnemyOutside();
    UpdateScore(score)

    if(!gameOver)
        if(isCollided(40,40,20,20,player,enemies[0]))
        {
            //I lost the game
            stopGame()
            //Stop spawn interval
            clearInterval(spawnInterval)
            Restart()
            if(score > localStorage.getItem('highscore'))
                localStorage.setItem('highscore', score)
        }
    else
    {
        score++
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
            },1100); 
        }
    }
})

//Spawn enemies
var spawnInterval = setInterval(SpawnEnemies,dificulty)
