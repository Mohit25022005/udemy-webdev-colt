function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }
    catch(e){
        console.log("PLease pass a string next time")
    }
}