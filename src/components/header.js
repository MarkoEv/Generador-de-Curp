import logoDark from "../../public/logos/gcDark.png"
import logoLigth from "../../public/logos/gcLight.png"
import icon from "../../public/icon/icon.png"
export const header = () => {
    return `
    <header class="h-full">
        <div class="swiper-slide text-center place-content-center  dark:bg-black/80 flex justify-center items-center ">
            <div class="top-0 absolute right-0 p-5 flex justify-between items-center gap-5">
                <div id="iconImg" class="hidden">
                <a href="/">
                <img src="${icon}" class="w-7">
                </a>
                </div>    
            <div class="">
                    <a href="https://github.com/MarkoEv/Generador-de-Curp" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github text-gray-950 dark:text-white border rounded-2xl p-0.5">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg> 
                        </a>
                </div>
                <label
                    class="flex cursor-pointer justify-end top-0 items-center gap-4 text-gray-950 dark:text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" value="synthwave"
                        class="toggle theme-controller dark:text-gray-100 text-gray-950" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
            <div class="top-0 absolute left-0 p-5 items-center hidden" id="divTools">
                <div class="grid grid-cols-2 gap-3 justify-center">
                    <a href="/" title="Reiniciar" class="flex justify-center items-center gap-1 border bg-blue-800 dark:bg-gray-100 border-blue-800 dark:border-white cursor-pointer rounded-xl">
                       <svg xmlns="http://www.w3.org/2000/svg" 
                       width="24" 
                       height="24" 
                       viewBox="0 0 24 24" 
                       fill="none" 
                       stroke="currentColor" 
                       stroke-width="2" stroke-linecap="round" 
                       stroke-linejoin="round" 
                       class="icon icon-tabler icons-tabler-outline icon-tabler-refresh dark:text-black text-white ">
                       <path stroke="none" 
                       d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
                       </a>
                    <button id="slidePrev" title="Anterior" class="flex justify-center items-center border bg-blue-800 dark:bg-gray-100 border-blue-800 dark:border-white opacity-50 hover:opacity-100 cursor-pointer rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left dark:text-black text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
                </button>
            </div>
        </div>
            <ul id="renderCurp" class="flex justify-center text-center p-5 gap-0.5"></ul>

            <div class="">
                <h1 class="text-2xl text-gray-950 dark:text-gray-100" id="text">
                </h1>
                <span class="text-gray-950 dark:text-gray-100 text-[10px] lg:text-2xl md:text-2xl" id="lyrics">
                </span>
            </div>
            <div class="grid justify-center items-center gap-13  justify-items-center">
            <div id="logos" class="">
            <img src="${logoLigth}"class="animate-pulse hidden dark:flex">
            <img src="${logoDark}" class="animate-pulse dark:hidden">
            </div>
            <button id="initCurp"
                    class="btn border rounded-2xl text-white bg-blue-900 dark:bg-white w-40 md:w-60 lg:w-60 h-20 md:h-20 lg:h-20 dark:text-gray-900 text-lg md:text-2xl lg:text-3xl">Empezar</button>
            </div>
            <div>
            </div>
            <div class="py-6">
                <span id="instructions" class="lg:text-3xl md:text-2xl text-[16px] p-5 text-blue-800 dark:text-white"></span>
            </div>
        </div>
    </header>

    `;
    };