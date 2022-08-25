import {player} from './actors.js'

player.style.animationName = "none"

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