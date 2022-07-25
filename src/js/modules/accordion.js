const accordion = () => {
    let accordion = document.querySelectorAll(".accordion")
    accordion.forEach((e) => {
        let accordElem = e.querySelectorAll('.js-accordion-element');
        let accordText = e.querySelectorAll('.js-accordion-item');
        accordElem.forEach((item, index) => {
            accordElem[index].onclick = () => {
                // accordElem.forEach((e) => { e.classList.remove('active') });
                accordText.forEach((e) => { e.classList.remove('active') });
                // accordElem[index].classList.add('active');
                accordText[index].classList.add('active');
            }
        })
    });
}

export default accordion