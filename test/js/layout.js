/* 헤더&푸터 관련된 js */
$(function(){
    /* 메뉴 우측 슬라이드 */
    $('.aside-close, .aside-bg, .menu').click(function(){
        $('.aside-width, .aside-bg').toggleClass("hide");
    });

    /* top 볼이 좌우로 움직임 */
    $('.toggle-one').click(function(e){
        console.log($(this).css('left'));
        if($(this).css('left') == '0px'){
            $(this).css({
                right: 0,
                left: 'auto'
            });
            $('.toggle-bg').css("background-color","#9b59b6");
            $('.list-balances').show();
            $('.toggle-svg').show();
        } else {
            $(this).css({
                right: 'auto',
                left: 0,
            });
            $('.toggle-bg').css("background-color","#b8b7be");
            $('.list-balances').hide();
            $('.toggle-svg').hide();
        }
    });

    
    /* 2depth */
    $('.gnb-li').click(function(e){
        e.preventDefault();
        $(this).find('ul').toggle();
    });

    /* 푸터의 언어 선택 */
    $('.lang').click(function(){
        $('.drop-box').toggle();
    }); 

    $(window).click(function(e){
        console.log(e.target, $(e.target).hasClass('two-hide') === false, $(e.target).closest('.two-hide').length == 0);
        if(
            $(e.target).hasClass('two-hide') === false &&
            $(e.target).closest('.two-hide').length == 0 
            /* 위가 다 false가 되면 true이고, 그래서 hide()가 실행 */
        ){
            $(".drop-box, .gnb-li ul").hide();
        }
    })

});



