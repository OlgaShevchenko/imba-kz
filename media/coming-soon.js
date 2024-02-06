$(document).ready(function() {
	$('.collection__item-button--report').on("click",function() {
        $('.coming-soon').show();
		$('body').append('<div class="blur"></div>');
    });	
	$('.coming-soon-btn').on("click",function() {
        $('.coming-soon').hide();
		$('.blur').remove();
    });	
	 $(document).on("click",".blur",function() {
         $('.coming-soon').hide();
		$('.blur').remove();
    });
	 
});
