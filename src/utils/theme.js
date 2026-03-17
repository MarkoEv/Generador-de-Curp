export const theme = () => {
  // al cargar la pagina
  const saveTheme = localStorage.getItem("theme") || "light";
  //   <html class="dark">
  if (saveTheme === "dark") document.documentElement.classList.add("dark");
  // al cambiar toggle
  const toggle = document.querySelector(".theme-controller");
  // verificar si true o false
  toggle.checked = saveTheme === "dark";

  toggle.addEventListener("change", (e) => {
    if (toggle.checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
};
