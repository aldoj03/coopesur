$(document).ready(function() {
  /* OCULTA LA PANTALLA DE CARGA */

  setTimeout(() => {
    $(".loader").hide();
  }, 2000);

  /*  MUESTRA _ OCULTA EL MENU RESPONSIVE  */

  $(".nav--responsive__ico").click(function() {
    if ($(".nav--responsive").css("display") == "none") {
      $(".nav--responsive").slideDown();
    } else {
      $(".nav--responsive").slideUp();
    }
  });

  /* CAMBIA LAS CLASES AL MENU PRINCIPAL PARA VOLVERLO RESPONSIVE */
  $(window).resize(function() {
    if ($(document).width() < 980) {
      $(".nav--main")
        .removeClass("nav--main")
        .addClass("nav--responsive")
        .css("display", "none");
      $(".nav--main__item")
        .removeClass("nav--main__item")
        .addClass("nav--responsive__item");
    } else {
      $(".nav--responsive")
        .removeClass("nav--responsive")
        .addClass("nav--main")
        .css("display", "flex");
      $(".nav--responsive__item")
        .removeClass("nav--responsive__item")
        .addClass("nav--main__item");
    }
  });

  /* OCULTA EL TITULO DEL BLOG */

  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".section2_baner h1").css("opacity", 0);
    } else {
      $(".section2_baner h1").css("opacity", 1);
    }
    if (scroll > 300) {
      $(".nav--fixed").css("display", "flex");
    } else {
      $(".nav--fixed").css("display", "none");
    }
  });

  /* MUESTRA EL MODAL*/

  $(".leer-mas").click(function() {
    $(".modal").css("display", "flex");
    $(".app").css("filter", "brightness(0.5)");

    /* INSERTA LOS DATOS DE LA PUBLICACION EN EL MODAL */ 
    var alt = $(this)
      .parent()
      .siblings("figure")
      .children("img")
      .attr("alt");
    var src = $(this)
      .parent()
      .siblings("figure")
      .children("img")
      .attr("src");
    var title = $(this)
      .siblings("h3")
      .text();
    var description = $(this)
      .siblings("p")
      .text();
    console.log(title, description);

    $(".modal__container img").attr("src", src);
    $(".modal__container img").attr("alt", alt);
    $(".modal__container h1").text(title);
    $(".modal__container p").text(description);
  });

  /* CIERRA EL MODAL */

  $(".close").click(function() {
    $(".app").css("filter", "brightness(1)");
    $(".modal").css("display", "none");
  });
});
