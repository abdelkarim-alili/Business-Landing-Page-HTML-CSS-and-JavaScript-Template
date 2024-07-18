var mainNav = document.querySelector('.navbar');
var mobileNavIcon = document.querySelector('.menu-icon');

mobileNavIcon.addEventListener('click', function () {
    mainNav.classList.toggle('show');
});

/* Header Scroll */
var header = document.querySelector('.header');
if (header) {
    const isScrolled = () => {
        if (window.scrollY > 20) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
    document.addEventListener('scroll', isScrolled);
    document.addEventListener('DOMContentLoaded', isScrolled);
}

/* Scroll to  Top Button */

const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
    const togglescrollTop = function () {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }));
}

/* Initial Pure Counter */

new PureCounter({
    separator: true
});

/* Initial AOS */

window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});

/* Page Loader */

let pageLoader = document.getElementById("page-loader");
if (pageLoader) {
    window.addEventListener('load', () => {
        setTimeout(function() {
            pageLoader.style.opacity = '0';
            setTimeout(function() {
                pageLoader.remove();
            }, 1000);
        }, 500);
    });
}