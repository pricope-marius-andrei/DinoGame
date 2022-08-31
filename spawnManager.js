export function SpawnEnemies()
{
    const background = document.getElementById("background")
    const enemy = document.createElement('div');
    enemy.className = 'enemy'
    background.appendChild(enemy);
}