// Autor: MarkoEv
document.querySelector('button').addEventListener('click', () => {
    var primerName = document.getElementById('primerName').value[0];
    var apellidoP = document.getElementById('apellidoP').value;
    var apellidoM = document.getElementById('apellidoM').value[0];
    var days = document.getElementById('days').value;
    var months = document.getElementById('months').value;
    var years = document.getElementById('years').value;
    var estates = document.getElementById('estates').value;
    var genero = document.getElementById('genero').value;

    // funcion para buscar primera vocal de apelñido paterno    
    function primeVocal(cadena) {
        let vocales = cadena.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/);
        return vocales ? vocales[0] : '-algo anda mal-';
    }
    let textoApe = apellidoP.substring(1, 4);
    let primeraVoc = primeVocal(textoApe);

    // funcion para buscar las primeras consonantes del apellido paterno, materno y nombre
    function primeConsonant(string) {
        let consonantes = string.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/);
        return consonantes ? consonantes[0] : '-algo anda mal-';
    }
    // variable apellido paterno
    let textoApeP = apellidoP.substring(1, 3);
    let consApeP = primeConsonant(textoApeP);
    // variable apellido materno
    let apellidoMaterno = document.getElementById('apellidoM').value;
    let textoApeM = apellidoMaterno.substring(1,5);
    let consApeM = primeConsonant(textoApeM);
    // variable nombre
    let primerNombre = document.getElementById('primerName').value;
    let textoName = primerNombre.substring(1, 4);
    let consName = primeConsonant(textoName);

    // funcion para buscar el siglo, dependiendo del año de nacimiento
    let siglo = 0;
    if (years >= 2000) {
        siglo = 'A';
    } else if (years < 2000) {
        siglo = '0';
    }
    
    //asigando valores a las variables (vocales, consonantes, siglo, etc)
    let apellidoPat = apellidoP[0];
    let letraApellido = primeraVoc;
    let hold = years.slice(2, 4);
    let randNumber = rand(0, 9);
    
    //variables que contendra la curp
    var curp = apellidoPat + letraApellido + apellidoM + primerName + hold + months + days +
        genero + estates + consApeP + consApeM + consName + siglo + randNumber;
    document.getElementById('curp1').innerHTML = curp.toUpperCase();
    
    //condicional para validar que todos los campos esten llenos
    if (!primerName || !apellidoP || !apellidoM || !days || !months || !years || !estates || !genero) {

        document.getElementById('curp1').innerHTML = 'Es obligatorio llenar todos los campos*';
        document.getElementById('curp1').style.color = 'red';
        alert('Por favor, complete todos los campos.');
        return;
    }
});

