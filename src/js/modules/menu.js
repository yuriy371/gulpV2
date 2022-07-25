const menu = (e, targ) => {
    let menu = document.querySelector(".header__menu")

    if (targ.closest(".header__burger")) {
        menu.classList.toggle("open")
        targ.closest(".header__burger").classList.toggle("open")
        document.querySelector("body").classList.toggle("overflow")
    }
}

export default menu