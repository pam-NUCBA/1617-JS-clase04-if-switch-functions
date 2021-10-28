//ej 6
const num1 = 16;

if (num1 >= 16) {
  console.log("si");
} else {
  console.log("no");
}

if (num1 > 15) {
  console.log("si");
} else {
  console.log("no");
}

//ej 3

const animal = "miau";

if (animal === "miau") {
  console.log("es un gato");
} else if (animal === "guau") {
  console.log("es un perro");
} else {
  console.log("no sé qué animal es");
}

//* cuándo usar == y cuando ===: con 2, chequeo si el valor es el mismo, con 3, chequeo el tipo tambien

const num2 = 15; //es number
const num3 = "15"; //es string

if (num2 == num3) {
  console.log("son iguales pero no estrictos");
} else {
  console.log("no son iguales");
}

if (num2 === num3) {
  console.log("son iguales estrictos");
} else {
  console.log("no son iguales estrictos");
}


