const aparecer = document.querySelector(".desplegar");
const abrir = document.querySelector(".icono");
abrir.addEventListener("click",()=>{
    aparecer.classList.toggle("aparecer");
    document.body.style.overflowY= "hidden";
})

const cerrar = document.querySelector(".cerrar");
cerrar.addEventListener("click",()=>{
    aparecer.classList.toggle("aparecer");
    document.body.style.overflowY= "auto";
})

const myComponent = document.querySelector('.barra');
const desplegar = document.querySelector('.desplegar');

desplegar.addEventListener('click', (event) => {
  const isClickedInside = myComponent.contains(event.target);
  if (isClickedInside == false) {
    aparecer.classList.toggle("aparecer");
    document.body.style.overflowY= "auto";
  }
});