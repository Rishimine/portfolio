$(function () {
    // ハンバーガー
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
    // ヘッダーatag
    $('.top-a').on('mouseover',function(){
        $(this).css('color','gray');

    });
    $('.top-a').on('mouseout',function(){
        $(this).css({color:'black'});

    });

    //code atag
    $('.code').on('mouseover',function(){
        $(this).css('color','black');

    });
    $('.code').on('mouseout',function(){
        $(this).css({color:'rgb(180, 177, 177)'});

    });

    ScrollReveal().reveal('section', { 
        duration: 1600,
        reset: true   
      });
    
})