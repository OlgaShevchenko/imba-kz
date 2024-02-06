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
            swiper2 = new Swiper(".collection-blogers__container", {
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
 $(document).on('click', '[data-pid]', e => {
        let itms = {};
        itms[$(e.target).data('pid')] = $(e.target).parent().find('input').val();
        Cart.add({
            items: itms
        });
		$(e.target).parent('.collection__item-button').addClass('collection__item-button--cart');
        $(e.target).parent('.collection__item-button').html('<a href="/cart_items?lang=ru">Перейди в корзину</a>');
	});
	
	
});
