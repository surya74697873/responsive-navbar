const navbar = document.querySelector("nav")
const menubar = navbar.querySelector("ul")
const menu = navbar.querySelector("div")

menu.addEventListener("click",() =>{
    menubar.classList.toggle("active")
})