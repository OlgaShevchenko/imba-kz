
$(document).ready(function() {	 	 
	  
    

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
	
	if(!$('.search-widget-field').val() ){
		$('.search-widget-button').prop("disabled",true);
	}
	
	$(document).on('input', '.search-widget-field', e => {   
		 if($('.search-widget-field').val() ){				
			$('.search-widget-button').prop("disabled",false);
		 }
		 else {
			$('.search-widget-button').prop("disabled",true);
		 }
	 });	
	
	
	
});
