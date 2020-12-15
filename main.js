
import game from "./game.js";

const Game = new game();
const $btn = document.getElementById('btn-res');

$btn.addEventListener('click', function() {
    Game.startGame();
});