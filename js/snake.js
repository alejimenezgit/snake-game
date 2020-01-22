class Snake {
  constructor(maxRows, maxColumns) {
    this.body = [
      { row: 1, column: 5 },
      { row: 1, column: 4 },
      { row: 1, column: 3 },
      { row: 1, column: 2 },
      { row: 1, column: 1 },
    ];
    this.maxRows = maxRows;
    this.maxColumns = maxColumns;
    this.direction = 'right';
    this.intervalId = undefined;
  }

  _moveForward() {
    var head = this.body[0];
    switch (this.direction) {
      case "up":
        this.body.unshift({
          row: (head.row - 1 + this.maxRows) % this.maxRows,
          column: head.column
        });
        break;
      case "down":
        this.body.unshift({
          row: (head.row + 1) % this.maxRows,
          column: head.column
        });
        break;
      case "left":
        this.body.unshift({
          row: head.row,
          column: (head.column - 1 + this.maxColumns) % this.maxColumns
        });
        break;
      case "right":
        this.body.unshift({
          row: head.row,
          column: (head.column + 1) % this.maxColumns
        });
        break;
    }
    this.previousTail = this.body.pop();
  }

  goUp() {
    if (this.direction === "left" || this.direction === "right") {
      this.direction = "up";
    }
  }

  goDown() {
    if (this.direction === "left" || this.direction === "right") {
      this.direction = "down";
    }
  }

  goLeft() {
    if (this.direction === "up" || this.direction === "down") {
      this.direction = "left";
    }
  }

  goRight() {
    if (this.direction === "up" || this.direction === "down") {
      this.direction = "right";
    }
  }

  move() {
    this.intervalId = setInterval(this._moveForward.bind(this), 100);
  }
}