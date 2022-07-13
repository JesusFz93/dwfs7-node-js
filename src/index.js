// const { suma } = require("./operaciones");
const axios = require("axios");

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ejecucion exitosa");
    reject("Ejecucion mal");
  }, 2000);
});

// ASYNC AWAIT
const ejecutaPromesa = async () => {
  try {
    // const data = await promesa;
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// ejecutaPromesa();

// PROMESAS
const funcionPromesa = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => console.log(e));
};

funcionPromesa();

//CALLBACK
// const saludo = (funcion, nombre) => {
//   console.log("Hola", nombre);
//   funcion();
// };

// const despedida = () => {
//   console.log("adios");
// };

// saludo(despedida, "Jesus");

// const suma = (a, b) => {
//   return a + b;
// };

// const resultado = suma(4, 7);
// console.log(resultado);

// const { suma, resta, multiplicacion, division } = require("./operaciones");

// let numero1 = 20;
// let numero2 = 10;

// let resultado_suma = 0;
// let resultado_resta = 0;
// let resultado_multiplicacion = 0;
// let resultado_division = 0;

// resultado_suma = suma(numero1, numero2);
// resultado_resta = resta(numero1, numero2);
// resultado_multiplicacion = multiplicacion(numero1, numero2);
// resultado_division = division(numero1, numero2);

// console.log(resultado_suma);
// console.log(resultado_resta);
// console.log(resultado_multiplicacion);
// console.log(resultado_division);
