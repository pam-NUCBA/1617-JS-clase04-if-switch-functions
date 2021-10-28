const temperatura = 30.1;

//*solo podemos tener una respuesta true, y una false
console.log(temperatura > 30 ? "qué horno" : "zafa");

//*podemos no querer un false, solo que haga algo si es true. Si no cumple la condición devuelve un false, no tiene una segunda condición:
console.log(temperatura > 30 && "tomá un helado");
