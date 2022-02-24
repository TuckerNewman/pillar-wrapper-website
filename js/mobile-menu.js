const burger = document.querySelector('.burger'); 

const nav = document.querySelector('.nav'); 

const header = document.querySelector('.header'); 


burger.addEventListener('click', () => {

    burger.classList.toggle('burgerX'); //transforms icon to an X
    nav.classList.toggle('nav-mobile');
    header.classList.toggle('header-extend');


});


