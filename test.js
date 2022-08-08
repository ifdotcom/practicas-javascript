//---------------------------------------------------------

let numUno = 2,
  numDos = 5;
let suma = numUno + numDos;

console.log(suma);

let Nombre = "Fernanda",
  Apellido = "Vidal";

// let nombreCompleto = Nombre + " " + Apellido;

// console.log(nombreCompleto);
//---------------------------------------------------------

let nombre = "Fernanda";
let apellido = "Vidal";
let usuarioPlatzi = "if_vidal";
let edad = 27;
let correoElectronico = "ifervb@outlook.com";
let mayorDeEdad = true;
let dineroAhorrado = 2000;
let deudas = 0;

//---------------------------------------------------------

let nombreCompleto = `Mi nombre es ${nombre} ${apellido}`;
console.log(nombreCompleto);

let dineroTotal = dineroAhorrado - deudas;
console.log(`Dinero real: $${dineroTotal}`);

//---------------------------------------------------------

function sumar(a, b) {
  return console.log(a + b);
}
sumar(8, 10);

//---------------------------------------------------------

function datosPersonles(nombre, apellido, nickname) {
  return console.log(
    `Mi nombre es ${nombre} ${apellido}, pero prefiero que me digas ${nickname}`
  );
}

datosPersonles("Juan David", "Castro Gallego", "juandc");

//---------------------------------------------------------

// con if .. else
const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
} else {
  console.log("Tipo de suscripción inválida");
}

// solo con if
if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

// con arrays y solo un condicional

const tiposDeSuscripciones = [
  { suscripcion: "Free", descripcion: "Solo puedes tomar los cursos gratis" },
  {
    suscripcion: "Basic",
    descripcion: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  },
  {
    suscripcion: "Expert",
    descripcion: "Puedes tomar casi todos los cursos de Platzi durante un año",
  },
  {
    suscripcion: "ExpertPlus",
    descripcion:
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
  },
];

function suscription(tipoDeSuscripcion) {
  let encuentraSuscripcion = tiposDeSuscripciones.find(function (suscripcion) {
    return suscripcion.suscripcion === tipoDeSuscripcion;
  });
  console.log(encuentraSuscripcion.descripcion);
}

suscription("Free");

//---------------------------------------------------------

// for (let i = 0; i < 5; i++) {
//   console.log("El valor de i es: " + i);
// }

let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

// for (let i = 10; i >= 2; i--) {
//   console.log("El valor de i es: " + i);
// }

let j = 10;
while (j >= 2) {
  console.log("El valor de i es: " + j);
  j--;
}

//---------------------------------------------------------

let respuesta = parseInt(prompt("¿Cuánto es 2 + 2"));

while (respuesta != 4) {
  respuesta = parseInt(prompt("¿Cuánto es 2 + 2"));
}
if (respuesta === 4) {
  alert("Felicidades");
}

//---------------------------------------------------------

function getArray(myArray) {
  console.log(myArray[0]);
}
getArray(["fresa", "manzana", "uva"]);

function getArray2(myArray2) {
  for (let index = 0; index < myArray2.length; index++) {
    console.log(myArray2[index]);
  }
}
getArray2(["fresa", "manzana", "uva"]);

let persona = {
  nombre: "Fernanda",
  apellido: "Vidal",
  edad: 27,
};

function datos(myObject) {
  for (const key in myObject) {
    console.log(myObject[key]);
  }
}

datos(persona);

// perspectiva fuera de los limites



