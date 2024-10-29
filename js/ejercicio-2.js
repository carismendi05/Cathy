// Crea un vector con los numeros del 1 al 5, luego elimina el numero que está en la posición 2 y recorre el vector

let numeros = [1, 2, 3, 4, 5]

numeros.splice(2, 1);  
    console.log(numeros);

for(let i = 0; i < numeros.length; i++) {
    console.log (numeros[i]);
}
