var swiper = new Swiper(".productslist-categories__list", {  slidesPerView: "auto",});
$(document).ready(function() {	 	 
	  $( ".productslist-categories__item" ).each(function() {
		  if(window.location.pathname == $(this).attr('href').split('?')[0]){
			  $(this).addClass('productslist-categories__item--current');			 
			   toCurSlide ();
			   
		  }
 
});
    
	var wrapperWidth = 0;
	$('.productslist-categories__list').find('.swiper-slide').each(function() {   
		wrapperWidth =  wrapperWidth + $(this).width();
	});	
	if ($(window).width() > wrapperWidth)
	{
		$('.wrap').css({'max-width': wrapperWidth + 'px'});		
	};	
	 $(document).on('click', '[data-pid]', e => {
		
        let itms = {};
        itms[$(e.target).data('pid')] = $(e.target).parent().find('input').val();
        Cart.add({
            items: itms
        });
		$(e.target).parent('.collection__item-button').addClass('collection__item-button--cart');
        $(e.target).parent('.collection__item-button').html('<a href="/cart_items?lang=ru">Перейди в корзину</a>');
		$('.incart-popup').addClass("visible animate__animated animate__slideInDown");
		  setTimeout( () => {
			 $('.incart-popup').removeClass("animate__animated animate__slideInDown"); 
			 $('.incart-popup').addClass("animate__animated animate__slideOutUp"); 	
		  },3000);
		   setTimeout( () => {
			    $('.incart-popup').removeClass("visible");
				$('.incart-popup').removeClass("animate__animated animate__slideOutUp");
		   }, 4000);
	});
	
	setTimeout(function() {
	if (window.location.pathname == '/collection/skidki-2') {
		$('.collection__timer-block').show();
	}
	}, 1000);
	
});
function toCurSlide (){
 let  curslide = $('.productslist-categories__item--current').parent('.swiper-slide').attr('aria-label').slice(0, $('.productslist-categories__item--current').parent('.swiper-slide').attr('aria-label').indexOf(' ')) - 1;

swiper.slideToLoop( curslide);
}
;
