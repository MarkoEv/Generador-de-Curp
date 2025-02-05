// ESTADOS
//array de objetos con los estados de México
const estadosMX = [
    { value: "", text: "Selecciona un estado" },
    { value: "AG", text: "Aguascalientes" },
    { value: "BC", text: "Baja California" },
    { value: "BS", text: "Baja California Sur" },
    { value: "CC", text: "Campeche" },
    { value: "CL", text: "Coahuila" },
    { value: "CM", text: "Colima" },
    { value: "CS", text: "Chiapas" },
    { value: "CH", text: "Chihuahua" },
    { value: "DF", text: "Ciudad de México" },
    { value: "DG", text: "Durango" },
    { value: "GT", text: "Guanajuato" },
    { value: "GR", text: "Guerrero" },
    { value: "HG", text: "Hidalgo" },
    { value: "JC", text: "Jalisco" },
    { value: "MC", text: "México" },
    { value: "MN", text: "Michoacán" },
    { value: "MS", text: "Morelos" },
    { value: "NT", text: "Nayarit" },
    { value: "NL", text: "Nuevo León" },
    { value: "OC", text: "Oaxaca" },
    { value: "PL", text: "Puebla" },
    { value: "QT", text: "Querétaro" },
    { value: "QR", text: "Quintana Roo" },
    { value: "SP", text: "San Luis Potosí" },
    { value: "SL", text: "Sinaloa" },
    { value: "SR", text: "Sonora" },
    { value: "TC", text: "Tabasco" },
    { value: "TS", text: "Tamaulipas" },
    { value: "TL", text: "Tlaxcala" },
    { value: "VZ", text: "Veracruz" },
    { value: "YN", text: "Yucatán" },
    { value: "ZS", text: "Zacatecas" }
];

//fuccion para generar los estados en el select del html
function generarEstados() {
    const select = document.getElementById("estates");

    // metodo forEach a la constante estadosMX. 
    // Esta nos permitira recorrer el arreglo de objetos 
    // y realizar una accion por cada uno de ellos.

    estadosMX.forEach(estates => {
        const option = document.createElement('option');
        option.value = estates.value;
        option.textContent = estates.text;
        select.appendChild(option);
    });
}



// DIAS

const day = [
    { value: "", text: "Día" },
    { value: "01", text: "01" },
    { value: "02", text: "02" },
    { value: "03", text: "03" },
    { value: "04", text: "04" },
    { value: "05", text: "05" },
    { value: "06", text: "06" },
    { value: "07", text: "07" },
    { value: "08", text: "08" },
    { value: "09", text: "09" },
    { value: "10", text: "10" },
    { value: "11", text: "11" },
    { value: "12", text: "12" },
    { value: "13", text: "13" },
    { value: "14", text: "14" },
    { value: "15", text: "15" },
    { value: "16", text: "16" },
    { value: "17", text: "17" },
    { value: "18", text: "18" },
    { value: "19", text: "19" },
    { value: "20", text: "20" },
    { value: "21", text: "21" },
    { value: "22", text: "22" },
    { value: "23", text: "23" },
    { value: "24", text: "24" },
    { value: "25", text: "25" },
    { value: "26", text: "26" },
    { value: "27", text: "27" },
    { value: "28", text: "28" },
    { value: "29", text: "29" },
    { value: "30", text: "30" },
    { value: "31", text: "31" }
];

function generarDays() {
    const select = document.getElementById("days");

    day.forEach(days => {
        const option = document.createElement('option');
        option.value = days.value;
        option.textContent = days.text;
        select.appendChild(option);

    });
};



// MESES
const meses = [
    { value: "", text: "Mes" },
    { value: "01", text: "Enero" },
    { value: "02", text: "Febrero" },
    { value: "03", text: "Marzo" },
    { value: "04", text: "Abril" },
    { value: "05", text: "Mayo" },
    { value: "06", text: "Junio" },
    { value: "07", text: "Julio" },
    { value: "08", text: "Agosto" },
    { value: "09", text: "Septiembre" },
    { value: "10", text: "Octubre" },
    { value: "11", text: "Noviembre" },
    { value: "12", text: "Diciembre" }
];

function generarMonths() {
    const select = document.getElementById("months");

    meses.forEach(months => {
        const option = document.createElement('option');
        option.value = months.value;
        option.textContent = months.text;
        select.appendChild(option);

    });
};

// YEARS
function functionYears(inicio, fin) {
    const years = [{ value: "", text: "Año" }];
    for (let i = inicio; i >= fin; i--) {
        years.push({ value: i, text: i.toString() });
    }
    return years;


}

function generarYears() {
    const select = document.getElementById("years");
    const years = functionYears(2006, 1930);

    years.forEach(years => {
        const option = document.createElement('option');
        option.value = years.value;
        option.textContent = years.text;
        select.appendChild(option);

    });
}

// exportar a html
export { generarDays };
export { generarEstados };
export { generarMonths };
export { generarYears };
