$(document).ready(function () {
    $("#slide-box").owlCarousel({
        navigation: !1,
        pagination: !1,
        items: 3,
        itemsCustom: [[480, 1], [320, 1], [768, 2], [767, 2], [991, 3], [1200, 3]],
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: 5e3,
        responsive: !0,
        navigationText: ["<a class='hidden-xs flex-prev-slideshow'><i class='fa fa-arrow-left'></i></a>", "<a class='hidden-xs flex-next-slideshow'><i class='fa fa-arrow-right'></i></a>"]
    })
}), $(window).load(function () {
}), $(window).resize(function () {
}), $(document).ready(function () {
    var e = !0;
    $menuLeft = $(".pushmenu-left"), $nav_list = $(".button_menu_mobile"), $nav_list.click(function (n) {
        $(this).toggleClass("active"), $("body").toggleClass("pushmenu-push-toright"), $menuLeft.toggleClass("pushmenu-open"), e = !1
    }), $("html").click(function () {
        e && ($("body").removeClass("pushmenu-push-toright"), $(".pushmenu-left").removeClass("pushmenu-open")), e = !0
    }), $(".navbar-nav").find(".parent").append("<span></span>"), $(".navbar-nav .parent span").on("click", function () {
        "opened" == $(this).attr("class") ? $(this).removeClass().parent(".parent").find("ul").slideToggle() : $(this).addClass("opened").parent(".parent").find("ul").slideToggle(), e = !1
    })
});