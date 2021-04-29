const swiper = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        type: 'custom'
    },
    autoplay: { 
        delay: 3500, 
      }, 
      slidesPerView: 'auto', 
  
  })