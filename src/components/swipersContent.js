  export const swiperContent = () => {
  const spanCursor = `
  <span class="cursor text-">|</span>
  `;

  document
  .getElementById("instructions")
  .insertAdjacentHTML("afterend", spanCursor);

  return `
  <div class="swiper mySwiper w-full h-[60%]" hidden>
    <div class="swiper-wrapper">
      
    <div class="swiper-slide text-center  text-2xl dark:bg-black/80 ">
        <div class="grid justify-center gap-3 ">
          <input type="text" id="primerName"
            class="text-3xl w-100 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center"
            placeholder="Ingresa tu nombre">
          <button id="nextBtnName"
            class="btn border rounded-2xl dark:bg-white bg-black text-white w-100 h-20 dark:text-gray-900 text-3xl opacity-50"
            disabled>Siguiente</button>
        </div>
      </div>
      

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
          <div class="grid gap-3 justify-center">
            <input type="text"
              class="text-3xl w-100 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center"
              placeholder="Paterno" id="apellidoP">
            <input type="text"
              class="text-3xl w-100 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center"
              placeholder="Materno" id="apellidoM">
            <button id="nextBtnApe"
              class="btn border rounded-2xl dark:bg-white w-100 h-20 dark:text-gray-900 text-3xl opacity-50"
              disabled>Siguiente</button>
          </div>
      </div>

    <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
      <div class="text-gray-950 dark:text-white p-5"></div>
        <div class="grid gap-5 justify-center">
          <div>
            <input id="days" type="number" placeholder="Día" min="1" max="31"
              class="text-3xl w-40 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl  text-center">
            <input id="months" type="number" min="1" max="12" placeholder="Mes"
              class="text-3xl w-40 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl  text-center">
            <input id="years" type="number" min="1900" max="${new Date().getFullYear()}" placeholder="Año"
              class="text-3xl w-40 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl  text-center">
          </div>
          <div>
            <button id="nextBtnDate"
              class="btn border rounded-2xl dark:bg-white w-100 h-20 dark:text-gray-900 text-3xl opacity-50"
              disabled>Siguiente</button>
          </div>
      </div>
    </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center" id="botones">
        <div class="grid text-gray-950 dark:text-white p-5">Género</div>
        <button
          class="btn w-50 h-25 border rounded-2xl border-white opacity-50 hover:opacity-100 cursor-pointer text-3xl"
          id="H">
          Masculino
        </button>
        <button
          class="btn w-50 h-25 border rounded-2xl border-white opacity-50 hover:opacity-100 cursor-pointer text-3xl"
          id="M">
          Femenino
        </button>
        <div class="p-5">
          <button id="nextBtnGender"
            class="btn border rounded-2xl dark:bg-white w-100 h-20 dark:text-gray-900 text-3xl opacity-50"
            disabled>Siguiente</button>
        </div>
      </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
        <div class="text-gray-950 dark:text-white p-5"> En que Estado naciste?</div>
        <div class="grid gap-5 justify-center">
          <select id="estates"
            class="text-3xl w-100 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center">
          </select>
          <button id="nextBtnEstate"
            class="btn border rounded-2xl dark:bg-white w-100 h-20 dark:text-gray-900 text-3xl opacity-50 "
            disabled>Siguiente</button>
        </div>
      </div>

      <div class="swiper-slide text-2xl dark:bg-black/80 text-center flex justify-center items-center">
        <div class="grid text-center justify-center justify-items-center gap-5">
          <input id="digitoEnd" type="number"
            class="rounded-2xl items-center text-7xl w-25 h-30 bg-gray-900 dark:bg-white/5 border rounded-5xl py-1.5 pr-3 pl-1 text-center"
            value="" min="0" max="9" disabled>
          <button id="numberRand" class="btn border rounded-2xl dark:bg-white w-70 h-20 dark:text-gray-900 text-3xl">
            Generar número</button>
          <button id="whatIs" class="cursor-pointer text-white hover:text-white top-0">¿Qué es el dígito final?</button>
        </div>
      </div>

   </div><!-- cierra swiper-wrapper -->
    <div class="swiper-pagination"></div>
  </div><!-- cierra swiper mySwiper -->
    `;
    };

