const burger = document.querySelector(".burger")
const nav = document.querySelector("nav")
burger.addEventListener("click", () => {
    nav.classList.toggle("show")
    document.body.style.overflowY = nav.classList.contains("show") ? "hidden" : "visible"
})