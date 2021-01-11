// console.log("Hello Node.js")

// ! Node.js Module System.
// ? 3 Types
// ? Core Modules.
// ? Local Modules.
// ? NPM Modules.

// * Core Modules - Pre Installed with Node.
// * Local Modules - These are your own files.
// * npm Modules - These are the 3rd Party Modules that are present on npm.

// ! Importing a Module - require function
// ? Core Module 
// const fs = require('fs')

// fs.writeFileSync("notes.txt","This is some data")

// const data = fs.readFileSync('notes.txt')
// console.log(data.toString())

// ? Local Modules
// const modules = require('./module.js')

// console.log(modules.user.name)

// const sum = modules.add(3,5)

// console.log(sum)

// ? npm Modules

// ! 1. npm init -y
// ! 2. Then install modules.

// const validator = require('validator')
// const chalk = require('chalk');

// console.log(validator.isEmail('trehandocogen.com')) 
// console.log(validator.isURL('https://trehandocogen.com')) 
// if (validator.isEmail('trehandocogen.com')) {
//     console.log(chalk.green.inverse(" VALID EMAIL "))
// } else{
//     console.log(chalk.red.inverse(" INVALID EMAIL "))
// }

// ! process
// const username = process.argv[2]
// const password = process.argv[3]

// const user = {
//     name : 'trehan',
//     pass: 'password'
// }
// if (condition) {
    
// }