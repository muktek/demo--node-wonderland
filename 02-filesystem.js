// (1) We require modules:
//    + fs: file system
const fs = require('fs')

// (2) process.argv -- capture argument
const projectName = process.argv[2]

// if arg not passed to node command
if(typeof projectName === 'undefined'){
  //.... then exit process
  console.error('MUST PROVIDE PROJECT NAME')
  process.exit()
}


//(3) make a directory from argv
const projectName = fs.mkdirSync(projectName)

let htmlTemplate = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Template</title>
      <style>
        body{
          border: 10px solid mediumseagreen;
          text-align: center;
          padding-top: 40px;
        }
      </style>
    </head>
    <body>
      <h1>${projectName}</h1>
    </body>
  </html>
`

//(4) fs.writeFile(«dir», «filename», «data», «callback»)
//   -  NOTE: callback is asynchronous
fs.writeFile(`${__dirname}/${projectName}`, 'index.html'), htmlTemplate ,(err)=>{
  if(err) {
    return console.log('THERE WAS AN ERROR')
  }

  console.log('ADDED - index.html')
})
