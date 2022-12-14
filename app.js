AOS.init();

/* header animate */
window.onscroll = () => {
    if(window.scrollY > 100) {
        document.querySelector('.header').classList.add('active')
        document.querySelector('.topbar').classList.add('active')
    } else{
        document.querySelector('.header').classList.remove('active')
        document.querySelector('.topbar').classList.remove('active')
    }
}
// init Swiper:
const swiper = new Swiper('.events-slider',{
    direction: 'horizontal',
    loop: true,
    autoplay: true,
     // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {  
        '767': {
          slidesPerView: 1,
          spaceBetween: 40,},
      },
});
const swiper2 = new Swiper('.testimonial-slider',{
    direction: 'horizontal',
    loop: true,
    autoplay: true,

    slidesPerView: 3,
    spaceBetween: 30,
    autoPlay: true,
     // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {  
        '375': {
          slidesPerView: 1,
          spaceBetween: 40,},
        '1023': {
          slidesPerView: 1,
          spaceBetween: 50, },
      },
});

/* mobile nav */

const mobileNavbar = document.querySelector('.navbar')
const mobileNavToggle = document.querySelector('.mobile-nav-toggle')
const header = document.querySelector('.header')

mobileNavToggle.onclick = () => {
    mobileNavbar.classList.toggle('active')
    mobileNavToggle.classList.toggle('fa-xmark')
}

/* glightbox */
const lightbox = GLightbox({   
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    element:[
        {
        'href': 'https://www.youtube.com/watch?v=GlrxcuEDyF8',
        'type': 'video',
        'source': 'youtube', 
        'width': 900,
        }
    ],
});

/* close header when click outside */
document.addEventListener('click', function(e) {
    var container = document.querySelector('.navbar');
    
    if (!container.contains(e.target) && !e.target.contains(mobileNavToggle)) {
        container.classList.remove('active')
    mobileNavToggle.classList.remove('fa-xmark')

    }  
    
});
