import "./styles/style.scss";
import IMask from "imask";

const fixedHeader = document.querySelector(".top-header_fixed");
const menuNavigation = document.querySelector(".tours__menu > .tours__navigation");

const select = document.getElementById("path");
const telefon = document.getElementById("telefon");
const dateTo = document.getElementById("date-to");
const dateFrom = document.getElementById("date-from");
const resetBtn = document.getElementById("reset-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
        fixedHeader.classList.add("top-header_show");
    } else {
        fixedHeader.classList.remove("top-header_show");
    }
});

menuNavigation.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        for (let a of menuNavigation.children) {
        a.classList.remove("tours__link_valid");
        }
        e.target.classList.add("tours__link_valid");
    }
});

select.addEventListener("change", () => {
    select.style.color = "black";
})

dateTo.addEventListener("change", () => {
    dateTo.style.color = "black";
})

dateFrom.addEventListener("change", () => {
    dateFrom.style.color = "black";
})

resetBtn.addEventListener("click", () => {
    select.style.color = "#A6A6A6";
    dateTo.style.color = "#A6A6A6";
    dateFrom.style.color = "#A6A6A6";
});

const maskOptions = {
    mask: '+{7}-000-000-00-00'
}

IMask(telefon, maskOptions);