/*
//Declarando Objetos literales:
let persona={
    nombre:"Jorge",
    edad:24,
    pais: "Peru",
    movil: 970927520
}
//Llamando todas las propiedades del objeto persona:
console.log(persona);
//Llamando propiedades especificas dentro del objeto persona:
console.log(persona.nombre);
console.log(persona["nombre"]);

//Cambiando propiedades dentro del objeto y comprobando:
persona1.nombre= "Carlos";
console.log(persona.nombre);


//Declarando objetos mediante una Función Constructora:

function Persona(nombre, edad, pais, direccion, idioma) {
    this.nombre=nombre;
    this.edad=edad;
    this.pais= pais;
    this.direccion=direccion;
    this.idioma=idioma;
    //CREANDO METODOS DENTRO DE LA FUNCION CONSTRUCTORA: (Dentro de una función constructora las funciones se llaman métodos)
    this.saludar = () => {
        console.log("Hola me llamo "+this.nombre);
    }
    this.comentario = () => {
        console.log("Esto es una introducción a la programación orientada a objetos");
    }
}
//Construyendo una persona e imprimiendo:
let persona=new Persona ("Jorge", 24, "Peru", "Chimbote", "Español");
console.log(persona.nombre);
persona.saludar();
persona.comenatario();
//Declarando si un objeto existe o no dentro de un objeto mediante la estructura IN:
console.log("nombre" in persona); //Esto devolverá un valor booleano (true si existe dentro del objeto o false si no existe.)

//Revisando todas las propiedades dentro de un objeto e imprimiendolas con la estructura FOR IN:
for (const propiedad in persona){
    console.log(propiedad +": "+persona[propiedad]);
}

//ESTA FORMA DE CONSTRUIR ES MÁS ANTIGUA Y SE ESTA MODIFICANDO A LA NUEVA VERSION.
class Producto{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    sumarIVA(){
        this.precio=this.precio * 1.21;
    }
}

let producto1= new Producto("Peras", 234);
for (const prop in producto1){
    console.log(prop + ": "+producto1[prop]);
}
*/


function crearPersona(nombre, edad, pais, direccion, idioma) {
    let persona = new Persona(nombre, edad, pais, direccion, idioma)
    return persona
} 

function ingreso(mensaje) {
    let nombre=prompt(mensaje);
    return nombre;
}

function Persona(nombre, edad) {
    this.nombre=nombre;
    this.edad=edad;
    this.pais=pais;
    this.direccion=direccion;
    this.idioma=idioma;
}

let nombre= ingreso("Ingresa tu nombre");
let edad= ingreso("Ingresa tu edad");
let pais= ingreso("Ingresa tu país");
let direccion= ingreso("Ingresa tu dirección");
let idioma= ingreso("Ingresa tu idioma");
let persona = new crearPersona(nombre, edad, pais,direccion, idioma);

for (const prop in persona){
    console.log(prop + ": "+persona[prop]);
}
