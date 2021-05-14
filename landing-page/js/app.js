
//To get all tags of name section
navMenu = document.getElementById('navbar__list');
sec = Array.from(document.querySelectorAll("section"));
// Get the number of sections in array created 
let numberItems = sec.length;
// self invoked function to create the navbar 
(function createNavbar() {
    for (section of sec) {
        //create list item 
        listItem = document.createElement("li");
        sectogo = section.getAttribute("id");
        secName = section.getAttribute("data-nav");
        //after creation it just edit it to contain the name of datanav and some styling 
        listItem.innerHTML = ` <a class='menu__link' href='#${sectogo}'>${secName}</a>`;
        navMenu.appendChild(listItem);
    }
}());
// Another self invoked function to change the style of each section
(function isActiveclass() {

    for (section of sec) {
        //get the viewport 
        let secpos = section.getBoundingClientRect();
        // if hs active class okay if not add 
        if (secpos.top >= 0) {
            if (!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
            }
            else {
                section.classList.remove("your-active-class");
            }
        }
    }
    //this will happen when scroll throught the page 
    return document.addEventListener("scroll", isActiveclass);
}());
//End of js code





