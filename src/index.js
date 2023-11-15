import "./styles/style.css";

let scrollButton = document.querySelector(".scroll-button");
let headTop = document.querySelector(".head-top_white");
let select = document.querySelector("select");

window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      headTop.classList.add("shown-head");
    } else {
      headTop.classList.remove("shown-head");
    }
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
      scrollButton.classList.add("shown");
    } else {
      scrollButton.classList.remove("shown");
    }
});

scrollButton.onclick = () => {
    window.scrollTo(0, 0);
}

select.onchange = () => {
  select.style.color = "#000";
  // ничего умнее не нашел
}