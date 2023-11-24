import "./styles/style.css";

let headTop = document.querySelector(".head-top");
let select = document.getElementById("path");
let dateTo = document.getElementById("date-to");
let dateFrom = document.getElementById("date-from");

window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      headTop.classList.add("head-top_fixed");
    } else {
      headTop.classList.remove("head-top_fixed");
    }
});

select.onchange = () => {
  select.style.color = "#000";
  // ничего умнее не нашел
}

dateTo.onchange = () => {
  dateTo.style.color = "#000";
}

dateFrom.onchange = () => {
  dateFrom.style.color = "#000";
}