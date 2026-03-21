import { textInstruction } from "../utils/instructions";
import { renderCurpBoxes } from "../components/renderCurpBoxes";


export const clickEnd = () => {   
    // boton end
    const finButton = document.getElementById("finButton");
  

    // botones : goHome copyCurp
    const copyCurp = document.getElementById("copyCurp");
    const goHome = document.getElementById("goHome");


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
      finButton.addEventListener("click", () => {
        header.classList.add("h-full");
        header.classList.remove("md:h-[50%]", "lg:h-[50%]", "h-[50%]");
        swiperHtml.setAttribute("hidden", "");
        renderCurpBoxes();
        textInstruction("Ya puedes copiar tu curp");
        divTools.classList.add("hidden");
        logos.classList.remove("hidden")
        iconImg.classList.add("hidden")

        goHome.classList.remove("hidden")
        copyCurp.classList.remove("hidden")
      });

}
