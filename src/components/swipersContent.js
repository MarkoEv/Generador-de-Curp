export const swiperContent = () => {
  const spanCursor = `
  <span class="cursor text-">|</span>
  `;

  document
  .getElementById("instructions")
  .insertAdjacentHTML("afterend", spanCursor);

  return `
  <div class="swiper mySwiper w-full h-[40%] md:h-[60%] lg:h-[60%]" hidden>
    <div class="swiper-wrapper">
      <div class="swiper-slide text-center  text-2xl dark:bg-black/80 ">
        <div class="grid justify-center gap-3 ">
          <input type="text" id="primerName"
            class="lg:text-3xl md:text-2xl text-lg w-50 md:w-70 lg:w-100 h-15 md:h-20 lg:h-20 bg-blue-800 text-white dark:bg-white/5 border rounded-xl md:rounded-2xl lg:rounded-3xl py-1.5 pr-3 pl-1 text-center"
            placeholder="Ingresa tu nombre">
          <button id="nextBtnName"
            class="btn border md:rounded-2xl lg:rounded-3xl rounded-xl dark:bg-white bg-green-600 text-white md:w-70 lg:w-100 w-50 h-15 md:h-20 lg:h-20 dark:text-gray-900 lg:text-3xl md:text-2xl opacity-50"
            disabled>Siguiente</button>
        </div>
      </div>


      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
        <div class="grid gap-3 justify-center">
          <input type="text"
            class="lg:text-3xl md:text-2xl text-lg w-50 md:w-70 lg:w-100 h-15 md:h-20 lg:h-20 bg-blue-800 text-white dark:bg-white/5 border rounded-xl md:rounded-2xl lg:rounded-3xl py-1.5 pr-3 pl-1 text-center"
            placeholder="Paterno" id="apellidoP">
          <input type="text"
            class="lg:text-3xl md:text-2xl text-lg w-50 md:w-70 lg:w-100 h-15 md:h-20 lg:h-20 bg-blue-800 text-white dark:bg-white/5 border rounded-xl md:rounded-2xl lg:rounded-3xl py-1.5 pr-3 pl-1 text-center"
            placeholder="Materno" id="apellidoM">
          <button id="nextBtnApe"
            class="btn border rounded-2xl text-white bg-green-600 dark:bg-white dark:text-gray-900 w-50 md:w-70 lg:w-100 h-15 md:h-20 lg:h-20  lg:text-3xl md:text-2xl text-lg opacity-50"
            disabled>Siguiente</button>
        </div>
      </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
        <div class="grid gap-3 justify-items-center">

          <div class="flex gap-2">
            <input id="days" type="number" placeholder="Día" min="1" max="31" class="text-lg md:text-2xl lg:text-3xl
               w-20 md:w-28 lg:w-36
               h-14 md:h-18 lg:h-20
               bg-blue-800 text-white dark:bg-white/5
               border rounded-xl md:rounded-2xl lg:rounded-3xl text-center">

            <input id="months" type="number" min="1" max="12" placeholder="Mes" class="text-lg md:text-2xl lg:text-3xl
               w-20 md:w-28 lg:w-36
               h-14 md:h-18 lg:h-20
               bg-blue-800 text-white dark:bg-white/5
               border rounded-xl md:rounded-2xl lg:rounded-3xl text-center">

            <input id="years" type="number" min="1900" max="${new Date().getFullYear()}" placeholder="Año" class="text-lg md:text-2xl lg:text-3xl
               w-24 md:w-36 lg:w-48
               h-14 md:h-18 lg:h-20
               bg-blue-800 text-white dark:bg-white/5
               border rounded-xl md:rounded-2xl lg:rounded-3xl text-center">
          </div>

          <button id="nextBtnDate" class="btn border rounded-2xl text-white bg-green-600 dark:bg-white dark:text-gray-900
             text-lg md:text-2xl lg:text-3xl
             w-50 md:w-70 lg:w-100
             h-14 md:h-18 lg:h-20
             opacity-50" disabled>Siguiente</button>

        </div>
      </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center" id="botones">
        <button
          class="btn w-40 md:w-50 lg:w-55  h-15 md:h-15 lg:h-25 border rounded-2xl bg-blue-700 text-white dark:bg-black/5 dark:border-white opacity-50 hover:opacity-100 cursor-pointer lg:text-3xl md:text-2xl text-lg"
          id="H">
          Masculino
        </button>
        <button
          class="btn w-40 md:w-50 lg:w-55  h-15 md:h-15 lg:h-25 border rounded-2xl bg-pink-500 text-white dark:bg-black/5 dark:border-white opacity-50 hover:opacity-100 cursor-pointer lg:text-3xl md:text-2xl text-lg"
          id="M">
          Femenino
        </button>
        <div class="p-5">
          <button id="nextBtnGender"
            class="btn border rounded-2xl  text-white bg-green-600 dark:bg-white w-50 md:w-70 lg:w-100 h-15 md:h-20 lg:h-20 dark:text-gray-900 lg:text-3xl md:text-2xl text-lg opacity-50"
            disabled>Siguiente</button>
        </div>
      </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
        <div class="grid gap-5 justify-center">
          <select id="estates"
            class="lg:text-3xl md:text-2xl text-lg w-50 md:w-70 lg:w-100 h-15 md:h-20 lg:h-20 bg-blue-800 text-white dark:bg-white/5 border rounded-xl md:rounded-2xl lg:rounded-3xl py-1.5 pr-3 pl-1 text-center">
          </select>
          <button id="nextBtnEstate"
            class="btn border rounded-2xl  text-white bg-green-600 dark:bg-white w-50 md:w-70 lg:w-100 h-15 md:h-20 lg:h-20 dark:text-gray-900 lg:text-3xl md:text-2xl text-lg opacity-50 "
            disabled>Siguiente</button>
        </div>
      </div>

      <div class="swiper-slide text-2xl dark:bg-black/80 text-center flex justify-center items-center">
        <div class="grid text-center justify-center justify-items-center gap-5">
          <input id="digitoEnd" type="text"
            class="items-center text-7xl w-25 h-30 bg-white text-blue-700 dark:text-white dark:bg-white/5 border-2 rounded-3xl py-1.5 pr-3 pl-1 text-center"
            value="" min="0" max="9" disabled>
          <button id="numberRand"
            class="btn border rounded-2xl  text-white bg-green-600 dark:bg-white w-50 md:w-50 lg:w-70 h-15 md:h-20 lg:h-20 dark:text-gray-900 lg:text-3xl md:text-2xl text-lg">
            Generar número</button>
          <button id="whatIs" class="text-sm cursor-pointer text-blue-700 dark:text-white top-0">¿Qué es el dígito
            final?</button>
        </div>
      </div>

    </div><!-- cierra swiper-wrapper -->
    <div class="swiper-pagination"></div>
  </div><!-- cierra swiper mySwiper -->
  `;
  };
