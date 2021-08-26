// NavigationBar Show & Hidden
var navbar = document.getElementById('navbar');

window.onscroll = function() {
    if(window.scrollY > 630) {
        navbar.classList.add('header-fixed');
        navbar.classList.remove('header')
    }else {
        navbar.classList.remove('header-fixed');
        navbar.classList.add('header');
    }
}

