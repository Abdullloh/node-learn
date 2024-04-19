const https  = require('node:https')
const fs = require('fs')
const vm = require('vm')

fs.readFile('./myNest.js','utf-8',(err,data)=>{
    const context = vm.createContext({ console, require})
    vm.runInContext(data,context)
    console.log(context);
    context.hello()

})

// function readFileFromUrl(url){
//     https.get(url,(res)=>{
//         let data = ''

//         res.on('data',(chunk)=>{
//             data+=chunk
//         })

//         res.on('end',()=>{
//             const context = vm.createContext({ console, require})
//             vm.runInContext(data, context)
//             context.hello
//             // fs.writeFile(`newFile-${new Date().getMinutes()}.js`,data,()=>{})
//         })
//     })
// }

// readFileFromUrl('https://cdn.jsdelivr.net/npm/hello-world-js@0.0.2/src/index.min.js')