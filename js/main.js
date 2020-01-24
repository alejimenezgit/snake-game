let ctx;
let game;
document.addEventListener('DOMContentLoaded', (event) => {
  //the DOM is ready, we can do what we want!
  let canvas = document.getElementById('snake')
  ctx = canvas.getContext('2d');
  const widthCell = 10;

  function printGameOver() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  };

  function start() {
    game.start();
    const startBtn = document.getElementById('start');
    startBtn.style = "display: none";
  }

  const startBtn = document.getElementById('start');
  startBtn.addEventListener('click', start);

  game = new Game({
    ctx,
    rows: canvas.width / widthCell,
    columns: canvas.height / widthCell,
    maxCells: widthCell,
    snake: new Snake(canvas.width / widthCell, canvas.height / widthCell),
  }, printGameOver); // we don't call the function we just pass the reference, the function will be invoked snakes dies.

})