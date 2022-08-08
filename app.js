//!----leyendo HTML desde Javascript-----------------------------------------------------

// crear variables que representen a los selectores de cada elemento en el HTML

// querySelector -> nos permite seleccionar etiquetas, id´s, clases selecciona al primer elemento que encuentre
const title = document.querySelector("h1");
// querySelectoall -> selecciona a todos los elementos y los guarda en un NodeList [] (array)
const parrafo = document.querySelectorAll("p");
const parrafoPrincipal = document.querySelector(".parrafo-principal");
const parrafoSecundario = document.querySelector("#parrafo-secundario");
const input = document.querySelector("input");

// console.log({}) -> lo interpreta como un objeto; pondrá la variable y sus propiedades
// console.log(input.value) -> devuelve el valor introducido en el input
console.log(input.value);
console.log({
  title,
  parrafo,
  parrafoPrincipal,
  parrafoSecundario,
  input,
});

// Otos que podemos utilizar:
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();

//!----Escribiendo HTML desde Javascript-----------------------------------------------------

// innerHTMl -> no permte modificar el contenido de nuestra etiqueta, también nos permite agregar otras etiquetas. Esto puede er peligroso, ya que pueden inyectar código malicioso.
title.innerHTML = "¡Manipulación del DOM! <br> Javascript";

// innerText -> solo permite texto
title.innerText = "¡Manipulación del DOM! <br> Javascript";

// getAttribute -> nos ayuda a leer los tributos que tiene nuestro elemento HTML, recibe el nombre del atributo y devuelve el valor.
console.log(title.getAttribute("class"));

// setAttribute -> nos ayuda a modificar el valor, recibe el nombre del atributo y el nuevo valor
title.setAttribute("class", "titulo");
console.log(title.getAttribute("class"));

// classList -> puede agregar, quitar clases a un elemento
title.classList.add("titulo-primario");
title.classList.remove("titulo-primario");

// classList.toggle -> permite agregar y quitar la clase
title.classList.toggle("lght");

// classList.contains -> nos devuelve true o false si la clase existe dentro del elemento
console.log(title.classList.contains("titulo"));

// poniendo por defecto el vlue del input
input.value = "@if_vidal";

// Para crear un ellemento HTML se utiliza createElement(), recibe el elemento a crear

// Borramos el contenido del elemento p
parrafoSecundario.innerText = "";

// Creamos el elemento
const imagen = document.createElement("img");

// Le agregamos el atributo src, si ya lo tuviera lo modificaría
imagen.setAttribute(
  "src",
  "https://static.platzi.com/static/images/conf/logo_black@2x.png"
);
imagen.setAttribute("width", "130px");

// Agregamos la imagen al elemento p
parrafoSecundario.append(imagen);

//!----Escuchando eventos desde Javascript-----------------------------------------------------

// onchange = "" , onclick = "" -> reciben una funcion para ejecutar

let numeroUno = document.querySelector("#numeroUno"),
  numeroDos = document.querySelector("#numeroDos"),
  btnCalcular = document.querySelector("#btnCalcular"),
  resultado = document.querySelector("#resultado"),
  formulario = document.querySelector("#formulario");

// recibe como parametro el evento del addEventListener
function btnSumar(e) {
  e.preventDefault();
  console.log({ e });
  const suma = parseInt(numeroUno.value) + parseInt(numeroDos.value);
  resultado.innerText = `El resultado de la suma es: ${suma}`;
}

//!----addEventListener----------------------------------------------------
// La función btnOnClick ya no se manda a llamar con los paréntesis ya que si los tuviera, el addEventLisener lo interpreta como una ejecución
formulario.addEventListener("submit", btnSumar);

// btnSumar enviará como argumento el evento
 