//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Matrix {
  constructor(input) {
    this.matrix = input.split('\n').map(row => row.split(' ').map((row) => parseInt(row)));
    
  }

  get rows() {
     return this.matrix;
  }

  get columns() {
    return this.rows[0].map((value, index) => this.rows.map(row => row[index]));
  }
}
let matrix = new Matrix("1");
