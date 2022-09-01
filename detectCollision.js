
function pointCollide(x, y, xEnemy, yEnemy, heightPlayer, widthPlayer)
{
    return x >= xEnemy && x <= xEnemy + widthPlayer && y >= yEnemy - heightPlayer && y <= yEnemy
}

export function isCollided(heightPlayer, widthPlayer, player, enemy)
{
    const positionPlayer = player.getBoundingClientRect()
    const positionEnemy = enemy.getBoundingClientRect()
    const xPlayer = positionPlayer.x;
    const yPlayer = positionPlayer.y;
    const xEnemy = positionEnemy.x;
    const yEnemy = positionEnemy.y;
    return pointCollide(xPlayer,yPlayer,xEnemy,yEnemy,heightPlayer,widthPlayer) || 
    pointCollide(xPlayer + widthPlayer, yPlayer, xEnemy, yEnemy, heightPlayer, widthPlayer) ||
    pointCollide (xPlayer, yPlayer - heightPlayer, xEnemy,yEnemy,heightPlayer, widthPlayer) ||
    pointCollide (xPlayer + widthPlayer, yPlayer - heightPlayer, xEnemy, yEnemy, heightPlayer,widthPlayer)

}

