
function pointCollide(x, y, xEnemy, yEnemy, heightEnemy, widthEnemy)
{
    return x >= xEnemy  && x <= xEnemy + widthEnemy  && y >= yEnemy - heightEnemy  && y <= yEnemy
}

export function isCollided(heightPlayer, widthPlayer, heightEnemy, widthEnemy, player, enemy)
{
    const positionPlayer = player.getBoundingClientRect()
    const positionEnemy = enemy.getBoundingClientRect()
    const xPlayer = positionPlayer.x;
    const yPlayer = positionPlayer.y;
    const xEnemy = positionEnemy.x;
    const yEnemy = positionEnemy.y;
    return pointCollide(xPlayer,yPlayer,xEnemy,yEnemy, heightEnemy, widthEnemy) || 
    pointCollide(xPlayer + widthPlayer - 5, yPlayer, xEnemy, yEnemy, heightEnemy, widthEnemy) ||
    pointCollide (xPlayer, yPlayer - heightPlayer - 5, xEnemy, yEnemy, heightEnemy, widthEnemy) ||
    pointCollide (xPlayer + widthPlayer - 5, yPlayer - heightPlayer -5, xEnemy, yEnemy, heightEnemy, widthEnemy)

}

