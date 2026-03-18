export const swiperContent = () => {
  return `
  <div class="swiper mySwiper w-full h-[60%]" hidden>
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
        <input id="months" placeholder="12" class="text-3xl w-50 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl  text-center">
        <input id="years" placeholder="2000" class="text-3xl w-50 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl  text-center">
        </div>
      </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center">
        <div class="text-gray-950 dark:text-white p-5"> En que Estado naciste?</div>
        <select id="estates" class="text-3xl w-60 h-20 bg-gray-900 dark:bg-white/5 border rounded-3xl py-1.5 pr-3 pl-1 text-center ">
          <option class="text-black/50">Selecciona</option>
        </select>
      </div>

      <div class="swiper-slide text-center text-2xl dark:bg-black/80 flex justify-center items-center" id="botones">
        <div class="grid text-gray-950 dark:text-white p-5">Género</div>
        <button class="btn w-30 h-30 border rounded-2xl border-white cursor-pointer hover:text-green-500" id="H">
        <svg id="H" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-man"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8c1.628 0 3.2 .787 4.707 2.293a1 1 0 0 1 -1.414 1.414c-.848 -.848 -1.662 -1.369 -2.444 -1.587l-.849 5.944v4.936a1 1 0 0 1 -2 0v-4h-2v4a1 1 0 0 1 -2 0v-4.929l-.85 -5.951c-.781 .218 -1.595 .739 -2.443 1.587a1 1 0 1 1 -1.414 -1.414c1.506 -1.506 3.08 -2.293 4.707 -2.293z" /><path d="M12 1a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" /></svg>
        </button>
        <button class="btn w-30 h-30 border rounded-2xl border-white cursor-pointer hover:text-pink-500" id="M">
        <svg id="M" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-woman"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8c1.91 0 3.79 .752 5.625 2.219a1 1 0 1 1 -1.25 1.562c-1.019 -.815 -2.016 -1.345 -2.997 -1.6l1.584 5.544a1 1 0 0 1 -.962 1.275h-1v4a1 1 0 0 1 -2 0v-4h-2v4a1 1 0 0 1 -2 0v-4h-1a1 1 0 0 1 -.962 -1.275l1.584 -5.545c-.98 .256 -1.978 .786 -2.997 1.601a1 1 0 1 1 -1.25 -1.562c1.733 -1.386 3.506 -2.133 5.307 -2.212l.335 -.007z" /><path d="M12 1a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" /></svg>        
        </button>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
    `;
};
