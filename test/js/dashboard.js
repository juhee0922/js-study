$(function(){
    $('.tabs li').click(function(e){
        e.preventDefault();
        $(this).addClass("on").siblings().removeClass("on");
        $(".trades-cont, .orders-cont").hide().eq( $(this).index() ).show();
    }).eq(0).trigger('click');;


    $('.check-mark').click(function(){
        $('.wallet-list').toggle();
    });

});

