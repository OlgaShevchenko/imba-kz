function animateMarquee(el, duration) {
  const innerEl = el.querySelector('.stripe__inner');
  const innerWidth = innerEl.offsetWidth;
  const cloneEl = innerEl.cloneNode(true);
  el.appendChild(cloneEl);
  
  let start = performance.now();
  let progress;
  let translateX;

  requestAnimationFrame(function step(now) {
    progress = (now - start) / duration;
 
    if (progress > 1) {
    	progress %= 1;
      start = now;
    }

    translateX = innerWidth * progress;
    
    innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    requestAnimationFrame(step);
  });
}
const marquee1 = document.querySelector('.stripe');

animateMarquee(marquee1, 30000);


var swiper2= Swiper;
var init = false;
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(tablet.matches) {
        if (!init) {
            init = true;
            swiper2 = new Swiper(".index__container", {
                slidesPerView: 3,                

                breakpoints: {

                    1024: {
                        slidesPerView: 3,                        
                    }

                }

            });
        }

    }

    // Disable (for tablet)
    else if(mobile.matches) {
       
		        $('.swiper-container').each(function(){
this.swiper2.destroy();
})
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        $('.swiper-container').each(function(){
this.swiper2.destroy();
})
        init = false;
    }
}


window.addEventListener('load', function() {
    swiperMode();
});
window.addEventListener('resize', function() {
    swiperMode();
});
$(document).ready(function() {

	EventBus.subscribe('update_items:insales:cart', function(data) {
        cartUpdate(data);
    });
	
   $(document).on('click', '[data-pid]', e => {
	 

	    let itms = {};
        itms[$(e.target).data('pid')] = $(e.target).parent().find('input').val();		
        Cart.add({
            items: itms
        });		
		var  popTitle = $(e.target).parents('.collection__item').find('.collection__item-title').text();		
        var  popImg =  $(e.target).parents('.collection__item').find('.collection__image--visible').attr('src');				        
		$('.incart-pop__name').text(popTitle);
        $('.incart-pop__img img').attr('src',  popImg);
		let  curPrice = 0;
		if($(e.target).parents('.collection__item').find('.collection__item-price span').hasClass('new')) {				
			var popNewprice = $(e.target).parents('.collection__item').find('.new').text();
			var popOldprice = $(e.target).parents('.collection__item').find('.old').text();			
			$('.incart-pop__price .new').text(popNewprice);	
			$('.incart-pop__price .old').text(popOldprice);	
			curPrice = Number($(e.target).parents('.collection__item').find('.new').text().replace(/\D+/g, ''));			
		}
		else {			
			var popCurprice = $(e.target).parents('.collection__item').find('.current').text();			
			$('.incart-pop__price .current').text(popCurprice);	
			curPrice = Number($(e.target).parents('.collection__item').find('.current').text().replace(/\D+/g, ''));
		}
		let curSum = Number($('.incart-pop__sum').text().replace(/\D+/g, ''));		
		if ( (curSum + curPrice) >= freeSumVal){
			$('.incart-pop__delivery-text').html(`Для вас <span>бесплатная</span> доставка!`)
		}
		else {
			$('.incart-pop__delivery-text').html(`Для <span>бесплатной</span> доставки добавьте товары на сумму <span>` + (freeSumVal - curSum - curPrice)  + ` тг.</span>` )
		}
		$('.incart-pop').show();
		$('body').append('<div class="blur"></div>');
		$(e.target).parent('.collection__item-button').addClass('collection__item-button--cart');
        $(e.target).parent('.collection__item-button').html('<a href="/cart_items?lang=ru">Перейди в корзину</a>'); 
	});
	$(".incart-pop__continue-btn, .incart-pop__close").click(function() { 
		$('.incart-pop').hide();
		$('.blur').remove();
	});
	
	$(document).on("click",".blur",function() {
        $('.incart-pop').hide();
		$('.blur').remove();
    });
});

let cartUpdate = (cart_data) => {         
	let nsr = cart_data.total_price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");      
	$('.incart-pop__sum').html(nsr);
}
;
