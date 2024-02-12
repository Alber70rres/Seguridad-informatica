const general = document.querySelectorAll(".link-unique");
const enlaces = document.querySelectorAll(".color");
const primerEnlace = enlaces[0];
const segundoEnlace = enlaces[1];
const tercerEnlace = enlaces[2];
const cuartoEnlace = enlaces[3];

const mostrarColorEnlace = (entradas, observador,validacion) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      segundoEnlace.classList.remove("colorObserver");
      primerEnlace.classList.add("colorObserver");
    } else {
      primerEnlace.classList.remove("colorObserver");
      segundoEnlace.classList.add("colorObserver");
    }
  });
};

const observador = new IntersectionObserver(mostrarColorEnlace, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.27,
});


observador.observe(general[0]);
