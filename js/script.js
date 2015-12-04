var dHeight = $( window ).height();
var dWidth = $( window ).width();

$('#content').css('min-height', dHeight - 223 + 'px')

$('.menu').load('./menu.html');

$('.menu-left .header-menu').click(function(){
	$('#container, .menu, .menu-left .header-menu').toggleClass('show-menu');
});

$('.menu-left .header-search').click(function(){
	$('#header, .sub-nav, .menu-left .header-search').toggleClass('show-search');
});

$('.list-pix').click(function(){
	$('.list-pt').removeClass('selected');
	$(this).addClass('selected');
	$('.list-cont').removeClass('pt').addClass('pix');
});
$('.list-pt').click(function(){
	$('.list-pix').removeClass('selected');
	$(this).addClass('selected');
	$('.list-cont').removeClass('pix').addClass('pt');
});



$(window).scroll(function () {
    var y = $(window).scrollTop();
    if (y >= dHeight / 2) {
        $('.gotop').addClass('show');
    } else {
        $('.gotop').removeClass('show');
    }
});

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true
});

$('.highlight-main').css('height',dWidth * 0.93 + 'px')