import "./styles/style.css";
import IMask from "imask";

const fixedHeader = document.querySelector(".hidden");
const menuNavigation = document.querySelector(".tours-menu > .navigation");

const select = document.getElementById("path");
const telefon = document.getElementById("telefon");
const dateTo = document.getElementById("date-to");
const dateFrom = document.getElementById("date-from");
const resetBtn = document.getElementById("reset-btn");


window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
        fixedHeader.classList.add("shown");
    } else {
        fixedHeader.classList.remove("shown");
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

select.addEventListener("change", () => {
    select.classList.add("black");
})

dateTo.addEventListener("change", () => {
    dateTo.classList.add("black");
})

dateFrom.addEventListener("change", () => {
    dateFrom.classList.add("black");
})

resetBtn.addEventListener("click", () => {
    select.classList.remove("black");
    dateTo.classList.remove("black");
    dateFrom.classList.remove("black");
});

const maskOptions = {
    mask: '+{7}-000-000-00-00'
}

IMask(telefon, maskOptions);