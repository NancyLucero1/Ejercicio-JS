//ejercicio 1
/* Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. */
function paresOimpares(numero) {
  let resto = numero % 2;
  if (resto === 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
}

paresOimpares(5);

//ejercicio 2
/* Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales. */
function numeroMayor(numero1, numero2) {
  switch (true) {
    case numero1 > numero2:
      console.log(`${numero1} es mayor que ${numero2}`);
      break;
    case numero1 < numero2:
      console.log(`${numero2} es mayor que ${numero1}`);
      break;
    case numero1 === numero2:
      console.log(`${numero1} y ${numero2} son iguales`);
      break;
  }
}

numeroMayor(4, 5);

//ejercicio 3
/* Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5. */
function multiploDeCinco(numero) {
  let resto = numero % 5;
  if (resto === 0) {
    console.log(`El numero ${numero} es multiplo de 5`);
  } else {
    console.log(`El numero ${numero} no es multiplo de 5`);
  }
}

multiploDeCinco(14);

//ejercicio 4
/* Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número. */
function imprimir(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

imprimir(8);

//ejercicio 5
/* Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado. */

function imprimirPalabra(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(`${palabra}`);
  }
}

imprimirPalabra("hola", 5);

//ejercicio 6
/*  Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array. */
function recibeArray(a) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
}

const a = [1, 2, 3, 4, 5];
recibeArray(a);

//ejercicio 7
/*  Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0". */

function array10numeros(arregloNumeros) {
  for (let i = 0; i < arregloNumeros.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(arregloNumeros[i]);
  }
}

const arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array10numeros(arregloNumeros);

//ejercicio 8
/* Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro. */

function multiplo(n, narray) {
  for (let i = 0; i < narray.length; i++) {
    let multiplicacion = narray[i] * n;
    console.log(multiplicacion);
  }
}

const narray = [1, 2, 3];
multiplo(5, narray);

