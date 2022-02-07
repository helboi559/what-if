//input: weight of boxer prompt
//output: relative weight for planet 

//promptSYNC!!
const prompt = require('prompt-sync')();

let weight = Number(prompt('what is your weight?: '))
let planet = Number(prompt('what planet do you want to fight on?: '))


if (planet === 1) {
    console.log(`your destination planet will have you fight at ${weight * 0.78} lbs.`)
} else if (planet === 2) {
    console.log(`your destination planet will have you fight at ${weight * 0.39} lbs.`)
} else if (planet === 3) {
    console.log(`your destination planet will have you fight at ${weight * 2.65} lbs.`)
} else if (planet === 4) {
    console.log(`your destination planet will have you fight at ${weight * 1.17} lbs.`)
} else if (planet === 5) {
    console.log(`your destination planet will have you fight at ${weight * 1.05} lbs.`)
} else if (planet === 6) {
    console.log(`your destination planet will have you fight at ${weight * 1.23} lbs.`)
}