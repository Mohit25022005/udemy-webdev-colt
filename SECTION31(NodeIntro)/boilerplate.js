// const fs = require('fs')
// console.log(fs)

//1st one is execution file
//2nd one location we type
//3rd one is argument we type

//Async version (call back passing requried)

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('IN THE CALLBACK')
//     if (err) throw err;
//   }); 
//   console.log("I come after mkdir directory! ")


//sync version (will stop the rest of the program until the execution of the rest of the code)
//(No call back pass or argument required)


// fs.mkdirSync('Cats')
// console.log("T COME AFTER MKDIR IN THE FILE")


const fs = require('fs');
const folderName = process.argv[2] || 'Project';
 
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}


