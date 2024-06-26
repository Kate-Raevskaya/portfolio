let aboutMeButton = document.getElementById('more-about-me');

function addPopUpListener(project) {
    let projectId = project.id;
    let popUpWindow = document.getElementById(`about-${projectId}`);
    let closeButton = popUpWindow.querySelector("button.close");
    project.addEventListener('click', () => {
        popUpWindow.classList.add('open-pop-up-window');
        popUpWindow.parentElement.classList.add("overlay-visible");
    })
    closeButton.addEventListener("click", () => {
        popUpWindow.classList.remove('open-pop-up-window');
        popUpWindow.parentElement.classList.remove("overlay-visible");
    })
}

document.querySelector(".overlay").addEventListener("click", (event) => {
    let openPopupNodes = document.querySelectorAll(".open-pop-up-window");
    for (let node of openPopupNodes) {
        if (node.getBoundingClientRect().left < event.clientX && event.clientX < node.getBoundingClientRect().right &&
            node.getBoundingClientRect().top < event.clientY && event.clientY < node.getBoundingClientRect().bottom) {
            return
        }
        node.classList.remove("open-pop-up-window")
        node.parentElement.classList.remove("overlay-visible")
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