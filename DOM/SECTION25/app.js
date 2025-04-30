const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED");
}
function scream(){
    console.log("Aaaaaaaaaaaaa");

}
btn.onmouseenter = scream;

document.querySelector('h1').onclick =function(){
    alert('you clicked the h1!')
}
const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup',function(){
    alert('clicked');
})
function twust(){
    console.log("twust");
}
function shout(){
    console.log("shout");
}
const taskButton = document.querySelector('#task');
// taskButton.onclick= twust;
// taskButton.onclick= shout;

taskButton.addEventListener('click',twust);
taskButton.addEventListener('click',shout);



