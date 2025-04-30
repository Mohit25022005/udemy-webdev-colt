const add =(x,y) => x+y;

const PI = 3.14;
const square = x=>x*x;

//module.exports = "HELLOOO"  here we explicitly says that we neend only this while exporting
// module.exports.add=add;
// module.exports.PI = PI;
// module.exports.square=square;

const math ={
    add:add,
    PI:PI,
    square:square
}
// module.exports = math;



//OR add modules directly to funcitons
// module.exports.add = (x,y) =>x+y;
// module.exports.PI = 3.14;
// module.exports.square = x=>x*x;

//we neend not need to type module always

exports.square =square;
exports.PI = PI;
exports.add=add;