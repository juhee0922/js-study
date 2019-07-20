/* btc페이지에서 슬라이드 플러그인 */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, 
    spaceBetween: 30,
    slidesPerGroup:3,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(window).resize(function(){
if ( $(this).width() < 1200 ) {
    swiper.params.slidesPerView = 2;
    swiper.params.slidesPerGroup = 2;
} 
else {
    swiper.params.slidesPerView = 3;
    swiper.params.slidesPerGroup = 3;
}
});