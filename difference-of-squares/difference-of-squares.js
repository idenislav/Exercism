
export class Squares {
  constructor(theInput) {
    this.input = theInput;
  }

  get squareOfSum() {
    let n = this.input;
    let squareOfSum = 0;
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
    sum += i;
    }

    squareOfSum = Math.pow(sum, 2);
    return squareOfSum;
  }
  get sumOfSquares() {
  let n = this.input;
    let sumOfSquares = 0;

    for (let j = 1; j <= n; j++) {
       sumOfSquares += Math.pow(j, 2);
    }
    return sumOfSquares;
  }
  get difference() {
    return (this.squareOfSum - this.sumOfSquares);
    
  }
}






 