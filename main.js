//1. Obtener el primer elemento del array
//Enunciado: Dado un array, retorna el primer elemento del mismo.

let arrayNumeros=[1,2,3,4];
console.log(arrayNumeros[0]);
//2. Obtener el último elemento del array
//Enunciado: Dado un array, retorna el último elemento del mismo.

let arrayNumeros2=[40,55,78,49];
console.log(arrayNumeros2.pop());

//3. Agregar un elemento al inicio del array
//Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado.

arrayNumeros2.unshift(8);
console.log(arrayNumeros2);

//4. Eliminar el primer elemento del array
//Enunciado: Elimina el primer elemento de un array y devuelve el array resultante.

arrayNumeros2.shift();
console.log(arrayNumeros2);

//5. Agregar un elemento al final del array
//Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado.
arrayNumeros2.push(11);
console.log(arrayNumeros2);

//6. Eliminar el último elemento del array
//Enunciado: Elimina el último elemento de un array y devuelve el array resultante.
arrayNumeros2.pop();
console.log(arrayNumeros2);

//7. Combinar dos arrays
//Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.
let numerosUnidos=arrayNumeros.concat(arrayNumeros2);
console.log(numerosUnidos);
//8. Encontrar si un array incluye un elemento
//Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.
console.log(numerosUnidos.includes(2));
//9. Buscar el índice de un elemento
//Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.
console.log(numerosUnidos.indexOf(40));
//10. Reemplazar un elemento en un array
//Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.
let varios=[6,7,5,4];
varios[3]="Hola";
console.log(varios);
//11. Sumar todos los elementos del array
//Enunciado: Dado un array de números, suma todos sus elementos y devuelve el resultado.
let arraySuma = [100, 200, 500];
let suma = arraySuma.reduce(function(acumulador, num) {
  return acumulador + num;
}, 0);
console.log(suma); 
//12. Multiplicar todos los elementos del array
//Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.
arrayParaMultiplicar=[2,7,8,40,10];
let multiplicacion=arrayParaMultiplicar.map(function(num){return num*10});
console.log(multiplicacion);

//13. Filtrar números mayores a un valor
//Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.
let arrayMayores=[10,2,80,45,70];
let elMayor=arrayMayores.filter(function(num){return num>50});
console.log(elMayor);

//14. Verificar si todos los elementos son mayores a un número
//Enunciado: Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor.
let numvarios = [10, 25, 41, 87, 99];
let numMayores = (array, valor) => {
    for (let num of array) {
        if (num < valor) {
            return false;
        }
    }
    return true;
};

console.log(numMayores(numvarios, 3));   
console.log(numMayores(numvarios, 50));  

//15. Obtener el primer elemento que cumple una condición
//Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.

//16. Imprimir cada elemento del array
//Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.

//17. Crear un array con el doble de cada número
//Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.

//18. Convertir un array de nombres en mayúsculas
//Enunciado: Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas.