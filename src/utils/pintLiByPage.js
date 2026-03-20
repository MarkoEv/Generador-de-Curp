// esta funcion pintará las casillas de la curp (ul => li)
// objetivo: al detectar la ´paginacion del slide  pintará ciertos li
export const pintLiByPage = (swiper) => {
    // el index simula la pagina
    // el valor simula las clases de los li
    const digitos = {
    0: ["digitoFour", "digitoConsoName"],                              
    1: ["digitoOne", "digitoConsoApP", "digitoTwo", "digitoTree", "digitoConsoApM"],       
    2: ["digitoYear1","digitoYear2", "digitoMonth1" , "digitoMonth2", "digitoDay1", "digitoDay2"], 
    3: ["digitoGender"],                           
    4: ["digitoEstate1", "digitoEstate2"],                           
    5: ["digitoEnd"]
}


// tomar el index activado de la pagina, si no un array vacion
const active = digitos[swiper.activeIndex] || [];
// iterrar inyeccion perteneciente al index
active.forEach(clase => {
    document.querySelectorAll(`.${clase}`).forEach(li => {
        // console.log(li);
        li.classList.remove("dark:text-white", "text-blue-700", "dark:bg-transparent")
        li.classList.add("dark:text-black", "text-white","dark:bg-white", "bg-blue-700")
    })    
})
}
