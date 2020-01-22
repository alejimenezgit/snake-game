class Game {
  constructor(options) {
    this.ctx = options.ctx
    this.snake = options.snake;
    this.interval = undefined;
    this.rows = options.rows;
    this.columns = options.columns;
    this.maxCells = options.maxCells;
  }

  _drawSnake() {
    this.snake.body.forEach(position => {
      this.ctx.fillRect(position.column * this.maxCells, position.row * this.maxCells, 8, 8);
    });
  }

  _update() {
    // limpiar
    this._kh7();
    // pintar
    this._drawSnake();
    if (this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }

  _assignControlsToKeys() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 38: // arrow up
          this.snake.goUp();
          break;
        case 40: // arror down
          this.snake.goDown();
          break;
        case 37: // arror left
          this.snake.goLeft();
          break;
        case 39: // arrow right
          this.snake.goRight();
          break;
        case 80: // p pause
          this.snake.intervalId ? this.snake.stop() : this.snake.move();
          break;
      }
    };
  }

  _kh7() {
    this.ctx.clearRect(0, 0, 500, 500)
  }

  start() {
    this._assignControlsToKeys();
    this.snake.move()
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }

}