let input=prompt("what would you like to do ?");
const todos=['collect eggs','clean litter box'];
while(input!=='quit'){
    if(input==='list'){
        console.log("*************");
        for(let i=0;i<todos.length;i++){
            console.log(i,todos[i]);
        }
        console.log("*************");
    }else if(input==='new'){
        const newTodo = prompt("OK, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }
    else if(input==='delete'){
        const indexStr = parseInt(prompt('Which todo you want to delete'));
       
        const deleted=todos.splice(indexStr,1);
        
        console.log(`Ok deleted ${deleted}`)
    }

    input=prompt("what would you like to do ?");

}
console.log("YOU QUIT APP")