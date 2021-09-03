function levenshteinDistance(a,b){
    //Create Empty Matrix
    //cadena vacia que es +1
    const distanceMatrix = Array(a.length + 1).fill(null).
    map(() => Array(b.length+1).fill(null)) //permite iterar con map y generar un grupo de arreglos dentro del arreglo
    //Fill First Row
    for(let i=0; i<=b.length; i++){
        distanceMatrix[0][i] = i
    }
    //Fill First Column
    for(let j=0; j<=a.length; j++){
        distanceMatrix[j][0] = j

    }
    //Calcule Distance
    for(let i = 1; i<=a.length; i++){
        for(let j = 1; j<=b.length; j++){
            //Si estamos haciendo un reemplazo, usamos ternario si es igual no guardes nada, si no guarda el valor de uno
            const indicator = a[i - 1] === b[j - 1] ? 0: 1 // if son iguales 
            distanceMatrix[i][j] = Math.min(//nos devuelve el numero mas pequeño
                distanceMatrix[i][j-1] +1, //Insercion
                distanceMatrix[i-1][j] +1, //delete
                distanceMatrix[i-1][j-1] + indicator //Reemplazar o nada
            )
        }// a todas las comparaciones se le suma un uno y después quedará el más pequeño
    }
    //Return distancie Value
    return distanceMatrix[a.length][b.length]

}

//levenshteinDistance('casas', 'cosa')
const result = levenshteinDistance('casas', 'cosa')
console.log(result)