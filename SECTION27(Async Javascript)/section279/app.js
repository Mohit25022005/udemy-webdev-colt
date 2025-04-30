//order of prining the sequence

// console.log("Fetching data from server");

// setTimeout(()=>{
//     console.log("Hereis your data from server ...")   //this is passed on to browser API
// },3000);
// console.log("I am at the end of the fiel")


//Section280 CALLBACK HELL
// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(()=>{
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor = 'indigo';
//                     setTimeout(()=>{
//                         document.body.style.backgroundColor = 'violet';
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
        
//     },1000)
// },1000)


const  delayedColorChange  = (newColor,delay,donext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor;
        donext();
    },delay)

}
delayedColorChange('blue',1000,()=>{
    delayedColorChange('orange',1000,()=>{
        delayedColorChange('yellow',1000,()=>{
            delayedColorChange('blue',1000,()=>{
                delayedColorChange('red',1000,()=>{
        
                })
            })
        })
    })
});


searchMoviesAPI('amadeus',()=>{
    saveToMyDB(movies,()=>{
        //if it works run this:
    },()=>{
        //if it doesnt work,run this:
    })

},()=>{
    //if API fails
})

