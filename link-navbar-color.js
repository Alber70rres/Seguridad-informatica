$(document).ready(function () {
  // Función para manejar el desplazamiento y el clic en enlaces de la barra lateral
  function handleNavigation() {
    var scrollPos = $(document).scrollTop();

    $("h2[id]").each(function () {
      const sectionId = $(this).attr("id");
      const sectionTop = $(this).offset().top;
      const sectionBottom = sectionTop + $(this).outerHeight();
      const windowHeight = $(window).height();
      const windowCenter = windowHeight / 3.8;

      // Verifica si el centro de la sección está en el viewport
      if (
        scrollPos + windowCenter >= sectionTop &&
        scrollPos + windowCenter <= sectionBottom
      ) {
        // Aplica estilos cuando la sección está en el centro durante el desplazamiento
        $("#subtitle a.page1").removeClass("page1");
        $("#subtitle a").removeClass("active");
        $('#subtitle a[href="#' + sectionId + '"]').addClass("active");
      }
    });
  }

  // Manejar el desplazamiento inicial
  handleNavigation();

  // Manejar el desplazamiento
  $(window).scroll(function () {
    handleNavigation();
  });

  // Manejar el clic en enlaces de la barra lateral
  $("#subtitle a.color").on("click", function (event) {
    event.preventDefault();
    var target = $(this).attr("href");
    var offset = $(target).offset().top;

    $("html, body").scrollTop(offset);

    // Aplica estilos cuando se hace clic en un enlace de la barra lateral
    $("#subtitle a").removeClass("active");
    $("#subtitle a.color").removeClass("page1");
    $(this).addClass("page1");
  });
});
