import { enemies, player } from "./actors.js"
import { gameOverText, resetButton } from "./designElements.js";
export var gameOver = false
export let score = 0;

export function stopGame()
{
   gameOver = true;
   for(let i = 0 ; i < enemies.length ; i++)
   {
        enemies[i].style.animationPlayState = 'paused'
   }
   player.style.animationPlayState = 'paused'
   gameOverText.style.display = 'flex'
   resetButton.style.display = 'inline'
}

export function updateScore(score)
{
    const scoreObject = document.getElementById("score")
    scoreObject.textContent = "Score:" + score;
}
