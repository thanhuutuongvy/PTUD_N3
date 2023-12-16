
//------------------------------------PRODUCT-------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")

smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click", function(){
        console.log(imgItem)
         bigImg.src = imgItem.src
    })
})

const baoQuan = document.querySelector(".baoquan")
const chiTiet = document.querySelector(".chitiet")
if(baoQuan){
    baoQuan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"    
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
})
}
if(chiTiet){
    chiTiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"    
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
            })
}


const buTton = document.querySelector(".product-content-right-bottom-top")
if(buTton){
    buTton.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
        })
}


