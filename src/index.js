import "./styles/style.css";

let headTopFixed = document.querySelector(".head-top_fixed");
let select = document.getElementById("path");
let dateTo = document.getElementById("date-to");
let dateFrom = document.getElementById("date-from");

window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      headTopFixed.classList.add("shown");
    } else {
      headTopFixed.classList.remove("shown");
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