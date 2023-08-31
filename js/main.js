$(document).ready(function () {

    // 메뉴
    // $(".navi>li").on("mouseover", function () {
    //     $(this).find(".submenu").stop().slideDown(500);
    // });
    // $(".navi>li").on("mouseout", function () {
    //     $(this).find(".submenu").stop().slideUp(500);
    // });

    // $(".navi > li").mouseover(function(){
    //     $(".submenu").stop().slideDown(500);
    // });

    // $(".navi > li").mouseout(function(){
    //     $(".submenu").stop().slideUp(500);
    // });

    $(".navi > li").on("mouseover", function(){
        $("#menu_bg").stop().slideDown(500);
        $(".submenu").stop().slideDown(600);
    });
    $(".navi > li").on("mouseout", function(){
        $("#menu_bg").stop().slideUp(500);
        $(".submenu").stop().slideUp(600);
    });

    // 이미지

    // 이미지 슬라이드 작업
    var imgs = 2;
    var now = 2;

    start();

    function start() {
        $(".imgslide>a").eq(0).siblings().css({ "margin-top": "-400px" });
        setInterval(function () { slide(); }, 3000);
    }

    function slide() {
        now = now == imgs ? 0 : now += 1;

        $(".imgslide>a").eq(now - 1).css({ "margin-top": "-400px" });
        $(".imgslide>a").eq(now).css({ "margin-top": "0px" });
    }



    // tab 메뉴
    $(".tabmenu>li>a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });



    // 팝업창
    $(".notice li:first").click(function(){
        $("#layer").addClass("active");
    });

    $(".btn").click(function(){
        $("#layer").removeClass("active");
    });

});