/** 
 * Haz depositado a tu cuenta bancaria una cantidad especifica de dinero (deposit).
 * Cada año tu saldo incrementa a la misma tasa de crecimiento (rate).
 * Asumiendo que no haces depósitos adicionales,
 * averigua cuánto tiempo le tomaría a tu saldo superar un umbral específico (threshold).
 *
 * Ejemplo:
 *
 * Para:
 * deposit = 100
 * rate = 20
 * threshold = 170
 *
 * la salida debe ser
 * depositProfit(deposit, rate, threshold) = 3
 *
 * Cada año la cantidad de dinero en tu cuenta crece 20%
 * así que con los años el saldo quedaría de la siguiente manera:
 *
 * - year 0: 100
 * - year 1: 120
 * - year 2: 144
 * - year 3: 172.8
 *
 * Por lo que tomaría 3 años alcanzar el objetivo.
*/


aumento = 0
var fecha = new Date([2021, 08, 28]);

fecha_actualizada = new Date(2024, 07, 21)

function depositProfit(deposit, rate, threshold){
    aumento = deposit * rate
    if (fecha_actualizada > fecha){
        console.log('Algo')
        let transcurrido = fecha_actualizada - fecha
        for(let i=0; i == transcurrido; i++){
            transcurrido = aumento + deposit 
            console.log(transcurrido)
        }

    }
    
}


const result = depositProfit(100, 0.20, 170)
console.log(result)