
/****************************** CART ******************************/

  console.log('cs9');
$(document).ready(function(){
  $(document).on('click', '.cart-block__remove-coupon', e => {
        e.preventDefault();
        Cart.remove({coupon: ' '});
    	$('.cart-block__remove-coupon2').hide();		
		$('.cart-block__input-block').val("");
		$('.cart-block__input-block').removeClass('cart-block__input-block--short');
    });

  $(document).on('keyup', '.cart-block__input-block', e => {
    if (e.keyCode === 13) {
        $('.cart-block__send-button').click();
    }
});


      $(document).on('click', '.cart-block__send-button', e => {
        let coupon_code = $('.cart-block__input-block').val();
        Cart.setCoupon({ coupon: coupon_code })
        return false;
    })

  $(document).on('click','[data-item-delete]', e => {
  	$(e.currentTarget).parent().parent().fadeOut();
  })

    EventBus.subscribe('update_items:insales:cart', function(data) {
        cartUpdate(data);
    });

  Cart.forceUpdate();
   if($('.footer').offset().top < $(window).height()) {
	   $('.cart-block__order-button').addClass('relative');
   }
});

Template.load(`<div class="cart-block__item" data-product-id="<%= product_id %>" data-item-id="<%= id %>" data-tpl="true">
	   <div class="cart-block__item-image">
	       <a href="<%= url %>"><img title="<%= name %>" alt="<%= name %>" src="<%= image %>"></a>
       </div>
	   <div class="cart-block__item-content">
		   <div class="cart-block__item-name"><a href="<%= url %>"><%= name %></a></div>
		   <div class="cart-block__item-quantity counter js-variant-counter" data-quantity="">
			   <button type="button" data-quantity-change="-1" class="cart-block__item-button is-count-down cart-block__minus">-</button>
			   <input type="text" value="<%= qty %>" name="cart[quantity][<%= id %>]" class="counter-input cart-block__item-input" readonly="true">
			   <button type="button" data-quantity-change="1" class="cart-block__item-button is-count-up cart-block__plus" >+</button>
		   </div>
		   <div class="cart-block__item-price"><%= total_price %></div>
		   <button class="cart-block__item-remove is-item-delete is-transparent" data-item-delete="<%= id %>"></button>
	   </div>
</div>`, 'cart-item');
Template.load(`<div class="cart-block__item" data-product-id="<%= product_id %>" data-item-id="<%= id %>" data-tpl="true">
	   <div class="cart-block__item-image">
	       <a href="<%= url %>"><img title="<%= name %>" alt="<%= name %>" src="<%= image %>"></a>
       </div>
	   <div class="cart-block__item-content">
		   <div class="cart-block__item-name"><a href="<%= url %>"><%= name %></a></div>
		   <div class="cart-block__item-quantity counter js-variant-counter" data-quantity="">
			   <button type="button" data-quantity-change="-1" class="cart-block__item-button is-count-down cart-block__minus">-</button>
			   <input type="text" value="<%= qty %>" name="cart[quantity][<%= id %>]" class="counter-input cart-block__item-input" readonly="true">
			   <button type="button" data-quantity-change="1" class="cart-block__item-button is-count-up cart-block__plus" >+</button>
		   </div>
		   <div class="cart-block__item-price cart-block__item-price--red">
		   <%= total_price %>
		    <span class="cart-block__item-price--old">&nbsp;<%= old_price %></span>
		   </div>
		   <button class="cart-block__item-remove is-item-delete is-transparent" data-item-delete="<%= id %>"></button>
	   </div>
</div>`, 'cart-item2');

Template.load(`<div class="cart-block__item cart-block__item--free" data-product-id="<%= product_id %>" data-item-id="<%= id %>">
		<div class="cart-block__item-image">
            <img src="<%= image %>" alt="<%= name %>">
        </div>
		<div class="cart-block__item-content">
			<div class="cart-block__item-name cart-block__item-name--free"><%= name %></div>	
			<div class="cart-block__item-quantity cart-block__item-quantity--hidden"></div>			
			<div class="cart-block__item-price cart-block__free">Бесплатно</div>
			<button class="cart-block__item-remove cart-block__item-remove--hidden"></button>
			
		</div>	
	</div>`,'cart-gift');

Template.load(`<div class="cart-block__sum-block">
							<div class="cart-block__sum-line2">
								<div class="cart-block__sum-header">Итог:</div>
								<div class="cart-block__sum">
								<% if (amount2 > 0 ) { %>
								<span class="red"><%= amount %></span>
								<span class="old"><%= amount2 %></span> 
								<% }else{ %>
								<%= amount %>
								<% } %>
								</div>
							</div>							
						<% if (amount2 > 0 ) { %>
						<div class="economy-text">Вы экономите: <%= raznitsa %></div>
						<% } %>
						</div>
						`,'cart-total');

