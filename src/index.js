import "./styles/style.css";

let scrollButton = document.querySelector('.scroll-button');

window.onscroll = function () {
  if (window.scrollY > 800) {
    scrollButton.classList.add('shown');
  } else {
    scrollButton.classList.remove('shown');
  }
};

scrollButton.onclick = () => {
    window.scrollTo(0, 0);
}