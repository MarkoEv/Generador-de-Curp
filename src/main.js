import "./style.css";

import {
  generarEstados,
  generarDays,
  generarMonths,
  generarYears,
} from "./generadores.js";

window.onload = () => {
  generarEstados();
  generarDays();
  generarMonths();
  generarYears();
};
