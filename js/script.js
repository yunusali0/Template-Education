$(document).ready(function () {
    $('.dropdown').hover(function () {
       $(this).addClass("show");
       $(this).find(".dropdown-menu").addClass("show");
    },function(){
        $(this).removeClass("show");
        $(this).find(".dropdown-menu").removeClass("show");
    });

    $(window).scroll(function() {
        console.log($(this).scrollTop());
        if($(this).scrollTop()>50) {
            $( "#header" ).addClass("scrolled");
        } else {
            $( "#header" ).removeClass("scrolled");
        }
    });
})