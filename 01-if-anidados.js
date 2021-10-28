const num1 = 16;
const num2 = "16";

//* typeof es el tipo de la variable que estemos evaluando

if (typeof num1 === typeof num2) {
  if (num1 > num2) {
    console.log(`${num1} es mayor a ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num1} es menor a ${num2}`);
  } else {
    console.log(`${num1} es igual a ${num2}`);
  }
} else {
  console.log(`${num1} es ${typeof num1}, pero ${num2} es ${typeof num2}`);
}
