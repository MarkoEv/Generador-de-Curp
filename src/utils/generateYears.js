function functionYears(inicio, fin) {
  const years = [{ value: "", text: "Año" }];
  for (let i = inicio; i >= fin; i--) {
    years.push({ value: i, text: i.toString() });
  }
  return years;
}

export function generarYears() {
  const select = document.getElementById("years");
  const years = functionYears(2006, 1930);

  years.forEach((years) => {
    const option = document.createElement("option");
    option.value = years.value;
    option.textContent = years.text;
    select.appendChild(option);
  });
}
