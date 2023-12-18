

//------------------------------------THU GỌN MENU ------------------- 
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
//------------------------------------THANH TÌM KIẾM------------------- 
let searchForm = document.querySelector('.search-form');
document.querySelector('#timkiem').onclick = () => {
  searchForm.classList.toggle('active');
};


    
 //------------------------------------SLIDE TRANG CHỦ -------------------    
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
//------------------------------------SLIDE ĐÁNH GIÁ ------------------- 
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
//------------------------------------SLIDE ẢNH TRANG WORKSHOP -------------------       
      var swiper = new Swiper(".ws-slider", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 500,
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
//-------------------------------------CARTEGORY-------------------
const itemSlidebar = document.querySelectorAll(".cartegory-left-li")
itemSlidebar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})
//------------------------------------PRODUCT-------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")

smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click", function(){
        console.log(imgItem)
         bigImg.src = imgItem.src
    })
})

const baoQuan = document.querySelector(".danhgia")
const chiTiet = document.querySelector(".chitiet")
if(baoQuan){
    baoQuan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"    
        document.querySelector(".product-content-right-bottom-content-danhgia").style.display = "block"
})
}
if(chiTiet){
    chiTiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"    
        document.querySelector(".product-content-right-bottom-content-danhgia").style.display = "none"
            })
}


const buTton = document.querySelector(".product-content-right-bottom-top")
if(buTton){
    buTton.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
        })
}


//------------------------------------VoucherVoucher------------------- 
function showOverlay() {
  var cacvoucher = document.getElementById('cacvoucher');
  cacvoucher.style.display = 'flex'; // Hiển thị các voucher
}





