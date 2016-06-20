$( document ).ready(function() {

  // Get started!
    $(".hamburger").click(function() {
        $(".menu-collapsed").toggleClass("menu-expanded");
    });
    if($('.slider-auto').length ){
        $('.slider-auto').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3900
        });
    }
    if($('.slider').length ){
        $('.slider').slick({
            dots: true
        });
    }
    if($('.slider-home').length ){
        $('.slider-home').slick({
            dots: false,
            autoplay: true,
            autoplaySpeed: 3500,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
        $('.box-cilindri').hover(function(){
            $('.slider-home').slick('slickPause');
            $('.slider-home').slick('slickGoTo', 0);
        }, function(){
            $('.slider-home').slick('slickPlay');
        });
        $('.box-macchinari').hover(function(){
            $('.slider-home').slick('slickPause');
            $('.slider-home').slick('slickGoTo', 1);
        }, function(){
            $('.slider-home').slick('slickPlay');
        });
        $('.box-ricambio').hover(function(){
            $('.slider-home').slick('slickPause');
            $('.slider-home').slick('slickGoTo', 2);
        }, function(){
            $('.slider-home').slick('slickPlay');
        });
    }
});
