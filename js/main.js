const menuBar = document.querySelector('.hr3');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

const getMenu = () => {
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBar.classList.add('active');
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBar.classList.remove('active');
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    })
};

getMenu();
