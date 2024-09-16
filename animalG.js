//importando el modulo constante readline para ingresar por teclado
const leer = require('readline');
// Configurar readline para leer desde la entrada estándar
const rl = leer.createInterface({
  input: process.stdin,
  output: process.stdout
});

//clase padre animal
class Animal{
    constructor(nombre,edad){
    this.edad = edad;
    this.nombre = nombre;
    }
    HacerSonido(){
        //método vació que heredara a las subclases
    }
}
//subclase o clase hija perro
class Perro extends Animal{
    HacerSonido() {
     return "Guau"
    }
}
//subclase o clase hija gato
class Gato extends Animal{
    HacerSonido() {
     return "Miau"
    }
}
//subclase o clase hija pajaro 
class Pajaro extends Animal{
    HacerSonido() {
     return "Pio"
    }
}
//Función para crear animales
function crearanimal(tipo, nombre, edad) {
  switch(tipo) {
    case 'perro':
      return new Perro(nombre,edad);
    case 'gato':
      return new Gato(nombre, edad);
    case 'pajaro':
      return new Pajaro(nombre, edad);
    default:
      return "Tipo de animal no soportado";
  }
}
// Función para leer entrada del usuario
function leerEntrada() {
  rl.question('Introduce el tipo de animal (perro, gato, pajaro): ', (tipo) => {
    rl.question('Introduce el nombre del animal: ', (nombre) => {
      rl.question('Introduce la edad del animal: ', (edad) => {
        edad = parseInt(edad);  // Convertir edad a número entero
        let animal = crearanimal(tipo, nombre, edad); //llamar a la funcion de crearanimal usando la variable animal para que nos muestres sus datos del objeto creado

          console.log(`Nombre: ${animal.nombre}`);  // Imprime el nombre del animal
          console.log(`Edad: ${animal.edad}`);  // Imprime la edad del animal
          console.log(`Sonido: ${animal.HacerSonido()}`);  // Imprime el sonido del animal

        rl.close();  // Cerrar la interfaz de readline
      });
    });
  });
}
// Llamar a la función para iniciar la lectura de entrada
leerEntrada();
