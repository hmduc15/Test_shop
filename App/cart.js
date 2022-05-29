const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
var innerProduct = $(".cart_inner-product");
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
var carProduct = sessionStorage.getItem("cartArr");
var proArr = JSON.parse(carProduct);
var qtyCart = $$(".pro_qty");

function showProduct() {
    var html = "";
    var total_money = 0;
    for (let i = 0; i < proArr.length; i++) {
        var money = parseFloat(proArr[i][2].replace(/\$/g, ''));
        total_money = total_money + money;
        console.log(total_money);
        html +=
            '<tr>' +
            '<td style="width: 25%">' +
            '<div class="product_cart-img">' +
            '<img class="img_cart" src=" ' + proArr[i][0] + '" alt="">' +
            '</div>' +
            '</td>' +
            '<td>' +
            '<p class="product_cart-name text_product-cart">' +
            proArr[i][1] +
            '</p>' +
            '</td>' +
            '<td>' +
            '<p class="product_cart-pirce text_product-cart">' +
            proArr[i][2] +
            '</p>' +
            '</td>' +
            '<td>' +
            '<div class="quantity">' +
            '<div class="pro_qty">' +
            '<span class="dec_qty" role="button">+</span>' +
            '<input class="qty_cart" type="text" value="1">' +
            '<span class="dec_qty" role="button">-</span>' +
            '</div>' +
            '</div>' +
            '</td>' +
            '<td style="text-align:center">' +
            '<p class="product_cart-pirce text_product-cart total_money">' +
            proArr[i][2] +
            '</p>' +
            '</td>' +
            '<td>' +
            '<div class="product_cart-delete">' +
            '<ion-icon class="icon_delete" name="trash"></ion-icon>' +
            '</div>' +
            '</td>' +
            '</tr>'
    }
    html +=
        '<tr>' +
        '<td colspan="6" style="text-align:right">' +
        '<div class="product_cart-total">' +
        '<span >Total:' + ' ' + '<span class="money">' + '\44' + total_money + '</span' + '</span>' +

        '</div>' +
        '</td>' +
        '</tr>'
    innerProduct.innerHTML = html;
}
showProduct();