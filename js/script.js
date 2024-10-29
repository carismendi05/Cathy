// Cómo se inicializa un vector
let vector = []; // Vector vacío

// Vector con informacion
// Vector de tipo caracter 
let nombres = ["Carlos", "Juan", "Pepe", "Maria", "Luis", "Brayan", "Michael", "Cathe", "Andrés"];

// Imprimir o escribir todo el vector
console.log("Vector: " + nombres)

// Imprimir o escribir un solo dato del vector
console.log ("El nombre que está en la posición 1 es: " + nombres[1]);

// Recorrer un vector 
for(let i = 0; i < nombres.length; i++) {
    console.log (nombres[i]);
}

// Agregar información a un vector 
nombres.push("Stiven"); 

console.log(nombres); 

for(let i = 0; i < nombres.length; i++) {
    console.log (nombres[i]);
}

// Eliminar información
nombres.splice(1, 2);  
    console.log(nombres);

    // Ctrl + shift + P. menu de comandos