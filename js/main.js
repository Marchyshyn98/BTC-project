$(document).ready(function(){
//    Register Modal
    $(".open-register").on("click", function(){
        $(".modal").fadeIn();
        $(".container-modal").fadeIn();
    });
    $('.modal__overlay').click(function(){
        $(".container-modal").fadeOut();
        $('.modal').fadeOut();
        $(".container-modal-login").fadeOut();
        $('.modal-login').fadeOut();
        $(".container-modal-forgot").fadeOut();
        $(".modal-forgot").fadeOut();
    });
//    Login Modal
    $(".open-login").on("click", function(){
        $(".modal-login").fadeIn();
        $(".container-modal-login").fadeIn();
    });
//    Forgot Modal
    $(".reset-password").on("click", function(){
        $(".container-modal-login").fadeOut();
        $('.modal-login').fadeOut();
        $(".modal-forgot").fadeIn();
        $(".container-modal-forgot").fadeIn();
    });
//    Menu Modal
    $(".navbar-toggler").click(function(){
        $("body").addClass("fixed");
        $(".modal-menu").toggle(400);
        $(".container-modal-menu").toggle(400);
        $(".navbar-toggler").fadeOut();
        $(".close-menu").fadeIn(400);
    });
    $(".close-menu").click(function(){
        $("body").removeClass("fixed");
        $(".container-modal-menu").toggle(400);
        $(".modal-menu").toggle(400);
        $(".close-menu").fadeOut();
        $(".navbar-toggler").fadeIn(400);
    });
//    Scroll
    $('.go_to').click( function() { 
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
        return false;
    });
    
//    FAQS Switcher
    var switcher = $(".faqs-item__block");
    switcher.on("click", function(){
        if($(this).find(".faqs-item__switch").hasClass("rotate")){
            $(this).find(".faqs-item__switch").removeClass("rotate");
            $(this).find(".faqs-item__text").toggle(200);
        } else {
            $(this).find(".faqs-item__switch").addClass("rotate");
            $(this).find(".faqs-item__text").toggle(200);
        }
    });
});

//Pages Switch
$(function() {
    var location = window.location.href;
    var cur_url = location.split('/').pop();
    $(".navbar-menu li").each(function() {
        var link = $(this).find('a').attr('href');
        if (cur_url == link)
        {
            $(this).addClass("active-main-menu");
        }
    });
    $(".footer-menu div").each(function() {
        var link = $(this).find('li a').attr('href');
        if (cur_url == link)
        {
            $(this).addClass("active");
            $(this).find("li").addClass("active-color");
        }
    });
    $(".sidebar-menu div").each(function() {
        var link = $(this).find('li a').attr('href');
        if (cur_url == link)
        {
            $(this).addClass("active-sidebar");
            $(this).find("li").addClass("active-main-menu");
        }
    });
});

    





