document.querySelector('button').addEventListener('click',function(evt){
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown',function(e){
//     console.log(e);
//     console.log(e.key);
//     console.log(e.code);
// })
// input.addEventListener('keyup',function(){
//     console.log("KEYUP");
// })
window.addEventListener('keydown',function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!")
            break;
        case 'ArrowDown':
            console.log("Down!")
            break
            case 'ArrowRight':
                console.log("Right!")
                break;
            case 'ArrowLeft':
                console.log("Left!")
                break
        default:
            console.log("IGNOREED");
    }
})