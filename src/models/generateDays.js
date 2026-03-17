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
  { value: "31", text: "31" },
];

export function generarDays() {
  const select = document.getElementById("days");

  day.forEach((days) => {
    const option = document.createElement("option");
    option.value = days.value;
    option.textContent = days.text;
    select.appendChild(option);
  });
}
