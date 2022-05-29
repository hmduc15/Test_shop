 const $$ = document.querySelectorAll.bind(document);
 const $ = document.querySelector.bind(document);
 var imgSildes = $$(".img_slider");
 var btnPrev = $("#btn_prev");
 var btnNext = $("#btn_next");
 var textSlideHeading = $(".text_slide-heading");
 var textSlideTitlle = $(".text_slide-title");
 var textSlideBtn = $(".text_slide-btn");
 var textSlideImg2 = $(".text_slide-img2");
 var textSlideContainer = $(".text_slide-container");
 var textSlideTitleImg2 = $(".text_slide-title_img2");
 var textSildeBtnImg2 = $(".text_slide-btn_img2");
 var btnTabs = $$(".product_wrapper-tab");
 var tabContent = $$(".tab_content");
 var slideIndex = 1;
 var iconScroll = $("#icon_scroll");
 var quantyProduct = $(".quanty_product");
 var btnBuys = $$("#btn_cart");
 var iconCart = $$(".bi-cart-plus-fill.active");
 var iconCheck = $$(".bi-check-lg.non_active");
 var btnMenuMobile = $(".btn_menu-mobile");
 var menuMobile = $(".header_nav.menu-mobile");
 var productCards = $$(".product_card")
 var btnCloseMenu = $("#btn_close-menu");
 var btnHearts = $$("#btn_heart");
 var iconHearts = $$(".icon_heart");
 var proName = $$(".product_name");
 var proPrice = $$(".product_price");
 var proImage = $$(".product_card-img a img");
 var cartArr = new Array();
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 };

 function showSlides(n) {
     if (n > imgSildes.length) {
         slideIndex = 1;
     }
     if (n < 1) {
         slideIndex = imgSildes.length;
     }
     for (let i = 0; i < imgSildes.length; i++) {
         imgSildes[i].style.display = "none";
     }
     imgSildes[slideIndex - 1].style.display = "block";
 };


 if (screen.width >= 320 & screen.width <= 480) {
     productCards.forEach((item, index) => {
         item.classList.add("reset_pos");
     });
     console.log('fsfds')
 };



 const swiperOffer = new Swiper('.product_offered', {
     breakpoints: {
         414: {
             loop: false,
             slidesPerView: 1,
             spaceBetween: 40,
             freeMode: true,
             grabCursor: true,
             navigation: {
                 nextEl: ".swiper-button-next",
                 prevEl: ".swiper-button-prev",
             },
         },
         1024: {
             loop: false,
             slidesPerView: 3,
             spaceBetween: 30,
             slidesPerGroup: 1,
             navigation: {
                 nextEl: ".swiper-button-next",
                 prevEl: ".swiper-button-prev",
             },
         }
     },
 });

 const swiperEntry = new Swiper('.entry_media-wrapper', {
     slidesPerView: 1,
     spaceBetween: 30,
     slidesPerGroup: 1,
     loop: true,
     navigation: {
         nextEl: ".post-button-next",
         prevEl: ".post-button-prev",
     },
     autoplay: {
         delay: 3000,
         disableOnInteraction: true,
     },

 });
 if (screen.width >= 320 & screen.width <= 480) {
     const swiperPost = new Swiper('.post_wrapper ', {
         slidesPerView: 1,
         spaceBetween: 30,
         slidesPerGroup: 1,
         centeredSlides: true,
         pagination: {
             el: ".swiper-pagination",
         },
         autoplay: {
             delay: 5000,
             disableOnInteraction: true,
         },
     });
     const swiperBand = new Swiper('.wpb_band', {
         slidesPerView: 1,
         spaceBetween: 30,
         slidesPerGroup: 1,
         centeredSlides: true,
         pagination: {
             el: ".swiper-pagination",
         },
         autoplay: {
             delay: 2000,
             disableOnInteraction: true,
         },
     });

 };
 window.onscroll = function() {
     onScroll();
 };


 function onScroll() {
     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
         iconScroll.classList.add("fadeIconScroll");
     } else {
         iconScroll.classList.remove("fadeIconScroll");
     }
 };

 function addtextAnimation() {
     textSlideHeading.classList.add("fadeHeading");
     textSlideTitlle.classList.add("fadeTitle");
     textSlideBtn.classList.add("fadeBtn");
     textSlideContainer.classList.add("fadeContainer");
     textSlideTitleImg2.classList.add("fadeSlideTitle2");
     textSildeBtnImg2.classList.add("fadeSlideBtn")
 };

 function removetextAnimation() {
     // textSlideHeading.style.transform = "translateY(0px)";
     // textSlideTitlle.style.transform = "translateY(0px)";
     textSlideHeading.classList.remove("fadeHeading");
     textSlideTitlle.classList.remove("fadeTitle");
     textSlideBtn.classList.remove("fadeBtn");

 };

 function textSlideOnload() {
     $(".text_slide-img1").classList.add("tetxSileOnload");
 };

 btnNext.addEventListener('click', function() {
     setTimeout(plusSlides(-1), 5000)
     addtextAnimation();
 });

 btnPrev.addEventListener('click', function() {
     removetextAnimation();
     setTimeout(plusSlides(1), 5000);
 });
 btnTabs.forEach((tab, index) => {
     tab.onclick = function() {
         $(".product_wrapper-tab.line_tab").classList.remove("line_tab");
         this.classList.add('line_tab');
         $(".tab_content.active").classList.remove("active")
         tabContent[index].classList.add("active");
     }
 });

 btnBuys.forEach((btnBuy, index) => {
     btnBuy.onclick = function() {
         iconCart[index].classList.add("non_active");
         iconCart[index].classList.remove("active");
         iconCheck[index].classList.remove("non_active");
         iconCheck[index].classList.add("active");
         var i = quantyProduct.innerText;
         i++;
         quantyProduct.innerText = i;
         var nameProduct = proName[index].innerText;
         var priceProduct = proPrice[index].innerText;
         var imageProduct = proImage[index].src;
         var carProduct = new Array(imageProduct, nameProduct, priceProduct);
         cartArr.push(carProduct);
         sessionStorage.setItem("cartArr", JSON.stringify(cartArr));
     }
 });
 btnHearts.forEach((btnHeart, index) => {
     btnHeart.onclick = function() {
         iconHearts[index].style.fill = "#ff2020";
     }
 })

 btnMenuMobile.onclick = function() {
     menuMobile.classList.add("push_menu");
     $(".push_overlay").classList.add("fadeOverlay");
 };
 btnCloseMenu.onclick = function() {
     menuMobile.classList.remove("push_menu");
     $(".push_overlay").classList.remove("fadeOverlay");
 };
 //  btnCloseMenu.onclick() = function() {

 //  }