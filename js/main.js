let ctx;
let game;
document.addEventListener('DOMContentLoaded', (event) => {
  //the DOM is ready, we can do what we want!
  let canvas = document.getElementById('snake')
  ctx = canvas.getContext('2d');
  const widthCell = 10;
  game = new Game({
    ctx,
    rows: canvas.width / widthCell,
    columns: canvas.height / widthCell,
    maxCells: widthCell,
    snake: new Snake(canvas.width / widthCell, canvas.height / widthCell),
  });

})