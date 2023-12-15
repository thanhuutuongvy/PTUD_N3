
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#timkiem').onclick = () => {
  searchForm.classList.toggle('active');
};
    
    
    var swiper = new Swiper(".trangchu-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
    });

    var swiper = new Swiper(".danhgia-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false
        },
        loop:true,
        breakpoints: {
            0: {
                slidesPerView:1,
            },
            640: {
                slidesPerView:2,
            },
            768: {
                slidesPerView:2,
            },
            1024: {
                slidesPerView:3,
            },
        }
      });

      var swiper = new Swiper(".ws-slider", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false
        },
        loop:true,
        breakpoints: {
            0: {
                slidesPerView:2,
            },
            640: {
                slidesPerView:2,
            },
            768: {
                slidesPerView:3,
            },
            1024: {
                slidesPerView:4,
            },
        }
      });