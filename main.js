const navItems = document.querySelector('#nav_items');
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");


openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';

});

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = 'none';
}


closeNavBtn.addEventListener('click', closeNav);

// change nav  color when scroll
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})












// image siper 

var swiper = new Swiper(".mySwiper", {
    // when window width is  <600px

    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        // when window width is >= 600px
        600: {
            slidesPerView: 2

        },
        // when window width is >= 1024px

        1024: {
            slidesPerView: 3

        }

    }

});