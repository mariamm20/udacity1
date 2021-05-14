navMenu = document.getElementById('navbar__list');
sec = Array.from(document.querySelectorAll("section"));

let numberItems = sec.length;

(function createNavbar() {
    for (section of sec) {
        listItem = document.createElement("li");
        sectogo = section.getAttribute("id");
        secName = section.getAttribute("data-nav");
        listItem.innerHTML = ` <a class='menu__link' href='#${sectogo}'>${secName}</a>`;
        navMenu.appendChild(listItem);
    }
}());

(function isActiveclass() {

    for (section of sec) {
        let secpos = section.getBoundingClientRect();

        if (secpos.top >= 0) {
            if (!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
            }
            else {
                section.classList.remove("your-active-class");
            }
        }
    }
    return document.addEventListener("scroll", isActiveclass);
}());






