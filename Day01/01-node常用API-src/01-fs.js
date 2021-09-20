const fs = require("fs");

fs.readFile("config.js","utf-8",(err,data)=>{
    if(err) throw err;
    
    console.log(data);
})

//promise 封装
(async ()=>{
    const fs = require("fs");
    const {promisify} = require('util')
    const readFile = promisify(fs.readFile())
    const data = await readFile('./config.js')
    console.log(data.toString());
})