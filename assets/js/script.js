const freeSumVal = 24990;
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
lozad('.lozad', {
    loaded: function(el) {
        // Custom implementation on a loaded element
        el.classList.add('loaded');
    }
});

let updateRadioButtons = () => {}


function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options
  };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

let refreshCartCountLabel = () => {

   let items = Cart.order.getItems();
      let count = Object.keys(items).filter( item => (item != "242939132" && item != "282979517")).reduce( (cnt, item_id) => cnt + items[item_id],0);
      $('.incart-quantity').text(count);
  if(count == 0){
  setTimeout( () => {refreshCartCountLabel()}, 200);
  }
}

$(document).ready(function() {
    let user_url = new URL(window.location.href)
    if(user_url.searchParams.get('invited_from')){
      setCookie('invited_from',user_url.searchParams.get('invited_from'), {secure: true, 'max-age': 9419200});
    } else if(window.location.pathname.indexOf('/orders/')  === 0) {
      deleteCookie('invited_from');
    }

  if(window.location.pathname.substr(0,9) == "/product/" || window.location.pathname.substr(0,12) == "/collection/" ){
        let u = new URL(window.location.href)
        if(u.searchParams.get('coupon')){
            Cart.setCoupon({coupon:u.searchParams.get('coupon')})
        } else {
            //console.warn('coupon error',u);
        }
  
    }


    EventBus.subscribe('add_items:insales:cart', function(data) {
gtag('event', 'conversion', {
      'send_to': 'AW-768923614/OysnCJDM3pcBEN6v0-4C',
      'value': 1.0,
      'currency': 'UAH',
      'aw_remarketing_only': true
  });
  


       // $('.nav-item__num').text(data.items_count);
    });

	 $(document).on('click', '[data-item-delete]', e => {
		  $(e.target).parent().find('cart-block__item').hide();
	 });
	 
	 

	if (!sessionStorage.getItem('timer')) {
		if(window.location.pathname.substr(0,10) == "/new_order" || window.location.pathname.substr(0,8) == "/orders/" || window.location.pathname.substr(0,15) == "/client_account" ){}
		else {
			setTimeout(function() {
			$('.timer-block').show();
			
			var top_offset = $('.menu-container').height() + $('.timer-block').height() + 'px';			
			$('.menu-block').animate({'top': $('.timer-block').height()});   
			$('.page_margin').animate({"margin-top": top_offset});
			if($(window).width() <  1025) {
				$('.menu__desktop-list').animate({"top":  $('.menu-container').height() + $('.timer-block').height() + 1});
				$('.menu__desktop-list').css({'height':  'calc(100vh - ' + ($('.menu-container').height() + $('.timer-block').height())  + 'px)'});				
			}
			else {
				$('.menu__desktop-submenu').css({"top":  $('.menu-container').height() + $('.timer-block').height() + 1 + 'px'});
			}
			}, 1000);
		}
	}	
	 
	 
	$('.timer-block__close').click(function() {	
		$('.timer-block').hide();	
		$('.menu-block').css({'top': 0}); 		
		if($(window).width() >  1025) {	
			$('.page_margin').css({"margin-top": "70px"});
			$('.menu__desktop-submenu').css({"top": "71px"});	
		}
		else{	
			$('.page_margin').css({"margin-top": "63px"});
			$('.menu__desktop-list').css({"top": "64px"});
			$('.menu__desktop-list').css({'height':   'calc(100vh - 63px )'});
		}
		sessionStorage.setItem('timer', 'hidden');	 	
	});
	 
	
	 let submenuOffset = $('.menu__desktop-list-item--shop').offset().left + 30;
	 $('.menu__desktop-sublist').css({'padding-left':submenuOffset});
	 
	 
	 $(".menu__search-trigger").on("click", function(){
		 $(this).hide();
		 $('.search-pane').show();
		 $('body').append('<div class="light-blur"></div>');	
	 });
	 
	  if($('.search-pane__input').val() ){				
			$('.search-pane__close').show();
			$('.search-pane__submit').show();
		 }
	 
	 $(document).on('input', '.search-pane__input', e => {   
		 if($('.search-pane__input').val() ){				
			$('.search-pane__close').show();
			$('.search-pane__submit').show();
		 }
		 else {
			$('.search-pane__close').hide();
			$('.search-pane__submit').hide();
		 }
	 });	
	 
	 $(".search-pane__close, .search-pane__back").on("click", function(){
		 $(".menu__search-trigger").show();
		 $('.search-pane').hide();	
		 $('.light-blur').remove();	
	 });
	 
	 $(document).on("click",".light-blur",function() {
         $('.search-pane').hide();	
		 $('.light-blur').remove();
		 $(".menu__search-trigger").show();
    });
	 
	  
	 $(".mob-menu-btn").on("click", function(){
		  $(".mob-menu-btn").toggleClass('opened');
		  $(".menu__desktop-list").slideToggle();
		  $("body").toggleClass('body-overflow');
	 });
	 refreshCartCountLabel();
    EventBus.subscribe("always:insales:cart", data => {
     refreshCartCountLabel();
  })
  var curDate = new Date();
  var curHours = curDate.getUTCHours()+3;
  if (curHours < 10 || curHours > 19 ) {
	  $('.footer__status-icon').addClass('offline');
	  $('.status').html('офлайн');
  }
  
  
 
  
   //Поиск
 
 var $search = $('.search-pane__input');
		if($search.length > 0){
			$search.autocomplete({
				serviceUrl: '/search.json',
				paramName: 'q',
				params: {
					page_size: 7,
					lang: Site.locale,
					hide_items_out_of_stock: true,
				},
				dataType: 'json',				
				preserveInput: true,
				deferRequestBy: 300,
				noCache: true,
				appendTo: '.js-search-results',
				minChars: 4,
				showNoSuggestionNotice: true,			
				transformResult: function(response){
					return {
						suggestions: $.map(response, function(dataItem){
							return {
								value: dataItem.title,
								data: {
									url: dataItem.url+((Site.locale_not_default)?'?lang='+Site.locale+'':''),
									price: dataItem.variants[0].price,
									image: dataItem.first_image.thumb_url
								}
							};
						})
					};
				},
				formatResult: function(suggestions, currentValue){
					var title = suggestions.value.replace(new RegExp('(?![^&;]+;)(?!<[^<>]*)('+$search.autocomplete().currentValue+')(?![^<>]*>)(?![^&;]+;)','gi'),'<strong>$1</strong>');
					return '<a class="autocomplete-suggestion-item" href="'+suggestions.data.url+'"><span class="autocomplete-suggestion-thumb"><img src="'+suggestions.data.image+'" alt="" /></span><span class="autocomplete-suggestion-text"><span class="autocomplete-suggestion-title">'+title+'</span> <span class="autocomplete-suggestion-price">'+Shop.money.format(suggestions.data.price)+'</span></span></a>';
				},				
				
			});
		}

});


function templateLodashRender(content, templateId){
	var templateContent = $('[data-template-id="'+templateId+'"]').html();
	var renderContent = _.template(templateContent);
	return renderContent(content);
}








;
