const tabs = () => {
    let tab = document.querySelectorAll(".tabs")
    tab.forEach((e) => {
        let tabTabs = e.querySelectorAll('.js-tabs-buttons .js-tabs-button');
        let tabItems = e.querySelectorAll('.js-tabs-content .js-tabs-item');
        tabTabs.forEach((item, index) => {
            tabTabs[index].onclick = () => {
                tabTabs.forEach((e) => { e.classList.remove('active') });
                tabItems.forEach((e) => { e.classList.remove('active') });
                tabTabs[index].classList.add('active');
                tabItems[index].classList.add('active');
            }
        })
    });
}

export default tabs