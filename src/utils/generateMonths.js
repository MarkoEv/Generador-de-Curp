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
  { value: "12", text: "Diciembre" },
];

export function generarMonths() {
  const select = document.getElementById("months");

  meses.forEach((months) => {
    const option = document.createElement("option");
    option.value = months.value;
    option.textContent = months.text;
    select.appendChild(option);
  });
}
