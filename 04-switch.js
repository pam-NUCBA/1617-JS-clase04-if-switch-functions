//*https://www.w3schools.com/js/js_switch.asp

const alien = {
  ojos: 4,
  idioma: "ingles",
  planeta: "Mandalore",
};

//*después del break no ejecuta nada hasta detectar que diga case o default

switch (alien.ojos) {
  case 0:
    console.log("miraluka");
    break;
  case 1:
    console.log("abyssin");
    break;
  case 2:
    console.log("wookie");
    break;
  case 3:
    console.log("gran");
    break;
  case 4:
    console.log("dyplotids");
    break;
    console.log("no va a entrar porque dejó de ejecutar!");
  default:
    console.log("no sé qué es pero seguro vive en Tatooine");
}

//*el switch pasa en los parentesis el key, y en el case el valor
switch (alien.planeta) {
  case "Tatooine":
    console.log("es un desierto");
    break;
  case "Endor":
    console.log("está lleno de osos");
    break;
  default:
    console.log("eso no es una luna");
    break;
}

//*el default es a donde cae cuando no se cumplió la condición en ninguno de los case