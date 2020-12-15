
import Pokemon from "./pokemon.js";
import { pokemons } from "./pokemons.js";
import random from "./utils.js";
import start from "./buttons.js";

class Game{
    elImg1 = document.getElementById(`img-player1`);
    elImg2 = document.getElementById(`img-player2`);
    elName1 = document.getElementById(`name-player1`);
    elName2 = document.getElementById(`name-player2`);
    player1;
    player2;
    constructor() {
        const first = pokemons[random(5)];
        console.log(first);
        this.player1 = new Pokemon({
            ...first,
            selectors:'player1'
        });
        
        this.elImg1.src = first.img;
        this.elName1.innerText = this.player1.name;

        const second = pokemons[random(5)];
        console.log(second);
        this.player2 = new Pokemon({
            ...second,
            selectors:'player2'
        });
        this.elImg2.src = second.img;
        this.elName2.innerText = this.player2.name;

        start(this.player1, this.player2, this);
    }

    getFirst = () => {
        const first = pokemons[random(5)];
        console.log(first);
        this.player1 = new Pokemon({
            ...first,
            selectors:'player1'
        });
        this.elImg1.src = first.img;
        this.elName1.innerText = this.player1.name;
        return this.player1;
    }

    getSecond = () => {
        const second = pokemons[random(5)];
        console.log(second);
        this.player2 = new Pokemon({
            ...second,
            selectors:'player2'
        });
        this.elImg2.src = second.img;
        this.elName2.innerText = this.player2.name;
        return this.player2;
    }

    startGame = () => {
        this.getFirst();

        this.getSecond();

        const allButtons = document.querySelectorAll(".control .button");
        allButtons.forEach($item => $item.remove());
        start(this.player1, this.player2, this);
    }

    newEnemy = () => {
        const second = pokemons[random(5)];
        this.player2 = new Pokemon({
            ...second,
            selectors:'player2'
        });
        console.log(this.player2);
        this.player2.hp.current = this.player2.hp.total;
        this.elImg2.src = second.img;
        this.elName2.innerText = this.player2.name;
        return this.player2
    }
}

export default Game;