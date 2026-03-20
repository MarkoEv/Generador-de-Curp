import { curp } from "../models/getInputs"

// function poara copiar curp
export const copyCURP = () =>{
    copyCurp.addEventListener("click", () => {
        const values = Object.values(curp)
        const data = values.join("");
        navigator.clipboard.writeText(data)
        .then(() => alert(`CURP copiada: ${data}`))
        .catch(() => alert("Error al copiar"))
    })
}