export const crearDiv = () => {
    const divCopiaPega = document.createElement("div");
    divCopiaPega.className = "copiaPega";
    const imagen = document.createElement("img");
    imagen.className = "imagen";
    imagen.src = "../assets/copiar.png";
    imagen.alt = "";
    divCopiaPega.appendChild(imagen);
    const divEscritura = document.querySelector(".escritura");
    divEscritura.appendChild(divCopiaPega);
  };
  
  export const copiarContraseña = () => {
    const changeImg = document.querySelector(".copiaPega");
    changeImg.addEventListener("click", () => {
      const image = document.querySelector(".imagen");
      console.log(image)
      const currentSrc = image.src;
      if (currentSrc.includes("copiar.png")) {
        const textoCopiar = document.querySelector(".escritura");
        const texto = textoCopiar.innerText;
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = texto;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        image.src = "../assets/comprobar.png";
        setTimeout(() => {
          image.src = "../assets/copiar.png";
        }, 500);
      }
    });
  };