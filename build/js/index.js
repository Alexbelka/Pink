let navigation = document.querySelector('.header-navigation');
let close = document.querySelector('.header-navigation__close');
let open = document.querySelector('.header-navigation__open');

close.addEventListener('click',function(){
    navigation.classList.remove('header-navigation--opened');
    navigation.classList.add('header-navigation--closed');
    open.classList.remove('visually-hidden');
});

open.addEventListener('click',function(){
    navigation.classList.remove('header-navigation--closed');
    navigation.classList.add('header-navigation--opened');
});