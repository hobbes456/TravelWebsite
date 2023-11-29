import "./styles/style.css";
import IMask from "imask";

let headTopFixed = document.querySelector(".head-top_fixed");
let menuNavigation = document.querySelector(".menu__navigation");
let select = document.getElementById("path");
let telefon = document.getElementById("tel");
let dateTo = document.getElementById("date-to");
let dateFrom = document.getElementById("date-from");

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
    headTopFixed.classList.add("shown");
  } else {
    headTopFixed.classList.remove("shown");
  }
});

menuNavigation.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    for (let a of menuNavigation.children) {
      a.classList.remove("valid");
    }
    e.target.classList.add("valid");
  }
});

select.onchange = () => {
  select.style.color = "#000";
  // ничего умнее не нашел
};

const maskOptions = {
    mask: '+{7}-000-000-00-00'
}

IMask(telefon, maskOptions);

dateTo.onchange = () => {
  dateTo.style.color = "#000";
};

dateFrom.onchange = () => {
  dateFrom.style.color = "#000";
};
