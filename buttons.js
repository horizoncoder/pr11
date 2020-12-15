import random from "./utils.js";
import log from "./logs.js"

const start = (player1, player2, Game) => {

    function countBtn(count, el){
        const innerText = el.innerText;
        el.innerText = `${innerText} (${count})`;
        return function () {
            count--;
            if(count == 0){
                el.disabled = true;
            }
            if(player1.hp.current == 0){
                el.disabled = true;
                return true;
            }
            if(player2.hp.current == 0){
              
                player2 = Game.newEnemy();
            }
            el.innerText = `${innerText} (${count})`;
            return false;
        }
    }

    const $control = document.querySelector('.control');

    player1.attacks.forEach(item => {
        console.log(item);
        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $btn.innerText = item.name;
        const btnCount = countBtn(item.maxCount, $btn);
        $btn.addEventListener('click', function() {
            console.log('Click button', $btn.innerText);
            if(!btnCount()){
                player2.changeHP(random(item.maxDamage, item.minDamage), function(count) {
                    log(player1, player2, count);
                })
                player1.changeHP(random(player2.attacks[0].maxDamage, player2.attacks[0].minDamage), function(count) {
                    log(player2, player1, count);
                })
            }
        });

        $control.appendChild($btn);
    });
}

export default start; 