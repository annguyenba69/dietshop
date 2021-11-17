$(document).ready(function () {
    $(".nav-toggle").click(function () {
        $(".responsive-menu").slideToggle();
    });
    function hide_responsive_menu() {
        $(".responsive-menu").slideUp();
    }
    $(window).resize(function () {
        hide_responsive_menu();
    });
    $(window).scroll(function () {
        hide_responsive_menu();
    });
    //Xu ly top bar right
    $("#top-bar-right .user").click(function () {
        $(".user-account").toggleClass("show");
    });
    $(".user-account .cancel").click(function(){
        $(".user-account").removeClass("show");
    });
    $("#top-bar-right .search").click(function(){
        $(".nav-search").toggleClass("show");
    });
    $(".nav-search .cancel-nav-search").click(function(){
        $(".nav-search").removeClass("show");
    });
    $(window).scroll(function(){
        $(".nav-search").removeClass("show");
    });
    //Xu ly hieu ung background
    TweenMax.from($(".background-title"), 1, { y: -100, opacity: 0 });
    TweenMax.from($(".background-left img"), 1, { y: -100, opacity: 0 });
    $(".background-button").addClass("animate__animated animate__heartBeat");
    $(".background-content").addClass("animate__animated animate__heartBeat");
    //Xu ly hieu dung cho menu
    $(window).scroll(function () {
        var scroll_menu = $(window).scrollTop();
        if (scroll_menu >= 300) {
            $("#header").addClass("show");
            $(".responsive-menu").addClass("scroll");
        } else {
            $("#header").removeClass("show");
            $(".responsive-menu").addClass("scroll");
        }
        var scroll_more_info = $("#more-info").offset().top;
        if (scroll_menu >= (scroll_more_info - 600)) {
            $(".more-info-item").addClass("show");
        }
    });
    //Xu ly hieu ung cho sidebarleft o shop.html
    $(".sub-menu").slideUp(0);
    $(".angle").click(function () {
        $(this).prev(".sub-menu").slideToggle(400);
        $(this).toggleClass("open");
        return false;
    });
    //Xu ly Tooltip cho sidebarleft
    $('[data-toggle="tooltip"]').tooltip();
    //Xu ly xem them san pham cho trang shop.html
    $(".more-product").slideUp(0);
    $(".button-more").click(function () {
        $(".more-product").slideDown(1000);
        TweenMax.staggerFrom($(".more-product"), 1, { y: 100, opacity: 0 }, 0.1);
        $("html").animate({ scrollTop: $(".button-more").offset().top - 500 }, 1000, "easeInQuad");
    });
});