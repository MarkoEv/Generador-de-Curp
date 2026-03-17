export const swiperContent = () => {
  return `
     <!-- Swiper -->
  <div class="swiper mySwiper w-full h-[60%]">
    <div class="swiper-wrapper">

      <div class="swiper-slide text-center text-2xl bg-black/80 ">
        <div class="grid justify-center gap-3 ">
          <h1 class="text-2xl" id="instrucciones"></h1>
          <button class="btn border rounded-2xl bg-white w-60 h-20 text-gray-900 text-3xl">Empezar</button>
        </div>
      </div>

      <div class="swiper-slide text-center  text-2xl bg-black/80 ">
        <div class="flex justify-center gap-3 ">
          <div>
            <input type="text" class="text-3xl w-100 h-20 bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center"
              placeholder="Escribe tu nombre">
          </div>
        </div>
      </div>

      <div class="swiper-slide text-center text-2xl bg-black/80 flex justify-center items-center">
        <div class="grid ">
          <div class="grid p-5">APELLIDOS</div>
          <div class="">
            <input type="text" class="text-3xl w-100 h-20 bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center"
              placeholder="PATERNO">
            <input type="text" class="text-3xl w-100 h-20 bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center"
              placeholder="MATERNO">
          </div>
        </div>
      </div>

      <div class="swiper-slide text-center text-2xl bg-black/80 flex justify-center items-center">
        <div class="p-5">Fecha de nacimiento</div>
        <div class="flex justify-center gap-3.5">
          <select type="nu" class="text-3xl w-50 h-20 bg-white/5 border rounded-3xl  text-center">
            <option>Día</option>
          </select>
          <select type="nu" class="text-3xl w-50 h-20 bg-white/5 border rounded-3xl  text-center">
            <option>Mes</option>
          </select>
          <select type="nu" class="text-3xl w-50 h-20 bg-white/5 border rounded-3xl  text-center">
            <option>Año</option>
          </select>
        </div>
      </div>

      <div class="swiper-slide text-center text-2xl bg-black/80 flex justify-center items-center">
        <div class="p-5"> En que Estado naciste?</div>
        <select class="text-3xl w-60 h-20 bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center ">
          <option class="text-black/50">Selecciona</option>
        </select>
      </div>

      <div class="swiper-slide text-center text-2xl bg-black/80 flex justify-center items-center">
        <div class="grid p-5">Genero</div>
        <button class="btn py-6 px-6 border rounded-2xl bg-blue-400 hover:bg-blue-400/70 cursor-pointer">HOMBRE</button>
        <button class="btn py-6 px-6 border rounded-2xl bg-pink-400 hover:bg-pink-400/70 cursor-pointer">MUJER</button>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
    `;
};
