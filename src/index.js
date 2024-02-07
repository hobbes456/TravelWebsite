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
        fixedHeader.classList.add("top-header_shown");
    } else {
        fixedHeader.classList.remove("top-header_shown");
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
    select.classList.remove("text_grey_300");
})

dateTo.addEventListener("change", () => {
    dateTo.classList.remove("text_grey_300");
})

dateFrom.addEventListener("change", () => {
    dateFrom.classList.remove("text_grey_300");
})

resetBtn.addEventListener("click", () => {
    select.classList.add("text_grey_300");
    dateTo.classList.add("text_grey_300");
    dateFrom.classList.add("text_grey_300");
});

const maskOptions = {
    mask: '+{7}-000-000-00-00'
}

IMask(telefon, maskOptions);