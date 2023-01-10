$(document).ready(function (){
    $("#scroll-btn-info").click(function (){
        $('html, body').animate({
            scrollTop: $("#info").offset().top
        }, 300);
    });
    $("#scroll-btn-hero").click(function (){
        $('html, body').animate({
            scrollTop: $("#hero").offset().top
        }, 300);
    });
});