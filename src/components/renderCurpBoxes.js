import { curp } from "../models/getInputs";

// funcion para inyectar html => ul : header
export const renderCurpBoxes = () => {
    
const curpTemplate = `
<li class="digitoOne w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoOne ||  ""}</li>
<li class="digitoTwo w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoTwo ||  ""}</li>
<li class="digitoTree w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoTree ||  ""}</li>
<li class="digitoFour w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoFour ||  ""}</li>
<li class="digitoYear1 w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoYear?.[0] ||  ""}</li>
<li class="digitoYear2 w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoYear?.[1] ||  ""}</li>
<li class="digitoMonth1 w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoMonth[0] ||  ""}</li>
<li class="digitoMonth2 w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoMonth[1] ||  ""}</li>
<li class="digitoDay1 w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoDay[0] ||  ""}</li>
<li class="digitoDay2 w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoDay[1] ||  ""}</li>
<li class="digitoGender w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoGender ||  ""}</li>
<li class="digitoEstate1 w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoEstate[0] ||  ""}</li>
<li class="digitoEstate2 w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoEstate[1] ||  ""}</li>
<li class="digitoConsoApP w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoConsoApP ||  ""}</li>
<li class="digitoConsoApM w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoConsoApM ||  ""}</li>
<li class="digitoConsoName w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoConsoName ||  ""}</li>
<li class="digitoSigle w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoSigle ||  ""}</li>
<li class="digitoEnd w-10 h-10 border text-center border-white flex justify-center items-center">${curp.digitoEnd ||  ""}</li>
`;

// const digitoOne = document.querySelector(".digitoOne")
// const digitoTwo = document.querySelector(".digitoTwo")
// const digitoTree = document.querySelector(".digitoTree")
// const digitoFour = document.querySelector(".digitoFour")
// const digitoYear1 = document.querySelector(".digitoYear1")
// const digitoYear2 = document.querySelector(".digitoYear2")
// const digitoMonth1 = document.querySelector(".digitoMonth1")
// const digitoMonth2 = document.querySelector(".digitoMonth2")
// const digitoDay1 = document.querySelector(".digitoDay1")
// const digitoDay2 = document.querySelector(".digitoDay2")
// const digitoGender = document.querySelector(".digitoGender")
// const digitoEstate1 = document.querySelector(".digitoEstate1")
// const digitoEstate2 = document.querySelector(".digitoEstate2")
// const digitoConsoApP = document.querySelector(".digitoConsoApP")
// const digitoConsoApM = document.querySelector(".digitoConsoApM")
// const digitoConsoName = document.querySelector(".digitoConsoName")
// const digitoSigle = document.querySelector(".digitoSigle")
// const digitoEnd = document.querySelector(".digitoEnd")



const curpBoxes = document.getElementById("renderCurp");
curpBoxes.innerHTML = curpTemplate;

}
