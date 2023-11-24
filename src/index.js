import "./styles/style.css";

let headTop = document.querySelector(".head-top");
let select = document.querySelector("select");

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