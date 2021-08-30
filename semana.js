i = 2

function weekDay(i){
    switch(i){
        case 1:
            return 'Monday'
            break
        case 2: 
            return 'Tuesday'
            break
        case 7:
            return 'Sunday'
        default:
            return 'Invalid Value'
            break
    }

}
    


/***
 * 
 * 
 * Funciones
 */

let day1 = weekDay(1)
let day2 = weekDay(2)
let day3 = weekDay(6)
//cadena interpolada
console.log(`Today is ${day1}`)
console.log(`Today is ${day2}`)
console.log(`Today is ${day3}`)