// The Call Stack
const multiply  = (x,y) =>x*y;

const square   = x => multiply(x,x);

const isRightTriangle  = (a,b,c)=>(
    square(a)+square(b) === square(c)
);
console.log("Hi");
isRightTriangle(3,4,5);
console.log("Done");