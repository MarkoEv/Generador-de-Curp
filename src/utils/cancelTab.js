// funcion para cancelar la tecla TAB en la pagina total
export const cancelTab = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault()
    }
  })
}