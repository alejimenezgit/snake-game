class Game {
  constructor(ctx, snake) {
    this.ctx = ctx
    this.snake = snake;
    this.interval = undefined;
  }

  _drawSnake() {
    this.snake.body.forEach(position => {
      this.ctx.fillRect(position.column * 10, position.row * 10, 8, 8);
    });
  }

  _update() {
    // limpiar
    this._kh7();
    // pintar
    this._drawSnake();
    console.log('update');
    if (this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }

  _kh7() {
    this.ctx.clearRect(0, 0, 500, 500)
  }

  start() {
    this.snake.move()
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }

}