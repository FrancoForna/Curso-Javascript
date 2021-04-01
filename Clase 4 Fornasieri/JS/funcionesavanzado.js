
//Operacion financiera para intereses comunes//
 alert("Le ayudaremos a calcular 3 variables de acuerdo a intereses comunes no capitalizables")
 function calculadora (capitalI, capitalF, iM, operador) {
     let resultado = 0;
     switch (operador) {
         case "CI":
             resultado = capitalF - iM;
             break;
         case "CF":
             resultado = capitalI + iM;
             break;
         case "IM":
             resultado = capitalF - capitalI;
             break;
         default:
             resultado = 0;
             break;
     }
     return resultado;
 }


 let capitalInicial = parseInt(prompt("Ingrese su capital inicial"))
 let capitalFinal = parseInt(prompt("Ingrese su capital final"))
 let intereses = parseInt(prompt("Ingrese interes mensual"))
 let operacion = prompt("¿Que dato desea obtener? Las opciones son: CI, CF o IM")

alert("El resultado es: " + calculadora(capitalInicial, capitalFinal, intereses, operacion));


//Intereses capitalizables//
alert("Lo complejizaremos un poco. Ahora le ayudaremos a obtener intereses capitalizables y el saldo de acuerdo al periodo que requiera.")
alert("Este tipo de interes son aquellos que se producen cuando reinvertimos el interes ganado por periodo para hacer nuestro saldo inicial aun mayor y asi generar beneficios mayores por periodo.")


let interes = parseInt(prompt("Ingrese el valor del interes por periodo que le otorga el banco. Tenga en cuenta no digitar el simbolo (%)"))
let periodoTI = parseInt(prompt("ingrese el periodo en meses de su tasa de interes"))
let periodoD = parseInt(prompt("ingrese el periodo en meses que dejara su capital hasta retirarlo"))

let indice = 1;
let numeroCociente = 100;

//Funciones//
const suma = (a,b) => a + b;
const cociente = (a,b) => a / b;
const poten = (a,b) => a ** b;
const resta = (a,b) => a - b;
const producto = (a,b) => a * b;

//Operaciones separadas//
 let tasaInteres = cociente(interes, numeroCociente);
 let primerValor = suma(indice, tasaInteres);
 let potencia = cociente(periodoD, periodoTI);
 let potenciado = poten(primerValor, potencia);
 let resultado = resta(potenciado, indice);


let interesPeriodo = resta((poten((suma(indice, cociente(interes, numeroCociente))), cociente(periodoD, periodoTI))), indice);
alert("el interes del periodo en el cual retirara su capital es de: " + interesPeriodo);

let capitalG = parseInt(prompt("Ingrese el capital inicial que le gustaria invertir:"));
let capitalGanado = producto(potenciado, capitalG);

alert("Depositando ese capital inicial y retirandolo en el periodo correspondiente señalado anteriormente, usted tendria:$ " + capitalGanado);
