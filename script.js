const burger = document.querySelector('.burgerMenu');
const aside = document.querySelector('.burger');
const logo = document.querySelector('header .logo');

burger.onclick = () => {
    aside.classList.toggle('active');
    if (aside.classList.contains('active')) {
        burger.children[0].style.transform = 'rotate(45deg) translate(10px, 11px)';
        burger.children[1].style.transform = 'rotate(-45deg)';
        burger.children[2].style.opacity = '0';
        logo.style.opacity = 0;
    } else {
        burger.children[0].style.transform = 'none';
        burger.children[1].style.transform = 'none';
        burger.children[2].style.opacity = '1';
        logo.style.opacity = 1;
    }
};
console.log(burger.children);




