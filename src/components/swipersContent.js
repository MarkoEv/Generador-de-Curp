export const swiperContent = () => {
  return `
     <!-- Swiper -->
  <div class="swiper mySwiper w-full h-[60%] hidden">
    <div class="swiper-wrapper">
      <div class="swiper-slide text-center  text-2xl dark:bg-black/80 ">
        <div class="flex justify-center gap-3 ">
          <div> <div class="grid p-5 text-gray-950 dark:text-white">Nombres</div>
            <input type="text" id="primerName" class="text-3xl w-100 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center"
              placeholder="Jose Luis">
          </div>
        </div>
      </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
        <div class="grid ">
          <div class="grid p-5 text-gray-950 dark:text-white">APELLIDOS</div>
          <div class="">
            <input type="text" class="text-3xl w-100 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center"
              placeholder="Paterno" id="apellidoP">
            <input type="text" class="text-3xl w-100 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center"
              placeholder="Materno" id="apellidoM">
          </div>
        </div>
      </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
        <div class="text-gray-950 dark:text-white p-5">Fecha de nacimiento</div>
        <div class="flex justify-center gap-3.5">
        <input id="days"  placeholder="01" class="text-3xl w-50 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl  text-center">
        <input id="moths" placeholder="12" class="text-3xl w-50 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl  text-center">
        <input id="years" placeholder="2000" class="text-3xl w-50 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl  text-center">
        </div>
      </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
        <div class="text-gray-950 dark:text-white p-5"> En que Estado naciste?</div>
        <select id="estates" class="text-3xl w-60 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center ">
          <option class="text-black/50">Selecciona</option>
        </select>
      </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
        <div class="grid text-gray-950 dark:text-white p-5">Genero</div>
        <select id="genero" class="text-3xl w-60 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center ">
          <option class="text-black/50" value="h">Hombre</option>
          <option class="text-black/50" value="m">mujer</option>
        </select>      
                  <button type="button" class="buttonCalcule">Generar CURP</button>

        </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
    `;
};
