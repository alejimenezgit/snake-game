class Snake {
  constructor() {
    this.body = [
      { row: 1, column: 5 },
      { row: 1, column: 4 },
      { row: 1, column: 3 },
      { row: 1, column: 2 },
      { row: 1, column: 1 },
    ]
    this.direction = 'right';
    this.intervalId = undefined;
  }

  _moveForward() {
    switch (this.direction) {
      case 'right':
        this.body.unshift({
          row: this.body[0].row,
          column: (this.body[0].column + 1) % 50
        })
        break;

      default:
        break;
    }
    this.body.pop();
  }

  move() {
    this.intervalId = setInterval(this._moveForward.bind(this), 100);
  }
}