export function isCollided(heightPlayer, widthPlayer, player, enemy)
{
    const positionPlayer = player.getBoundingClientRect()
    const positionEnemy = enemy.getBoundingClientRect()
    return positionEnemy.y > positionPlayer.y - heightPlayer && positionEnemy.y <= positionPlayer.y && positionEnemy.x < positionPlayer.x + widthPlayer && positionEnemy.x > positionPlayer.x
}

