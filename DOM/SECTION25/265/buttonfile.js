const makeRandColor = ()=>{
    const r=Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*225);
    const b = Math.floor(Math.random()*225);
    return `rgb(${r},${g},${b})`;
}
const buttons = document.querySelectorAll('button');
console.log('entered the js');
for(let button of buttons){
    button.addEventListener('click',console.log("clicked"))
}
const h1s = document.querySelectorAll('h1');

for(let h1 of h1s){
    h1.addEventListener('click',function(){
        h1.style.backgroundColor=makeRandColor();
    })
}