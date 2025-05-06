// const path  = require('path');
// console.log(path.basename(__filename)); // index.js
// console.log(path.dirname(__filename)); //  
// console.log(path.extname(__filename)); // .js


// const URL = require('url').URL;
// const myURL = new URL('https://ibibek.com:1234/index.html/images?id=john&status=active&age=33');

// // console.log(myURL.href);
// // console.log(myURL.toString());

// // console.log(myURL.host);
// // console.log(myURL.hostname);
// // console.log(myURL.pathname);
// console.log(myURL.search);
// console.log(myURL.searchParams);

// const fs = require('fs');

 

// const path = require('path');

 

// // path.join(__dirname,'/test')

 

// // fs.mkdir( path.join(__dirname,'/test') , function(err){

    

// //     if(err){

// //         console.log('Directory already exists');}

// //     }

// // )

// const fs = require('fs');
// const path = require('path');

// fs.writeFile(path.join(__dirname,'/test', 'hello.txt'), "We just wrote something", err => {
//     if(err) throw err;
//     console.log( "Created a file, and wrote something")
//     // fs.appendFile(path.join(__dirname,'/test', 'hello.txt'), "After creating a file, added this text", err => {
//     //     if(err) throw err;
//     //     console.log( "Created a file, and wrote something")
//     // })
// })
// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'test');

// fs.mkdir(dirPath, { recursive: true }, (err) => {
//     if (err) throw err;
//     fs.writeFile(path.join(dirPath, 'hello.txt'), "We just wrote something", err => {
//         if(err) throw err;
//         console.log("Created a file, and wrote something");
//     });
// });
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'Public');

// fs.mkdir(dirPath, { recursive: true }, (err) => {
//      if (err) throw err;
//      fs.writeFile(path.join(dirPath, 'index.html'), "We just wrote something", err => {
//          if(err) throw err;
//          console.log("Created a file, and wrote something");
//      });
//  });
const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

   
    console.log(req.url);

    /*

    if req url is /api send db.json data
    if req url is / send index.html
    else send 404

    */
    // console.log(typeof(req.url));

    
    if (req.url === '/') {       
        fs.readFile( path.join(__dirname,'public', 'index.html'),'utf-8', (err,data)=>{
            if (err) throw err;
            // console.log(typeof(data));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
         })
    }
    else if (req.url === '/about') {
            
        fs.readFile( path.join(__dirname,'public', 'about.html'),'utf-8', (err,data)=>{
            if (err) throw err;
            // console.log(typeof(data));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
         })
    }
    else if (req.url === '/api') {
         fs.readFile( path.join(__dirname,'public', 'db.json'),'utf-8', (err,data)=>{
            if (err) throw err;
            // console.log(typeof(data));
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(data);
         })    
    }
    else{    
        fs.readFile( path.join(__dirname,'public', '404.html'),'utf-8', (err,data)=>{
            if (err) throw err;
            // console.log(typeof(data));
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(data);
         })
         
    }
});
server.listen(8881, () => console.log("yay my server is running"));




