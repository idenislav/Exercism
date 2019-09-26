export class QueenAttack {
    constructor(positions) {
      this._whitePos = positions ? positions.white : [0, 3];
      this._blackPos = positions ? positions.black : [7, 3];
  
      if (this._whitePos[0] == this._blackPos[0] &&
          this._whitePos[1] == this._blackPos[1]) {
        throw new Error('Queens cannot share the same space')
      }
    }
  
    get white() {
      return this._whitePos;
    }
  
    get black() {
      return this._blackPos;
    }
  
    toString() {
      let board = [];
      for (let x = 0; x < 8; x++) {
        let row;
        for (let i = 0; i < 8; i++) {
          let square = '_'
          if (x == this._blackPos[0] && i == this._blackPos[1]) {
            square = 'B';
          }
          if (x == this._whitePos[0] && i == this._whitePos[1]) {
            square = 'W';
          }
          row = row ? row.concat(` ${square}`) : square;
        }
        if (x == 7) {row = `${row}\n`}
        board.push(row)
      }
  
      return board.join('\n');
    }
  
    canAttack() {
      if (this._blackPos[0] == this._whitePos[0] ||
          this._blackPos[1] == this._whitePos[1] ||
          Math.abs(this._blackPos[0] - this._whitePos[0]) ==
          Math.abs(this._blackPos[1] - this._whitePos[1])) {
            return true;
          }
      return false;
    }
  }