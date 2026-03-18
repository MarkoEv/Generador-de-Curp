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
  // boton empezar
  const btnInitCurp = document.getElementById("initCurp");
  // contenido del header
  const header = document.querySelector("header");
  // contenido html swiper
  const swiperHtml = document.querySelector(".mySwiper");

  // cuando se da click mostrar el swiper=>
  btnInitCurp.addEventListener("click", () => {
    header.classList.remove("h-full");
    header.classList.add("h-[40%]");
    swiperHtml.classList.remove("hidden");
    btnInitCurp.remove();
  });
}
