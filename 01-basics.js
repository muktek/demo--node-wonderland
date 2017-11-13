/* PART 1
  node 01-basics.js
*/
console.log('Welcome to Node.js')



/* PART 2
  + Note global functions:
    - `global.console`
    - `global.process`
    - `global.setInterval`

  + note __dirname
    - environmental variable that gives us absolute path
      of where script is run.

*/

console.log(global)
console.log(__dirname)

/*
 PART 3  --
 process.argv[n] for accessing cli arguments
            ... storing in variable.
*/
let userInput = process.argv[2]

if(typeof userInput === 'undefined'){
  console.log('No input from the user!')
  console.log('pwd: ', __dirname)
} else {
  console.log('The user entered')
  console.log(` > ${userInput}`)
}
