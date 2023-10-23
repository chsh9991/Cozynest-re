// header nav 마우스 오버 메뉴

$(function(){
    $('.nav_wrap .nav_list').mouseover(function(){
        $('.header_wrap').stop().animate({height:'130px'});
        $('.header_wrap').css({boxShadow:'0px 5px 5px -5px #ccc'})
    })
    .mouseout(function(){
        $('.header_wrap').stop().animate({height:'80px'});
        $('.header_wrap').css({boxShadow:'none'})
    })
});

//   메뉴 버튼
$(function(){

    $('.button').click(function(){
    $('.button span').toggleClass('active');
    $('.over').toggleClass('visible');
    });
});


// 메뉴 버튼 안 서브메뉴 기능
$(function(){
    const tabMenu = $('.over .menu li a');
    const tabSub = $('.over .menu_sub')
    tabMenu.click(function(){
        $(this).next().slideToggle().siblings('.menu_sub').slideUp();
    })
    $('.menu_sub').hide();
});




// 컨테이너 1 슬라이드
$(function(){
    $('.con1_wrap ul').slick();
});

