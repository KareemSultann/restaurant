$(function(){
    'use strict';
    $("html").niceScroll({
        cursorcolor: "#d4b37f",
        cursorwidth: "10px",
        cursorborder: "none",
        cursorborderradius: "0",
        scrollspeed: 120,
        mousescrollstep: 65,
        cursorminheight: 18,
    });
    var myHeader = $("header");
    myHeader.height($(window).height());
    $(window).resize(function(){
    myHeader.height($(window).height());
    });
    $(window).stellar();

});
$(window).load(function(){
    $("body").css("overflow", "auto");
        $(".loading").fadeOut(1000);
    });
