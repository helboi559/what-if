// declare problem

const prompt = require('prompt-sync')();

var age = Number(prompt('how old are you?: '))

if (age < 16) {
    console.log('you cant drive')
} else if (age >=16 && age <= 17) {
    console.log('you can drive but not vote')
} else if(age >=18 && age <= 24) {
    console.log('you can vote but not rent a car')
} else {
    console.log('you can pretty much do anything')
}


