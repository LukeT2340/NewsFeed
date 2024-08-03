document.getElementById("burger-menu-button").addEventListener("click", () => {
    let burgerMenu = document.getElementsByClassName("burger-menu")[0]; 
    const main = document.querySelector('main');

    if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        main.classList.remove('menu-open');
    } else {
        burgerMenu.classList.add('active');
        main.classList.add('menu-open');
    }
})

document.getElementById("burger-menu-close-button").addEventListener("click", () => {
    let burgerMenu = document.getElementsByClassName("burger-menu")[0]; 
    const main = document.querySelector('main');

    if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        main.classList.remove('menu-open');
    } else {
        burgerMenu.classList.add('active');
        main.classList.add('menu-open');
    }
})