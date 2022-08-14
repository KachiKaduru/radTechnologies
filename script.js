const menu = document.getElementById('menuBtn');
const exit = document.getElementById('exitBtn');
const nav = document.querySelector("nav");
const body = document.querySelector("main");
const section = document.querySelectorAll("section");

menu.addEventListener("click", ()=> {
    nav.classList.toggle("menu-bar");
})

function open() {
    if (nav.classList.contains("menu-bar")) {
        nav.classList.remove("menu-bar");
    }
}

function elements(element) {
    element.addEventListener("click", open)
};

exit.addEventListener("click", open);

body.addEventListener("click", open);

section.forEach(elements);