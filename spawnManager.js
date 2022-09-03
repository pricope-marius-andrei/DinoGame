export function SpawnEnemies()
{
    const background = document.getElementById("background")
    const enemy = document.createElement('div')
    const egg = document.createElement('img')
    background.appendChild(enemy)
    enemy.appendChild(egg)
    egg.src = './actors/egg.png'
    egg.className = 'enemy'
}