Template.load(`<div class="cart-block__sum-block">
							<div class="cart-block__sum-line1">
								<div class="cart-block__promo-text"><%= discount_name %></div>
								<div class="cart-block__sum-discount"><%= discount_amount %> </div>
							</div>
							<div class="cart-block__sum-line2">
								<div class="cart-block__sum-header">Итог:</div>
								<div class="cart-block__sum">
								<% if (amount2 > 0 ) { %>
								<span class="red"><%= amount %>&nbsp;</span>
								<span class="old">&nbsp;<%= amount2 %></span> 
								<% }else{ %>
								<%= amount %>
								<% } %>
								</div>
							</div>							
						<% if (amount2 > 0 ) { %>
						<div class="economy-text">Вы экономите: <%= raznitsa %>&nbsp;тг.</div>
						<% } %>						
						</div>`,'cart-promo-total');
						
Template.load(`Бесплатная доставка <% if (res_sum < freeSumVal ) { %> от 24 990  тг. <% } %>`,'delivery');						



let cartUpdate = (cart_data) => {

    console.log('new cu1', cart_data);
    $('.nav-item__num').text(cart_data.items_count)
    if(
        cart_data.order_lines.length === 0 && //козина пуста
        window.location.href.replace(window.location.origin,'').indexOf('/cart_items') === 0 && //текущая страница -- редактирование корзины
        (document.querySelector('h1') === null || document.querySelector('h1').innerText !== "Ваша корзина пуста") // нет текста
    ){
        window.location.reload();
    }
	let nsr = cart_data.total_price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	$('.cart-block__sum').html(nsr + "&nbsp;тг.");



  	let couponVal = cart_data.coupon;

    if(typeof couponVal == "undefined") {
    	 $('.cart-block__error-text').text("");
    }
  else {
  	if (!cart_data.coupon.valid) {
      $('.cart-block__error-text').text(cart_data.coupon.error);
  		 $('.cart-block__remove-coupon2').show();
		 $('.cart-block__send-button').hide();
    }
    else {
    	$('.cart-block__error-text').text("");
      	$('.cart-block__remove-coupon2').show();
		$('.cart-block__send-button').hide();
    }
  }

  	let cart_items_html = "";
	let fullval = 0;	
    cart_data.order_lines.forEach(el => {
        let i = {
            id: el.id,
            product_id: el.product_id,
			url:  el.product_url,
            name: el.title,
            image: el.first_image.medium_url,
            qty: el.quantity,
			old_price: (el.product?el.product.old_price*el.quantity:el.id).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
            total_price: el.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),			
        };
      	if(el.total_price) {	
			if (el.product.old_price) {
        	cart_items_html += Template.render(i, 'cart-item2' );	
			fullval = 	fullval + (el.product.old_price*el.quantity);
			}
			else {
				cart_items_html += Template.render(i, 'cart-item' );
			}
        } else {
        	cart_items_html += Template.render(i, 'cart-gift' );
        }
    });
  	$('form.shopping-cart .cart__content').html(cart_items_html);
  	if(cart_data.discounts.length === 0){
  		let d = {
			amount: cart_data.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
			amount2: fullval,
			raznitsa: fullval - cart_data.total_price,
		};
  		$('.cart-block__sum-block').html(Template.render(d,'cart-total'));
    } else {
      	let cart_discount = {
        	amount:cart_data.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),          
          	discount_name: cart_data.discounts[0].description,
          	discount_amount:cart_data.discounts[0].amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
          //remove button style:display =
          	btn_remove_style_display: (!~["combosale1","combosale2"].indexOf(cart_data.discounts[0].description)) ? "inline-block" : "none",
			amount2: fullval,
			raznitsa: fullval - cart_data.total_price,
        }
    	$('.cart-block__sum-block').html(Template.render(cart_discount,'cart-promo-total'));

    }
	let free_delivery = {
		res_sum: cart_data.total_price		
	}
	$('.cart__delivery').html(Template.render(free_delivery, 'delivery'));
  	InSalesUI.bindUpdateCart()

}

	

$(document).on('input', '.cart-block__input-block', e => {   
	if ($('.cart-block__input-block').val() ){				
		$('.cart-block__send-button').show();
		$('.cart-block__input-block').addClass('cart-block__input-block--short');
		$('.cart-block__remove-coupon2').hide();
	}
	else {		
		$('.cart-block__send-button').hide();
		$('.cart-block__input-block').removeClass('cart-block__input-block--short');
	} 
});

$(document).scroll(function() {	
var offsetFooter = $('.footer').offset().top;
	var scrolls = $(window).scrollTop() + $(window).height();    		
	if (scrolls > offsetFooter ) {
		$('.cart-block__order-button').addClass('relative');		
	}
	else {
		$('.cart-block__order-button').removeClass('relative');		
	}	
	
});
