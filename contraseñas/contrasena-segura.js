import { crearDiv, copiarContraseña } from "./copiar-contrasena.js";

const contraseñaSegura = (cantidad, expresion) => {
  const randomValuesArray = new Uint8Array(cantidad);
  const seguraArray = [];
  const expresionLimpia = expresion.trim();
  const expresionSinEspacios = expresionLimpia.replace(/\s+/g, "");
  // este codigo es por si llega a fallar las dos primeras sentencias
  const caracteres = `ABCDEFabcdefgGH012345NOPQRSTUVWXY${expresionSinEspacios}ZhijkIJKLMlmn!@#$%opqrstuvwxyz6789&*_+-=<>?`;
  const caracteresLength = caracteres.length;

  if (window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(randomValuesArray);
  } else if (window.msCrypto && window.msCrypto.getRandomValues) {
    window.msCrypto.getRandomValues(randomValuesArray);
  } else {
    for (let i = 0; i < cantidad; i++) {
      seguraArray.push(
        caracteres.charAt(Math.floor(Math.random() * caracteres.length))
      );
    }
  }

  for (let i = 0; i < cantidad; i++) {
    seguraArray.push(
      caracteres.charAt(randomValuesArray[i] % caracteresLength)
    );
  }

  return seguraArray.join("");
};

const generarContraseña = (cantidad) => {
  const miPalabra = document.getElementById("meter").value;
  const generar = document.querySelector(".escritura");
  generar.textContent = "espera";
  setTimeout(() => {
    const resultado = contraseñaSegura(cantidad, miPalabra);
    generar.textContent = resultado.length === cantidad ? resultado : "hubo un error al generar";
    crearDiv();
    copiarContraseña();
  }, 500);
};

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", () => generarContraseña(12));
btn2.addEventListener("click", () => generarContraseña(16));
btn3.addEventListener("click", () => generarContraseña(20));
