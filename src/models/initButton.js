import { textInstruction } from "../utils/instructions";
import { renderCurpBoxes } from "../components/renderCurpBoxes";
import { initSwiper } from "../utils/swiper";
import { pintLiByPage } from "../utils/pintLiByPage";

// función para manejar el evento del boton principal (comenzar)
// obejtivo: al dar click iniciar swiper

export function clickNext() {
  // iniciar swiper
  const swiper = initSwiper();
  // boton empezar
  const btnInitCurp = document.getElementById("initCurp");
  // contenido del header
  const header = document.querySelector("header");
  // contenido html swiper
  const swiperHtml = document.querySelector(".mySwiper");
  swiperHtml.classList.remove("swiper-backface-hidden");
  textInstruction("Descubre como se construye tu curp");
  // div logos
  const logos = document.getElementById("logos");
  const iconImg = document.getElementById("iconImg");
  // boton para retroceder slide
  const divTools = document.getElementById("divTools");


  // cuando se da click mostrar el swiper=>
  btnInitCurp.addEventListener("click", () => {
    header.classList.remove("h-full");
    header.classList.add("md:h-[40%]", "lg:h-[40%]", "h-[60%]");
    swiperHtml.removeAttribute("hidden");
    btnInitCurp.remove();
    textInstruction("Ingresa tus datos");
    renderCurpBoxes();
    divTools.classList.remove("hidden");
    logos.classList.add("hidden")
    iconImg.classList.remove("hidden")
    pintLiByPage(swiper)
  });
}
