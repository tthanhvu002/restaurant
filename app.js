

// init Swiper:
const swiper = new Swiper('.events-slider',{
    direction: 'horizontal',
    loop: true,
    autoPlay: true,
     // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});
const swiper2 = new Swiper('.testimonial-slider',{
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoPlay: true,
     // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});