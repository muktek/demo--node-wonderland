const http = require('http')
const fs = require('fs')
const path = require('path')

const projectName = process.argv[2]

if(typeof projectName === 'undefined'){
  console.error('MUST PROVIDE PROJECT NAME FOR SERVER')
  process.exit()
}

const app = http.createServer(function (req, res) {
  fs.readFile( path.join(__dirname, projectName, 'index.html'),'utf-8',(err, data)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(data)
    res.write(data);
    res.end();
  })
})


app.listen(8080);
console.log('App listening on localhost:8080')
