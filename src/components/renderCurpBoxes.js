import { curp } from "../models/getInputs";

// funcion para inyectar html => ul : header
export const renderCurpBoxes = () => {
    
const curpTemplate = `
<li class="digitoOne w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoOne ||  ""}</li>
<li class="digitoTwo w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoTwo ||  ""}</li>
<li class="digitoTree w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoTree ||  ""}</li>
<li class="digitoFour w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoFour ||  ""}</li>
<li class="digitoYear1 w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoYear?.[0] ||  ""}</li>
<li class="digitoYear2 w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoYear?.[1] ||  ""}</li>
<li class="digitoMonth1 w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoMonth[0] ||  ""}</li>
<li class="digitoMonth2 w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoMonth[1] ||  ""}</li>
<li class="digitoDay1 w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoDay[0] ||  ""}</li>
<li class="digitoDay2 w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoDay[1] ||  ""}</li>
<li class="digitoGender w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoGender ||  ""}</li>
<li class="digitoEstate1 w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoEstate[0] ||  ""}</li>
<li class="digitoEstate2 w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoEstate[1] ||  ""}</li>
<li class="digitoConsoApP w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoConsoApP ||  ""}</li>
<li class="digitoConsoApM w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoConsoApM ||  ""}</li>
<li class="digitoConsoName w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoConsoName ||  ""}</li>
<li class="digitoSigle w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoSigle ||  ""}</li>
<li class="digitoEnd w-5 lg:w-12 md:w-8 h-5 md:h-8 lg:h-12 text-center border-blue-600 border-2 dark:border-white  text-blue-700 dark:text-white dark:bg-transparent flex justify-center items-center text-[10px] md:text-2xl lg:text-3xl">${curp.digitoEnd ||  ""}</li>
`;

const curpBoxes = document.getElementById("renderCurp");
curpBoxes.innerHTML = curpTemplate;

}
