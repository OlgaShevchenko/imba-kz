let makeReview = (author_name, author_email, rating, text) => {
    rating = parseFloat(rating);

  var fd = new FormData();
  if($(event.target).parents('.review-form').find(".review-form__file").val()) {	  
        var files = $(event.target).parents('.review-form').find('.review-form__file').prop('files')[0];		
        fd.append('review[image_attributes][image]', files);		
        fd.append('review[rating]', $('.review-form').find(".rating:checked").val());
        fd.append('review[content]', $(event.target).parents('.review-form').find(".review__textarea").val());
        fd.append('review[author]', $(event.target).parents('.review-form').find(".review__input").val());
        fd.append('review[email]', Math.random().toString(36).substring(2, 15).replace(/[0-9]/g,'').slice(0,3) + (new Date()).getTime() + "@customer.imba.shop");
  } else {
        fd.append('review[rating]', $('.review-form').find(".rating:checked").val());
        fd.append('review[content]', $(event.target).parents('.review-form').find(".review__textarea").val());
        fd.append('review[author]', $(event.target).parents('.review-form').find(".review__input").val());
        fd.append('review[email]', Math.random().toString(36).substring(2, 15).replace(/[0-9]/g,'').slice(0,3) + (new Date()).getTime() + "@customer.imba.shop");
  }




    return new Promise(((resolve, reject) => {
        $.ajax({
            url: window.location.pathname + '/reviews.json',
            data: fd,
      processData: false,
      contentType: false,

            method: "POST",
            success: d => {
                if (typeof d.errors != "undefined") {
                    reject(d.errors); // {author:[],email:[],content:[],rating:[]}
console.log(d.errors);
                } else {
          $('.review__success').css({"display":"block"});
          $('.review-form').css({"display":"none"});
                    resolve()
                }
            }
        });

    }));
};
$(document).ready(function() {
		EventBus.subscribe('update_items:insales:cart', function(data) {
			cartUpdate(data);
		});
		
		let swiperVertical = new Swiper('.product__swiper-vertical .swiper', {
                watchSlidesProgress: true,
                spaceBetween: 10,
                slidesPerView: 4,
                direction: 'vertical',
                watchSlidesProgress: true,
                mousewheel: true,
                navigation: {
                    nextEl: '.product__swiper-vertical-next',
                    prevEl: '.product__swiper-vertical-prev',
                }
            });

        let swiperHorizontal = new Swiper('.product__swiper-horizontal .swiper', {
                watchSlidesProgress: true,
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 1,
                thumbs: {
                    swiper: swiperVertical
                },
                pagination: {
                    el: '.product__swiper-horizontal .swiper-pagination',
                    dynamicBullets: true,
                    clickable: true
                },
                on: {
                    slideNextTransitionStart: function () {
                        let $thumb = swiperVertical.$el.find('.swiper-slide-thumb-active'), $next = $thumb.next();

                        if ($next.length && !$next.hasClass('swiper-slide-visible')) {
                            swiperVertical.slideNext();
                        }
                    },
                    slidePrevTransitionStart: function () {
                        let $thumb = swiperVertical.$el.find('.swiper-slide-thumb-active'), $prev = $thumb.prev();

                        if ($prev.length && !$prev.hasClass('swiper-slide-visible')) {
                            swiperVertical.slidePrev();
                        }
                    }
                },
                breakpoints: {
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1200: {
//                        pagination: {
//                            el: ''
//                        }
                    }
                }
            });

            // изображения и видео товара (плагин magnificPopup)
            $('.product__swiper-horizontal').magnificPopup({
                type:'image',
                delegate: 'a',
                gallery: {
                    enabled:true
                },
                callbacks: {
                    // объеденить видео и изображения в одну карусель
                    elementParse: function (item) {
                        if (item.el[0].classList.contains('product__video-thumb')) {
                            item.type = 'iframe';
                        } else {
                            item.type = 'image';
                        }
                    }
                }
            });
			
			let swiperRelated = new Swiper('.product__related .swiper', {
              maxBackfaceHiddenSlides: 0,
              slidesPerView: 2,
              spaceBetween: 0,
              watchOverflow: true,
              observer: true,
              breakpoints: {
                576: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
              },
              navigation: {
                  nextEl: '.product__related .swiper-button-next',
                  prevEl: '.product__related .swiper-button-prev'
              },
              pagination: {
                  el: '.product__related .swiper-pagination'
              },
              
          });
		  
		$('.product__review-list-image').magnificPopup({
			type:'image',
			gallery: {
				enabled:true
			}
		});
		
		
	
	$('.product__quantity .minus').click(function() {		
        var parent = $(this).parent('.product__quantity');
        var inp = $(parent).find('input');
        var data = inp.val();
		if(data > 1) {
        inp.val(parseInt(data) - 1);
        inp.trigger('change');
		}
    });
	
    $('.product__quantity .plus').click(function() {
        var parent = $(this).parent('.product__quantity');		
        var inp = $(parent).find('input');
        var data = inp.val();	
        inp.val(parseInt(data) + 1);		
        inp.trigger('change');
    });

    $('.product__review-button-show').on('click', function () {
        $(this).remove();

        $('.product__review-list').find('li.d-none').removeClass('d-none');
    });
	
	
	 // прокрутка к отзывам
	   $('.product__rating').on('click', function () {
	       let offsetTop = $('.product__review').offset().top - 90;

	       $('html').animate({scrollTop: offsetTop}, 500);
	   });
	   
	   $('.product__add-review').on('click', function() {
	       $('.product__review').find('.alert-success').remove();

	       let $tabReview = $('.product__review-form');

	       $tabReview.removeClass('d-none');

	       let offsetTop = $tabReview.offset().top - 90;

	       $tabReview.get(0).click();

	       $('html').animate({scrollTop: offsetTop}, 500);

	       return false;
	   });
	   
	    var repl  = $('.list-unstyled li').length;	
		if (repl > 4) {		
			$('.list-unstyled li').addClass('d-none');
			$('.list-unstyled li').each(function() {		
			  $('.list-unstyled').find('li').slice(0, 4).removeClass('d-none');				  
			});	
		}	
		else {
			$('.product__review-button-show').addClass('d-none');
		}

	 

	   // пагинатор на отзывах
	   $('.product__review-list').on('click', '.pagination a', function(e) {
	       e.preventDefault();

	       var link = this.href,
	           $review = $(e.delegateTarget);

	       $review.fadeTo(50, 0, function() {
	           $review.load(link, function() {
	               $review.fadeTo(50, 1);
	           });
	       });
	   });

		$('.review-form__submit').click(function(event) {			
		$('.review__textarea').removeClass('error');
			$('.review-form__input-container').removeClass('err1');
			$('.review-form__input-container').removeClass('err2');
			$('.review__input').removeClass('error');
			if ($('.review__textarea').val() == "") {
				$('.review__textarea').addClass('error');
				$('.review__textarea').parent('.review-form__input-container').addClass('err2');
			}
			if ($('.review__input').val() == "") {
				$('.review__input').addClass('error');
				$('.review__input').parent('.review-form__input-container').addClass('err1');
			}
		makeReview().then( () => console.log('ok')).catch( errors => console.log(errors) );
    });
	
	
	
	
	 $('.product__button-cart').click(function() {	
let curPrice = 0;	 
if($('.product__price span').hasClass('product__price-special')) {				
		var popNewprice = $('.product__price .product__price-special').text();
		var popOldprice = $('.product__price .product__price-base').text();				
		curPrice = Number($('.product__price .product__price-special').text().replace(/\D+/g, ''))*$('.product__quantity .form-control').val();	
		$('.incart-pop__price .new').text(curPrice + ' тг.');	
		$('.incart-pop__price .old').text(Number($('.product__price .product__price-base').text().replace(/\D+/g, ''))*$('.product__quantity .form-control').val() + ' тг.');	
	}
	else {			
		var popCurprice = $('.product__price .product__price-base').text();					
		curPrice = Number($('.product__price .product__price-base').text().replace(/\D+/g, ''))*$('.product__quantity .form-control').val();
		$('.incart-pop__price .current').text(curPrice + ' тг.');		
		
	}	 
	
		  showPopup (curPrice); 
	   });
	   
	   $(".incart-pop__continue-btn, .incart-pop__close").click(function() { 
		$('.incart-pop').hide();
		$('.blur').remove();
	});
	
	$(document).on("click",".blur",function() {
        $('.incart-pop').hide();
		$('.blur').remove();
    });

	$(document).on('click', '[data-pid]', e => {	

        let itms = {};
        itms[$(e.target).data('pid')] = $(e.target).parent().find('input').val();		
        Cart.add({
            items: itms
        });	
			
		var  popTitle = $(e.target).parents('.product-thumb').find('.product-thumb__name').text();		
        var  popImg =  $(e.target).parents('.product-thumb').find('.product-thumb__image .img-fluid').attr('src');				        
		$('.incart-pop__name').text(popTitle);
        $('.incart-pop__img img').attr('src',  popImg);
		let  curPrice = 0;
		if($(e.target).parents('.product-thumb').find('.product-thumb__price-special')) {					
			var popNewprice = $(e.target).parents('.product-thumb').find('.product-thumb__price-special').text();
			var popOldprice = $(e.target).parents('.product-thumb').find('.product-thumb__price-base').text();			
			$('.incart-pop__price .new').text(popNewprice);	
			$('.incart-pop__price .old').text(popOldprice);	
			curPrice = Number($(e.target).parents('.product-thumb').find('.product-thumb__price-special').text().replace(/\D+/g, ''));			
		}
		else {			
			var popCurprice = $(e.target).parents('.product-thumb').find('.product-thumb__price').text();			
			$('.incart-pop__price .current').text(popCurprice);	
			curPrice = Number($(e.target).parents('.product-thumb').find('.product-thumb__price').text().replace(/\D+/g, ''));
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
	 });	



    EventBus.subscribe('update_items:insales:cart', function(data) {
        cartUpdate(data);
    });
	

		  
});		
function showPopup (curPrice ) {	
	let curSum = Number($('.incart-pop__sum').text().replace(/\D+/g, ''));
	if ( (curSum + curPrice) >= freeSumVal){
		$('.incart-pop__delivery-text').html(`Для вас <span>бесплатная</span> доставка!`)
	}
	else {
		$('.incart-pop__delivery-text').html(`Для <span>бесплатной</span> доставки добавьте товары на сумму <span>` + (freeSumVal - curSum - curPrice)  + ` тг.</span>` )
	}
	$('.incart-pop').show();
	$('body').append('<div class="blur"></div>');
}	
let cartUpdate = (cart_data) => {         
	let nsr = cart_data.total_price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");      
	$('.incart-pop__sum').html(nsr);
}		
;
