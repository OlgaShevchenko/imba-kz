window.dataLayer = window.dataLayer || [];
const gTracker = {

    makeProduct: (id,variant_id,name,price,quantity)=>{
        let product = {
            'item_name': name,
            'item_id': id,
            'price': price,
            'item_brand': 'Imba Energy',
            'item_variant': variant_id,
            'quantity': quantity

        };
        return product;
    }
    ,
    simpleEvent: (name,items)=>{
        return {
            'event': name,
            'ecommerce': {
                "items": items
            }
        }
    }
    ,
    viewItemList: items=>gTracker.simpleEvent('view_item_list', items),
    clickProductOnPage: items=>gTracker.simpleEvent('select_item', items),
    viewProductPage: items=>gTracker.simpleEvent('view_item', items),
    addToCart: items=>gTracker.simpleEvent('add_to_cart', items),
    removeFromCart: items=>gTracker.simpleEvent('remove_from_cart', items),
    beginCheckout: items=>gTracker.simpleEvent('begin_checkout', items),
    viewCart: items=>gTracker.simpleEvent('view_cart', items),
    addShipping: (delivery_code,value,items)=>{
        return {
            'event': 'add_shipping_info',
            'ecommerce': {
                'shipping_tier': delivery_code,
                'value': value,
                'currency': 'UAH',
                'items': items
            }
        };
    }
    ,
    addPayments: (payment_code,value,items)=>{
        return {
            'event': 'add_payment_info',
            'ecommerce': {
                'payment_type': payment_code,
                'value': value,
                'currency': 'UAH',
                'items': items
            }
        };
    }
    ,
    purchase: (transaction_id,value,coupon,shipping_price,items)=>{
        return {
            'event': 'purchase',
            'ecommerce': {
                'transaction_id': transaction_id,
                'value': value,
                'currency': 'тг',
                'tax': 0,
                'shipping': shipping_price,
                'coupon': coupon,
                'items': items
            }
        }
    }
}

window.addEventListener('load', (event) => {
  let u = new URL(window.location.href);
  if(u.pathname === "/cart_items") {
  	let products = Cart.order.order_lines.map( order_line => gTracker.makeProduct( order_line.product_id, order_line.variant_id,order_line.title,order_line.sale_price,order_line.quantity));
    let googlEvent = gTracker.viewCart(products)
    window.dataLayer.push(googlEvent);
    console.log('gtviewed', googlEvent);
  } else if(u.pathname === "/new_order") {
    let products = Cart.order.order_lines.map( order_line => gTracker.makeProduct( order_line.product_id, order_line.variant_id,order_line.title,order_line.sale_price,order_line.quantity));
    let googlEvent = gTracker.beginCheckout(products)
    window.dataLayer.push(googlEvent);
    console.log('gtCheckouting', googlEvent);
    localStorage.setItem('ua.imba.shop/new.order', new Date())
  } else if(u.pathname.indexOf('/orders/') === 0 && u.searchParams.get('success_payment') == "true" && localStorage.getItem('ua.imba.shop/new.order') !== null) {
    let products = currentOrder.order_lines.map( order_line => gTracker.makeProduct( order_line.product_id, order_line.variant_id,order_line.title,order_line.sale_price,order_line.quantity));
    let googlEvent = gTracker.purchase(currentOrder.client_transaction_id,currentOrder.total_price,"",currentOrder.delivery_price, products)
    window.dataLayer.push(googlEvent);
    localStorage.removeItem('ua.imba.shop/new.order')
    console.log('gtpurchased', googlEvent);
  }
  
  
  /** ADD TO CART **/
  EventBus.subscribe('add_items:insales:cart', function (data) {
	  
  let products = data.action.currentItems.map( order_line => gTracker.makeProduct( order_line.product_id, order_line.variant_id,order_line.title,order_line.sale_price,order_line.quantity));
      let googlEvent = gTracker.addToCart(products)
      window.dataLayer.push(googlEvent);
      console.log('gtadded', googlEvent);
	});
  /** REMOVE FROM CART **/
    EventBus.subscribe('delete_items:insales:cart', function (data) {
  let products = data.action.currentItems.map( order_line => gTracker.makeProduct( order_line.product_id, order_line.variant_id,order_line.title,order_line.sale_price,order_line.quantity));
      let googlEvent = gTracker.removeFromCart(products)
      window.dataLayer.push(googlEvent);
      console.log('gtremoved', googlEvent);
	});
  	
  	/** SELECT SHIPPING AND PAYMENTS **/
  	$(document).on('selected:insales:checkout:delivery', function(e) { 
      let order = e.originalEvent.detail;
      console.log(order);
      let delivery_code = order.delivery.id;
      switch(delivery_code) {
        case 2797787: delivery_code="novaposhta_office";break;
        case 2860026: delivery_code="novaposhta_courier";break;
      }
      
      let payment_code = order.payment.id;
      switch(payment_code) {
        case 1285048: payment_code="liqpay";break;
      }
      
      let products = order.order_lines.map( order_line => gTracker.makeProduct( order_line.product_id, order_line.variant_id,order_line.title,order_line.sale_price,order_line.quantity));
      let googlEvent = gTracker.addShipping(delivery_code,order.delivery.price, products)
      window.dataLayer.push(googlEvent);
      console.log('gtshipping', googlEvent);
      
        
      googlEvent = gTracker.addPayments(payment_code,order.delivery.price + order.items_price, products)
      window.dataLayer.push(googlEvent);
      console.log('gtpayments', googlEvent);
      
    })
});


























