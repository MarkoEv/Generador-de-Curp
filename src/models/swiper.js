const initSwiper = () => {
  var swiper = new Swiper(".mySwiper", {
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          " " +
          "border-2" +
          ' ">' +
          (index + 1) +
          "</span>"
        );
      },
    },
  });
  return swiper;
};

// función para manejar el click del boton expezar
export function clickNext() {
  // iniciar swiper
  const swiper = initSwiper();
  // paginacion del swiper
  const pagination = document.querySelector(".swiper-pagination");
  // contenido html del primer swiper
  const swiperOne = document.getElementById("swiperOne");
  // boton empezar
  const btninitCurp = document.getElementById("initCurp");
  // cuando se da click =>
  btninitCurp.addEventListener("click", () => {
    //remover la clase hidden para mostrar la pagination
    pagination.classList.remove("hidden");
    // remover el primer swiper
    swiperOne.remove();
  });
}
