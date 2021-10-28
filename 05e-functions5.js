const check = (num1, num2) => {
  if (typeof num1 === typeof num2) {
    if (num1 > num2) {
      console.log(`${num1} es mayor a ${num2}`);
    } else if (num1 < num2) {
      console.log(`${num1} es menor a ${num2}`);
    } else {
      console.log(`${num1} es igual a ${num2}`);
    }
  } else {
    //*si no usáramos backticks:
    console.log(
      num1 + " es " + typeof num1 + " pero " + num2 + " es " + typeof num2
    );
  }
};

check(5, "5");
check(6, 8);
check(50, 50);
