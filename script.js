let projects = document.querySelectorAll('.project-card');

let aboutMeButton = document.getElementById('more-about-me');

function addPopUpListener(project) {
    let projectId = project.id;
    let popUpWindow = document.getElementById(`about-${projectId}`);
    let closeButton = popUpWindow.querySelector("button.close");
    project.addEventListener('click', () => {
        popUpWindow.classList.add('open-pop-up-window');
        popUpWindow.parentElement.classList.add("open-pop-up-window");
    })
    closeButton.addEventListener("click", () => {
        popUpWindow.classList.remove('open-pop-up-window');
        popUpWindow.parentElement.classList.remove("open-pop-up-window");
    })
}

document.querySelector(".overlay").addEventListener("click", () => {
    let openPopupNodes = document.querySelectorAll(".open-pop-up-window");
    for (let node of openPopupNodes) {

        node.classList.remove("open-pop-up-window")
    }
})

addPopUpListener(aboutMeButton)


let navBar = document.getElementById("nav-bar");
let mainMenu = navBar.querySelector(".main-menu");
let closeMenuButton = document.getElementById("open-menu");
let openMenuButton = document.getElementById("open-menu");


openMenuButton.addEventListener("click", () => {
    navBar.classList.toggle("small-nav");
    mainMenu.classList.toggle("main-menu-small");
    closeMenuButton.classList.toggle('btn-close');
    closeMenuButton.classList.toggle('btn-open');
})

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.id !== "nav-bar" && e.target.id !== "open-menu") {
        navBar.classList.remove("small-nav");
        mainMenu.classList.remove("main-menu-small");
        closeMenuButton.classList.remove('btn-close');
        closeMenuButton.classList.add('btn-open');
    }
})