export const player = document.getElementById("player")
export const enemies = document.getElementsByClassName("enemy")

export function EnemyOutside()
{
    for(let i = 0 ; i < enemies.length; i++)
    {
        const position = enemies[0].getBoundingClientRect();
        if(position.x < 0)
        {
            enemies[0].remove();
        }
    }
}