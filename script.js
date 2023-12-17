

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
//------------------------------------SLIDE ĐÁNH GIÁ Ở TRANG CHỦ ------------------- 
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


//------------------------------------THANH TOÁN------------------- 
function showOverlay() {
  var cacvoucher = document.getElementById('cacvoucher');
  cacvoucher.style.display = 'flex'; // Hiển thị các voucher
}



//----------------------------------TRANG ADMIN-----------------
var currentUser = null;
        var products = [];
        var promotions = [];

        function login() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

   // Kiểm tra thông tin đăng nhập (giả định username = admin và password = admin123)
            if (username === 'admin' && password === 'admin123') {
  // Đăng nhập thành công
                currentUser = username;

// Hiển thị trang quản lý
                showAdminPanel();
            } else {
// Đăng nhập không thành công
                alert('Tên đăng nhập hoặc mật khẩu không đúng.');
            }
        }

        function showAdminPanel() {
            var loginContainer = document.getElementById('login-container');
            var adminPanel = document.getElementById('adminPanel');

            if (loginContainer && adminPanel) {
                loginContainer.style.display = 'none';
                adminPanel.style.display = 'block';

  // Hiển thị danh sách sản phẩm và khuyến mãi khi đăng nhập thành công
                displayProducts();
                displayPromotions();
            } else {
                console.error('Không tìm thấy phần tử login-container hoặc adminPanel trong DOM.');
            }
        }
 // Chức năng hiển thị danh sách sản phẩm
        function displayProducts() {
            var productTableBody = document.getElementById('productTableBody');
            productTableBody.innerHTML = '';

            for (var i = 0; i < products.length; i++) {
                var product = products[i];

                var row = productTableBody.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);

                cell1.innerHTML = product.id;
                cell2.innerHTML = product.name;
                cell3.innerHTML = product.code;
                cell4.innerHTML = product.quantity;
                cell5.innerHTML = product.price || 'N/A';
                cell6.innerHTML = '<button onclick="editProduct(' + product.id + ')">Chỉnh sửa</button> ' +
                                  '<button onclick="removeProduct(' + product.id + ')">Xóa</button>';
            }
        }

        function displayPromotions() {
            var promotionTableBody = document.getElementById('promotionTableBody');
            promotionTableBody.innerHTML = '';

            for (var i = 0; i < promotions.length; i++) {
                var promotion = promotions[i];

                var row = promotionTableBody.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(3)
                var cell4 = row.insertCell(2);
                var cell5 = row.insertCell(3);
                var cell6 = row.insertCell(4);

                cell1.innerHTML = promotion.id;
                cell2.innerHTML = promotion.name;
                cell3.innerHTML = promotion.code;
                cell4.innerHTML = promotion.discount + '%';
                cell5.innerHTML = promotion.startDate;
                cell6.innerHTML = promotion.endDate + ' ' +
                                  '<button onclick="editPromotion(' + promotion.id + ')">Chỉnh sửa</button> ' +
                                  '<button onclick="removePromotion(' + promotion.id + ')">Xóa</button>';
            }
        }

        function addProduct() {
// Xử lý thêm sản phẩm ở đây
            alert('Thêm sản phẩm');
        }

        function editProduct(productId) {
            var newName = prompt('Nhập tên mới cho sản phẩm:');
            if (newName !== null) {
                var productIndex = products.findIndex(function(product) {
                    return product.id === productId;
                });

                if (productIndex !== -1) {
                    products[productIndex].name = newName;
                    displayProducts();
                }
            }
        }

        function removeProduct(productId) {
            var confirmation = confirm('Bạn có chắc muốn xóa sản phẩm này?');
            if (confirmation) {
                products = products.filter(function(product) {
                    return product.id !== productId;
                });

                displayProducts();
            }
        }
// Chức năng quản lý khuyến mãi
        function addpromotion() {
            // Xử lý thêm khuyến mãi ở đây
            alert('Thêm khuyến mãi');
        }

        function editpromotion(promotionId) {
            var newDiscount = prompt('Nhập giảm giá mới (%):');
            if (newDiscount !== null) {
                var promotionIndex = promotions.findIndex(function(promotion) {
                    return promotion.id === promotionId;
                });

                if (promotionIndex !== -1) {
                    promotions[promotionIndex].discount = parseInt(newDiscount);
                    displayPromotions();
                }
            }
        }

        function clearpromotion(promotionId) {
            var confirmation = confirm('Bạn có chắc muốn xóa khuyến mãi này?');
            if (confirmation) {
                promotion = promotion.filter(function(promotion) {
                    return promotion.id !== promotionId;
                });

                displaykhuyenmai();
            }
        }

        function clearProductInputs() {
            document.getElementById('productName').value = '';
            document.getElementById('productCode').value = '';
            document.getElementById('productQuantity').value = '';
            document.getElementById('productPrice').value = '';
            document.getElementById('productImageInput').value = '';
        }

        function clearPromotionInputs() {
            document.getElementById('promotionName').value = '';
            document.getElementById('promotionCode').value = '';
            document.getElementById('promotionDiscount').value = '';
            document.getElementById('promotionStartDate').value = '';
            document.getElementById('promotionEndDate').value = '';
        }
//------------------------------------------------------------------------

