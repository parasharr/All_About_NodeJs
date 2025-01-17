const fs = require("fs");

// Sync call - it block the thread
fs.writeFileSync("./test.txt", "Hello there ! this file is created using another file");

// Async expect callback always - it is not blocking the thread
fs.writeFile("./test.txt", "By using nodejs", (err)=> {});

// Sync call
// const result = fs.readFileSync("./content.txt", "utf-8")
// console.log(result);


//  Async expect callback always
// fs.readFile("./content.txt", "utf-8", (err, res)=> {
//     if(err) {
//         console.log("error",err)
//     }else{
//         console.log(res)
//     }
// })

// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

// fs.copyFileSync("./test.txt", "./copy.txt");
// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./content.txt").isFile());