const num1 = 16;
const num2 = "16";

//*lo mismo pero con operadores lógicos (pista: no hagan esto)
//*este if evalúa dos cosas: primero, si son el mismo type, y luego, con el && (and), compara sus valores. AMBAS DEBEN SER VERDAD

if (typeof num1 === typeof num2 && num1 > num2) {
  console.log(`${num1} es mayor a ${num2}`);
} else if (typeof num1 === typeof num2 && num1 < num2) {
  console.log(`${num1} es menor a ${num2}`);
} else if (num1 === num2) {
  console.log(`${num1} es igual a ${num2}`);
} else {
  console.log("los tipos no coinciden");
}

//* || es or. Debe cumplir una de las condiciones:

if (num1 === 16 || num1 === 15) {
  console.log("es verdad");
} else {
  console.log("no es verdad");
}
