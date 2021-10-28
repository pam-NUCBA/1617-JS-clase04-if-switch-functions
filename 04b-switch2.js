const age = 15;

//*no evalúa age sino true porque evalúa si es verdad que está en el rango
switch (true) {
  case age < 2:
    console.log("maternal");
    break;
  case age >= 2 && age < 5:
    console.log("jardín de infantes");
    break;
  case age >= 5 && age < 13:
    console.log("primaria");
    break;
  case age >= 13 && age < 18:
    console.log("secundaria");
    break;
  case age >= 18:
    console.log("universidad");
    break;
  default:
    console.log("no debería entrar acá");
    break;
}
