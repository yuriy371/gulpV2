const modal = (e, targ) => {
    e.preventDefault()
    let body = document.body
    let modalBtn = targ.matches("[data-toggle=modal]");

    let modalOverlay = document.querySelector(".modal__overlay");
    let modalDialog = document.querySelector(".modal__dialog");

    let div = document.createElement("div")
    div.style.overflowY = "scroll"
    div.style.width = "50px"
    div.style.height = "50px"
    document.body.append(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()

    let openModal = () => {
        modalOverlay.classList.add("modal__overlay--visible")
        modalDialog.classList.add("modal__dialog--visible")
        body.classList.add("body__hidden")
        body.style.paddingRight = scrollWidth + "px"
    }

    let closeModal = () => {
        modalOverlay.classList.remove("modal__overlay--visible")
        modalDialog.classList.remove("modal__dialog--visible")
        body.classList.remove("body__hidden")
        body.style.paddingRight = 0
    }

    if (modalBtn) {
        openModal()
    } 
    else if (targ.closest(".modal__overlay") || targ.closest(".modal__close")) {
        closeModal()
    }
}

export default modal