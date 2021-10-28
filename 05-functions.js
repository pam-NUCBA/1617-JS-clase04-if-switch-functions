//*https://www.w3schools.com/js/js_functions.asp

//*hay que declarar la función...
function saludo(name) {
  //ese name es un parametro!
  console.log(`hola ${name}`); //no va a saber qué escribir en name hasta que ejecutemos la función y le pongamos un valor
}

//* ... y después llamarla!
saludo("Pam"); // entre los paréntesis ponemos lo que pasamos como parámetro!
//* podemos llamar mil veces a las funciones
saludo("Totoro");
saludo("Pablo");
saludo() //al no pasar un valor, nos mete un undefined en el name
saludo(16)
saludo(true)

//*no especificamos un tipo! tal como estamos ahora, no podemos especificarlo, así que... lo que le pasen lo va a usar