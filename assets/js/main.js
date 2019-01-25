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


$('form').on('keydown',function(event){
	if(event.keyCode == 13) {
	event.preventDefault();
	return false;
}
});


var promoBtn = document.querySelector('.promocode__confirm');
var promoInput = document.querySelector('.promocode__input');
var sum = document.querySelector('input[name="sum"]');
var promoOk = $('.promocode__ok');
var promofail = $('.promocode__fail');

var attrSum = sum.getAttribute("value");


promoBtn.onclick = function(e){
	if(promoInput.value !=='start'){
		promofail.fadeIn();
	}
	else{
		promoOk.fadeIn();
		promofail.hide();
		sum.setAttribute('value','1490')
		document.querySelector('.price__left-tarif p').innerHTML = '1490 руб.';
	}
}
promoInput.onkeydown = function(){
	promofail.hide();
	promoOk.hide();
}

