//esta funcion permitira mandar un numero random al ultimo digito de la curp
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
