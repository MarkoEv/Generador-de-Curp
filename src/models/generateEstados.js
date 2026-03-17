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
  { value: "ZS", text: "Zacatecas" },
];

export function generarEstados() {
  const select = document.getElementById("estates");

  estadosMX.forEach((estates) => {
    const option = document.createElement("option");
    option.value = estates.value;
    option.textContent = estates.text;
    select.appendChild(option);
  });
}
