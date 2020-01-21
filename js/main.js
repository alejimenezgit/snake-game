let ctx;
let game;
document.addEventListener('DOMContentLoaded', (event) => {
  //the DOM is ready, we can do what we want!
  let canvas = document.getElementById('snake')
  ctx = canvas.getContext('2d');
  game = new Game(ctx, new Snake());

})