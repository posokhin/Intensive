$(document).ready(function(){
	$(".header__menu ul li a,.about-two__btn a,.banner-two__btn a,.program__btn a").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		//event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 20;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$('.price-label').on('click', function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active')


})

$('.fas').on('click',function(){
	$('.header__menu').slideToggle();
});