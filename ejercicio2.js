// 2.1
const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...
jedi.edad = 25; 
console.log(jedi);

// 2.2 

const firstName = "Leia";
const surName = "Organa";
const age = 20;

console.log("Soy " + firstName + " " + surName + ", tengo " + age + " años y soy una princesa de Alderaan"); 

// 2.3 

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...

const totalPrice = sable1.precio + sable2.precio;
console.log(totalPrice);

// 2.4 

let precioBaseGlobal = 25000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1);
console.log(nave2); 

// otra forma de hacerlo 

const nave1 = {
    nombre: "Ala-X", 
    precioBase: 50000,
    precioFinal: 50000 + precioBaseGlobal
};

const nave2 = {
    nombre: "Halcón Milenario",
    precioBase: 70000,
    precioFinal: 70000 + precioBaseGlobal
};

console.log(nave1);
console.log(nave2);
