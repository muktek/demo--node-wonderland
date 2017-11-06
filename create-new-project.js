const fs = require('fs')
const path = require('path')
const projectName = process.argv[2]

if(typeof projectName === 'undefined'){
  console.error('MUST PROVIDE PROJECT NAME')
  process.exit()
}

fs.mkdirSync(projectName)

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

fs.writeFile(path.join(__dirname, projectName, 'index.html'), htmlTemplate ,()=>{
  console.log('ADDED - index.html')
})