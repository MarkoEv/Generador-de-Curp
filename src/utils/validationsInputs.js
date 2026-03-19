import { curp } from "../models/getInputs";

function validarNombre(input) {
  if (input.value.length >= 3) {
    nextBtnName.classList.remove("opacity-50");
    nextBtnName.removeAttribute("disabled");
  } else {
    nextBtnName.classList.add("opacity-50");
    nextBtnName.setAttribute("disabled", "");
  }
}

function validarApellidos() {
  if (apellidoP.value.length >= 3 && apellidoM.value.length >= 3) {
    nextBtnApe.classList.remove("opacity-50");
    nextBtnApe.removeAttribute("disabled");
  } else {
    nextBtnApe.classList.add("opacity-50");
    nextBtnApe.setAttribute("disabled", "");
  }
}

function validarFecha() {
  if (days.value && months.value && years.value) {
    nextBtnDate.classList.remove("opacity-50");
    nextBtnDate.removeAttribute("disabled");
  } else {
    nextBtnDate.classList.add("opacity-50");
    nextBtnDate.setAttribute("disabled", "");
  }
}

function validarEstado() {
  if (estates.value && estates.value !== "0") {
    nextBtnEstate.classList.remove("opacity-50");
    nextBtnEstate.removeAttribute("disabled");
  } else {
    nextBtnEstate.classList.add("opacity-50");
    nextBtnEstate.setAttribute("disabled", "");
  }
}

function validarGenero() {
  if (curp.digitoGender) {
    nextBtnGender.classList.remove("opacity-50");
    nextBtnGender.removeAttribute("disabled");
  } else {
    nextBtnGender.classList.add("opacity-50");
    nextBtnGender.setAttribute("disabled", "");
  }
}

export const validationsInputs = () => {
  primerName.addEventListener("input", () => {
    validarNombre(primerName);
  });
  apellidoP.addEventListener("input", validarApellidos);
  apellidoM.addEventListener("input", validarApellidos);
  days.addEventListener("input", validarFecha);
  months.addEventListener("input", validarFecha);
  years.addEventListener("input", validarFecha);
  estates.addEventListener("change", validarEstado);
  document.querySelector("#botones").addEventListener("click", (e) => {
    if (e.target.id === "H" || e.target.id === "M") {
      validarGenero();
    } else {
      return;
    }
  });
};
