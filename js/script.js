let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector('.navbar2');
let other = document.querySelector("#other-informations")
let icons = document.querySelector('.fab-icons')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
    other.classList.toggle('active')
    icons.classList.toggle('active')
}


let prevScrollPos = window.pageYOffset
const header = document.querySelector(".header")
const background = document.querySelector(".header_background")
const show = "show"
const with_background = "show_background"
window.onscroll = () => {
    const currentScrollPos = window.pageYOffset
    const halfScreenHeight = Math.floor(window.innerHeight / 2)

    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
    other.classList.remove('active')

    if (currentScrollPos > halfScreenHeight) {
        background.classList.add(with_background)
    } else {
        background.classList.remove(with_background)
    }

    if (currentScrollPos > prevScrollPos) {
        header.classList.remove(show)
        console.log('scolling down')
    } else {
        header.classList.add(show)
        console.log("scolling up")
    }
    prevScrollPos = currentScrollPos
}