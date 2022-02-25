const burger = document.querySelector('.burger'); //Burger Icon

const nav = document.querySelector('.nav'); //Nav Menu

const header = document.querySelector('.header'); //The entire header as a whole


burger.addEventListener('click', () => {

    burger.classList.toggle('burgerX'); //transforms icon to an X
    nav.classList.toggle('nav-mobile'); //changes navs normal css style to its mobile equivalent
    header.classList.toggle('header-extend'); //header's height extends to fullscreen


});


