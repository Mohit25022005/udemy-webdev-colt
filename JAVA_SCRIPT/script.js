const testScores = {
    mohit :100,
    harsh :12,
    vaibhav:22,
    nititsha:200
}
let total = 0;

for(let score of Object.values(testScores)){
    total+=score;
}
console.log(total);