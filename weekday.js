// initialize syntax prompt-sync 
//below is case sensitive && space sensitive!
const prompt = require('prompt-sync')();

const day = Number(prompt('Input a number to find out the day of the week: '))

if (day === 1) {
    console.log("Today is Monday")
} else if (day === 2) {
    console.log("today is Tuesday")
} else if (day === 3) {
    console.log("today is Wednesday")
} else if (day === 4) {
    console.log("today is Thursday")
} else if (day === 5) {
    console.log("today is Friday")
} else if (day === 6) {
    console.log("today is Saturday")
} else if (day === 7) {
    console.log("today is Sunday")
} else {
    console.log("error")
}