let userInput = process.argv[2]

if(typeof userInput === 'undefined'){
  console.log('No input from the user!')
} else {
  console.log('The user entered')
  console.log(` > ${userInput}`)
}
