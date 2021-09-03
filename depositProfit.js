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

var contador=0
function depositProfit(deposit, rate, threshold){
    rate=rate/100
    do{
        contador+=1
        deposit=(deposit*rate)+deposit
    }while(deposit<threshold);
    return contador
}
const result = depositProfit(300, 4, 500)
console.log(`Son ${result} años para alcanzar el umbral deseado`)
