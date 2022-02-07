const prompt = require('prompt-sync')()
//input:student size
//output:logs size by group > 1(groups of 3)

//prompt class size
let size =Number(prompt('What is your class size?: '))

// if class size < 3 , log class is too small
let group_3 = 0
let group_2 = 0
//while loop
// if (size % 3 === 0) {
//     group_3 += 1
//     size = size - 3
// } 

while(size >= 2) {
    if (size % 3 === 0) {
        group_3 += 1
        size = size -3
    } else {
        group_2 += 1
        size = size -2
    }
}

console.log(`you will have ${group_3} groups of three and ${group_2} group(s) of 2`)


