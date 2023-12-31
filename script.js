const menuButton = document.querySelector('.menuButton');
const menuBox = document.querySelector('.menuBox');
const menuCloseButton = document.querySelector('.menuCloseButton');


menuCloseButton.addEventListener('click', ()=>{
    document.querySelector('.menuBox').classList.toggle('menuBoxActive');
});

menuButton.addEventListener('click', () => {
    menuBox.classList.toggle('menuBoxActive');
});

