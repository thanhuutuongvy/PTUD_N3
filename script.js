

//------------------------------------THU GỌN MENU ------------------- 
let menu = document.querySelector('#menu'); //tham chiếu phần tử có id  là menu
let navbar = document.querySelector('.navbar'); // tương tự
// khi phần tử có id trên được click vào, thì giá trị của lớp ('') được thêm hoặc loại bỏ. 
menu.onclick = () =>{
  menu.classList.toggle('fa-times'); //để thay đổi hình ảnh hoặc biểu tượng của một nút khi trạng thái của trang web thay đổi.
  navbar.classList.toggle('active'); //để hiển thị hoặc ẩn menu điều hướng (navbar) khi trạng thái của trang web thay đổi.
}
//------------------------------------THANH TÌM KIẾM------------------- 
let searchForm = document.querySelector('.search-form');
document.querySelector('#timkiem').onclick = () => {
  searchForm.classList.toggle('active'); //để hiển thị hoặc ẩn ô tìm kiếm khi được click vào icon được gán id là timkiem.
};


    
 //------------------------------------SLIDE TRANG CHỦ -------------------    
      // tạo đối tượng swiper để tạo ra hiệu ứng hoạt ảnh
    var swiper = new Swiper(".trangchu-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false
      },
      // khoảng cách giữa các slide là 30px,, dùng centeredSlide để hiển thị slide được chọn nằm ở giữa vùng slider, thời gian giữa các chuyển động là 0.5s, giữ tự động chuyển slide bằng khi slider được hiển thị bằng lệnh disableOnInteraction
       pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, // Tạo nút điều hướng trang và cho phép người dùng click vào nút trang để di chuyển đến slide tương ứng
      loop:true,
    }); // cho phép lặp vô hạn giữa các slide

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
      }); // sử dụng breakpoints để xác định số lượng slides hiển thị ở các kích thước màn hình khác nhau, slidesPerview cho phép xác định số lượng slides hiển thị tại kích thước màn hình tương ứng, từ 0-639px là 1 slide mỗi trang,..
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
}) // 
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




