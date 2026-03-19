import { clickInstructions } from "../utils/clickInstructions";
import { textInstruction } from "../utils/instructions";

// funcion para escuchar los eventos de click de los botones
// objetivo: manejar la paginacion de los sliders con swipers
export const changePage = (swiper) => {
  // const btnPrev = document.querySelector(".pag-prev");
  const btnNext = document.querySelector("#nextBtnName");
  const nextBtnApe = document.getElementById("nextBtnApe");
  const nextBtnDate = document.getElementById("nextBtnDate");
  const nextBtnEstate = document.getElementById("nextBtnEstate");
  const nextBtnGender = document.getElementById("nextBtnGender");
  const nextBtnEnd = document.getElementById("nextBtnEnd");
  const btnSlidePrev = document.getElementById("slidePrev");

  btnNext.addEventListener("click", () => {
    swiper.slideNext();
    btnSlidePrev.classList.remove("opacity-50");
  });
  clickInstructions(btnNext, "Ingresa tus apellidos");

  
  nextBtnApe.addEventListener("click", () => {
    swiper.slideNext();
  });
  clickInstructions(nextBtnApe, "Ingresa tu fecha de nacimiento");


  nextBtnDate.addEventListener("click", () => {
    swiper.slideNext();
  });
  clickInstructions(nextBtnDate, "H para hombre y M para mujer");


  nextBtnGender.addEventListener("click", () => {
    swiper.slideNext();
  });
  clickInstructions(nextBtnGender, "Selecciona tu estado de nacimiento");

  nextBtnEstate.addEventListener("click", () => {
    swiper.slideNext();
  });
  clickInstructions(nextBtnEstate, "Ultimo digito no se puede calcular, en este caso se asigna un número aleatorio"); 

  btnSlidePrev.addEventListener("click", () => {
    swiper.slidePrev();
    textInstruction("Revisa tus datos");

    if (swiper.activeIndex === 0) {
      btnSlidePrev.classList.add("opacity-50");
    }
  });
};
