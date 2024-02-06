$(document).ready(function() {
$(".faq-block__question").click(function() {        
		$(this).toggleClass('active');
		$(this).next(".faq-block__answer").slideToggle();        
});
$(".faq-formblock__success-more").click(function() {        
	$('.faq-formblock-container').show();
    $('.faq-formblock__success').hide();        
});
$('.freeprice').html(freeSumVal);  
lightbox.option({
   'fitImagesInViewport': true,
   'showImageNumberLabel': false
})
});	
