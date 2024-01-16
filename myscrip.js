document.addEventListener('DOMContentLoaded', function () {
    let swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
});