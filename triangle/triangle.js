export class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    kind() {
        if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
            throw "test triangles with no size are illegal"
        }
        else if (this.a < 0 || this.b < 0 || this.c < 0) {
            throw "triangles with negative sides are illegal"
        }
        else if (((this.a + this.b) < this.c) || ((this.a + this.c) <
        this.b) || ((this.b + this.c) < this.a)) {
           throw 'triangles violating triangle inequality are illegal'
        }

        else if (this.a == this.b && this.a == this.c && this.b == this.c) {
            return 'equilateral';
        }
        else if (((this.a == this.b) && this.a != this.c) || ((this.a == this.c) &&
        (this.c != this.b)) || ((this.b == this.c) && (this.b != this.a)))
        return 'isosceles';

        else if (((this.a != this.b) && this.a != this.c) || ((this.a != this.c) &&
        (this.c != this.b)) || ((this.b != this.c) && (this.b != this.a)))
        return "scalene";
    }


}



 
