// Nivel bajo

//Ejercicio 1 y 2

/* function add () {
    let multiplicacion = 100*20
    return multiplicacion
}

console.log(add())
 */

//Ejercicio 3 y 4

/* function add( number1 , number2 ){
    console.log(number1 * number2)
}

let numero1 = 100;
let numero2 = 20;
 */

//Ejercicio 5

/* function add( num1 , num2 ){
    let resultado = num1 * num2
    return resultado
}

console.log(add( numero1 , numero2 ))

//Ejercicio 6

let adds = function (num1, num2){
    return num1 * num2
}

console.log (add( 100 , 20 ))
 */



//Nivel medio

//Ejercicio 1

/* let nombre = ""
function saludar (nombre) {
        console.log("hola " + nombre)
}

saludar ("angel")
 */

//Ejercicio 2


/* let multiplicacion = function (number1 , number2) {
    let resultado = number1 * number2
    return resultado
}

let resultado = multiplicacion(3 , 3)
console.log(resultado)
 */
//Ejercicio 3

/* function area(base , altura) {
    let resultado = (base * altura) / 2
    return resultado
}

let resultado = area(5 , 8)
console.log("el area de un triangulo es " + resultado)
 */

//Ejercicio 4

/* function perimetro(num1 , num2 , num3) {
    let resultado = num1 + num2 + num3
    return resultado
}

let resultado = perimetro (2 , 3 , 5)
console.log("el perimetro de un triangulo es " + resultado) */

//Ejercicio 5

/* function compra(precio , cantidad) {
    let resultado = precio * cantidad

    if (cantidad >= 20){
        resultado = resultado - 0.2 * resultado
        return resultado
    }else if(cantidad >= 10) {
        resultado = resultado - 0.1 * resultado
        return resultado
    }

    return resultado
}
let resultado=compra(1000 , 13)
console.log("el precio total de la compra es " + resultado) */

//Ejercicio 6

function isAnAdult(edad) {
    if (edad >= 18) {
        return "usted es mayor de edad"
    } else if(edad <= 17){
        return "no eres adulto"
    }
    return resultado
}
let resultado = isAnAdult (18)
console.log(resultado)