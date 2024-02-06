$(document).ready(function(){ 
	let clickedBlock;			
	let stepSum;	
	let winWidth = $(window).width();	
	$('.constructor__old-price').hide();
	$('.constructor__current-price').hide();	
	let pageSpace = document.documentElement.clientHeight;
	$(document).on('click', '.tastelist-trigger',  function() {  				
		clickedBlock = $(this).attr('data-target');
		switch (clickedBlock) {		
			case 'block1':
			$('.constructor__taste-list-header span').text('первый');
			break;
			case 'block2':
			$('.constructor__taste-list-header span').text('второй');
			break;
			case 'block3':
			$('.constructor__taste-list-header span').text('третий');
			break;
			case 'block4':
			$('.constructor__taste-list-header span').text('четвертый');
			break;
		}		
		$('.constructor__taste-list').addClass('visible');		
		$('.constructor__taste-item').removeClass('constructor__taste-item--selected');		
		let selectedImg = $(this).children('img').attr('src');					
		$('img[src="'+selectedImg+'"]').parents('.constructor__taste-item').addClass('constructor__taste-item--selected');
		if (winWidth > 1025) {	
			$('.constructor__taste-list').mCustomScrollbar();  
         
          
         
		}		
	});
	
	$(document).on('click', '.constructor__taste-item', function() {  			
		$(this).addClass('constructor__taste-item--selected');
		let selectedTaste = $(this).children('.constructor__taste-name').html();
		let selectedImg = $(this).children('.constructor__taste-image').html();				
		$('.constructor__item-image[data-target="'+clickedBlock+'"]').next('.constructor__item-header').text(selectedTaste);
		$('.constructor__item-image[data-target="'+clickedBlock+'"]').html(selectedImg);
		$('.constructor__item-image[data-target="'+clickedBlock+'"]').data('product-id', $(this).data('product-id'));
		$('.constructor__item-image[data-target="'+clickedBlock+'"]').removeClass('constructor__item-image--empty');
		$('.constructor__taste-list').removeClass('visible');		
		checkStepSum ();			
	});
	$(document).on('click', '.constructor__shaker-item', function() {  									
		let shakerUrl = $(this).attr('data-large-img');
		let shakerName = $(this).children('.constructor__shaker-name').text();		
		$('.constructor__shaker-item').removeClass('constructor__shaker-item--selected');
		$(this).addClass('constructor__shaker-item--selected');
		$('.constructor__item-shaker img').attr('src', shakerUrl);
		$('.constructor__item-shaker').data('product-id', $(this).data('product-id'));
		$('.constructor__item-header--shaker').text(shakerName);		
		$('.constructor__item-shaker').removeClass('constructor__item-shaker--empty');
		checkStepSum ();		
		$('.constructor__flex-item--shaker').removeClass('visible');		
	});
	$(document).on('click', '.constructor__button--auto', function() {  									
		let len = $(".constructor__taste-item").length;
		let lenS = $(".constructor__shaker-item").length;
		var random;
		let randomImg;
		let randomTaste;
		let currentItm;	
		$('.constructor__item-image').each(function (index, element) { 
			random = Math.floor( Math.random() * len );
			randomImg = $('.constructor__taste-item').eq(random).children('.constructor__taste-image').html();
          	let randomProduct = $('.constructor__taste-item').eq(random).data('product-id');
			randomTaste  = $('.constructor__taste-item').eq(random).children('.constructor__taste-name').html();	
			currentItm = $(element).attr('data-target'); 			
			$('.constructor__item-image[data-target="'+currentItm+'"]').next('.constructor__item-header').text(randomTaste);
			$('.constructor__item-image[data-target="'+currentItm+'"]').html(randomImg);
			$('.constructor__item-image[data-target="'+currentItm+'"]').removeClass('constructor__item-image--empty');
			$('.constructor__item-image[data-target="'+currentItm+'"]').data('product-id',randomProduct);
		});
		var randomS = Math.floor( Math.random() * lenS );
		$('.constructor__shaker-item').removeClass('constructor__shaker-item--selected');
		$('.constructor__shaker-item').eq(randomS).addClass('constructor__shaker-item--selected');
		let randomshaker = $('.constructor__shaker-item').eq(randomS).attr('data-large-img');
		let randomShakerId = $('.constructor__shaker-item').eq(randomS).data('product-id'); 
		let randomshakername = $('.constructor__shaker-item').eq(randomS).children('.constructor__shaker-name').text();		
		$('.constructor__item-shaker img').attr('src', randomshaker);
		$('.constructor__item-shaker').data('product-id', randomShakerId);
		$('.constructor__item-header--shaker').text(randomshakername);
		$('.constructor__item-shaker').removeClass('constructor__item-shaker--empty');
		checkStepSum ();
	});
	
	if (winWidth > 1025) {
		$(document).mouseup(function (e){ 		
			if (
              
              !$('.constructor__taste-list').is(e.target) 
				&& $('.constructor__taste-list').has(e.target).length === 0
            
            ) { 
				$('.constructor__taste-list').removeClass('visible'); 						
			}
		});
      
		$(document).mouseup(function (e){ 		
			if (!$('.constructor__flex-item--shaker').is(e.target) 
				&& $('.constructor__flex-item--shaker').has(e.target).length === 0) { 
				$('.constructor__flex-item--shaker').removeClass('visible'); 						
			}
		});
	}
	
	$(document).on('click', '.constructor__taste-list-close', function() {  									
		$('.constructor__taste-list').removeClass('visible');		
	});
	
	$(document).on('click', '.constructor__shaker-list-close', function() {  									
		$('.constructor__flex-item--shaker').removeClass('visible');		
	});
	
	
	$(document).on('click', '.constructor__item-shaker', function() {  									
		$('.constructor__flex-item--shaker').addClass('visible');	
      if (winWidth > 1025) {				
          $('.constructor__flex-item--shaker').mCustomScrollbar();
		}		
	});
	
	
	
	
	function checkStepSum () {		
		if ($('.constructor__item-header--shaker').text() == "Не нужен" ) 	{
			stepSum = 19996 - ($('.constructor__item-image--empty').length)*4999;
			if (stepSum == 19996 ) {
				$('.constructor__old-price').show();			
				$('.constructor__current-price').text('16 396,72 тг');				
				$('.constructor__old-price').text('19 996');
				$('.constructor__current-price').show();
				$('.constructor__step-sale ').text('-18%');
				$('.constructor__step-sale ').css({"display": "inline-block"});		
				$('.constructor__step-price').hide();
				$('.constructor__button--tocart').prop('disabled', false);				
			}
			else {
				$('.constructor__step-price span').text(stepSum);
			}
		}
		else {
			stepSum = 23508 - ($('.constructor__item-image--empty').length)*4999 - $('.constructor__item-shaker--empty').length*3512;
			if (stepSum == 23508 ) {				
				$('.constructor__old-price').show();			
				$('.constructor__current-price').text('19276,56 тг');	
				$('.constructor__current-price').show();	
				$('.constructor__old-price').text('23508');
				$('.constructor__old-price').show();
				$('.constructor__step-sale ').text('-18%');
				$('.constructor__step-sale ').css({"display": "inline-block"});					
				$('.constructor__step-price').hide();
				$('.constructor__button--tocart').prop('disabled', false);				
			}
			else {
				$('.constructor__step-price span').text(stepSum);
			}
		}
	}
	
});
