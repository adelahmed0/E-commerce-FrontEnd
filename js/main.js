// Js Documents

// Table of contyent
// 1.  vars and inits
// 2.  Inits Menu
// 3.  Init Timer
// 4.  Init Favorite
// 5.  Init Slider


$(document).ready(function ($) {
    "use strict";
    // 1 vars and inits 
    let mainSlider = $('.main_slider');
    let hamburger = $('.hamburger_container');
    let menu = $('.hamburger_menu');
    let menuActive = false;
    let hamburgerClose = $('.hamburger_close');
    let fsOverlay = $('.fs_menu_overlay');

    initMenu();
    initFavourite();
    initTimer();
    initSlider();

    // 2.  Inits Menu
    function initMenu() {
        if (hamburger.length) {
            hamburger.on('click', function () {
                if (!menuActive) {
                    openMenu();
                }
            });
        }
        if (fsOverlay.length) {

            fsOverlay.on('click', function () {

                if (menuActive) {
                    closeMenu();
                }
            });
        }
        if (hamburgerClose.length) {

            hamburgerClose.on('click', function () {

                if (menuActive) {
                    closeMenu();
                }
            });
        }
        if ($('.menu_item').length) {
            let items = document.getElementsByClassName('menu_item');
            let i;

            for (i = 0; i < items.length; i++){
                
                if (items[i].classList.contains("has-children")) {
                    
                    items[i].onclick() = function () {
                        
                        this.classList.toggle("active");
                        let panel = this.children[1];

                        if (panel.style.maxHeight) {

                            panel.style.maxHeight = null;

                        } else {

                            panel.style.maxHeight = panel.scrollHeight + "px";
                        }
                    }
                }
            }
        }
    }
    function openMenu() {
        menu.addClass('active');
        fsOverlay.css('pointer-events', "auto");
        menuActive = true;
    }
    function closeMenu() {
        menu.removeClass('active');
        fsOverlay.css('pointer-events', "none");
        menuActive = false;
    }


    // 3.  Init Timer
    function initTimer() {
        if ($('.timer').length) {

            // uncomment line below and replace date
            let targe_date = new Date("Octoper 20 ,2021").getTime();

            // comment lines below
            // let date = new Date();
            // date.setDate(date.getDate() + 3);
            // let targe_date = date.getTime();

            // variables for time units 
            let days, hours, minutes, secounds;
            let d = $('#day');
            let h = $('#hour');
            let m = $('#minute');
            let s = $('#secound');

            setInterval(function () {
                // find the amount of "secounds" between now and target 
                let current_date = new Date().getTime();
                let secounds_left = (targe_date - current_date) / 1000;

                // do some time calculation 
                days = parseInt(secounds_left / 86400);
                secounds_left = secounds_left % 86400;

                hours = parseInt(secounds_left / 3600);
                secounds_left = secounds_left % 3600;

                minutes = parseInt(secounds_left / 60);
                secounds = parseInt(secounds_left % 60);

                // display result 
                d.text(days);
                h.text(hours);
                m.text(minutes);
                s.text(secounds);
            }, 1000);
        }
    }




    // 4.  Init Favorite
    function initFavourite() {
        if ($('.favourite').length) {
            let favs = $('.favourite');
            favs.each(function(){
                let fav = $(this);
                let active = false;
                if (fav.hasClass('active')) {
                    active = true;
                }
                fav.on('click', function () {
                    if (active) {
                        fav.removeClass('active');
                        active = false;
                    } else {
                        fav.addClass('active');
                        active = true;
                    }
                });
            });
        }
    }











    // 5.  Init Slider
    function initSlider() {

        if ($('.product_slider').length) {

            let slider1 = $('.product_slider');

            slider1.owlCarousel({
                loop: false,
                dots: false,
                nav: false,
                responsive: {
                    0: { items: 1 },
                    480: { items: 2 },
                    768: { items: 3 },
                    991: { items: 4 },
                    1280: { items: 5 },
                    1440: { items: 5 }
                }
            });
            if ($('.product_slider_nav_left').length) {

                $('.product_slider_nav_left').on('click', function () {

                    slider1.trigger('prev.owl.carousel');
                })
            }
            if ($('.product_slider_nav_right').length) {

                $('.product_slider_nav_right').on('click', function () {

                    slider1.trigger('next.owl.carousel');
                })
            }
        }
    }



});


// New Arrivals Filter
let switcherLis = document.querySelectorAll('.arrivals_grid_sorting li');
let products = document.querySelectorAll('.product-item');
let product = document.querySelectorAll('.product');
switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageProducts);
});

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove('active')
        this.classList.add('active')
    })
}

function manageProducts() {
    products.forEach((products) => {
        products.style.display = 'none';
    });
    document.querySelectorAll(this.dataset.filter).forEach((product) => {
        product.style.display = "block";
    })
}