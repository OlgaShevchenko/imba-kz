/****************************** CHECKOUT ******************************/


$(document).ready(function(){
    setTimeout(function() {
        $('#order_field_11041985').val($('[id^=tariff_]:checked').parent().parent().find('.co-delivery_method-title').text());
        $('.delivery_variants').before(`<div id="payment-method-selector" style="display: none;">
<div class="checkout-block__pane-subheader">Способ оплаты<span>*</span></div>						
						
						<div class="checkout-block__radio">
							<input type="radio" class="radio" name="payment-type-radio" value="2"  name="payment-method" id="payment-method2"  />
							<label for="payment-method2">
								<span>Оплата онлайн</span>															
							</label>							
						</div>
						</div>
						<div class="checkout-block__pane-subheader">Способ доставки <span>*</span></div>
						`);
        $('#payment-method-selector').show();
        $(document).change('[name="payment-type-radio"]', () => {
            updateRadioButtons()
        })
        $('#payment-method2').prop('checked', true)
        updateRadioButtons()
        setInterval(function() { updateRadioButtons() }, 500);
    }, 1900)
	
	$('.co-input--consent_to_personal_data .co-toggable_field-input input').prop('checked', true);
	$('.co-input--subscribe .co-toggable_field-input input').prop('checked', true);

});
var offset = $('#create_order').offset().top;
$(document).scroll(function() {
	var scrolls = $(window).scrollTop() + $(window).height();
    
	
    if (scrolls < offset ) {
		$('#create_order').addClass('centered');
	}
	else {
		$('#create_order').removeClass('centered');
	}
});

let myFrame = (query, url_part) => {
    $('.map-popup').show();
    $('.blur').show();
    $('.map-popup iframe').attr("src", `//insales.imbapower.club/delivery/map?query=${query}${url_part}`);
}

$('[id^=tariff_]').on('click',e=>{
    $('#order_field_11041985').val($('[id^=tariff_]:checked').parent().parent().find('.co-delivery_method-title').text());
    console.log($('[id^=tariff_]:checked').parent().parent().find('.co-delivery_method-title').text())
});

/** Imba map**/
let delivery_pvz = ["tariff_2","tariff_4"];
let address_input = document.getElementById('shipping_address_address');

let isPvzDelivery = tariff => {
    return delivery_pvz.indexOf(tariff) !== -1;
}

let showMap = () => {
    $(address_input).blur();
    let prepaid = $('[id^=tariff_]:checked').attr('id') == "tariff_2" ? "&prepaid=1&cost=" + Cart.order.items_price  : "";
    let query = $('#shipping_address_full_locality_name').val();
    myFrame(query, prepaid);
}
let toggleAddress = tariff => {
    if(tariff === undefined) return;
    if(isPvzDelivery(tariff)){
        address_input.addEventListener('click', showMap, false);
    } else {
        address_input.removeEventListener('click', showMap, false);
    }
}

$(document).on('updated:insales:checkout:delivery', function(e) {
    let tariff = $('[id^=tariff_]:checked').attr('id');
    $('#order_field_11041985').val($('[id^=tariff_]:checked').parent().parent().find('.co-delivery_method-title').text());
    $('label[for="tariff_4"] .co-input-description:last').text("Выбрать ПВЗ на карте").addClass('select-pvz')
    $('label[for="tariff_2"] .co-input-description:last').text("Выбрать ПВЗ на карте").addClass('select-pvz')
    toggleAddress(tariff);
})


$(document).on('click','.select-pvz', function(e){
    let prepaid = $(e.target).parent().parent().attr('for') == "tariff_2" ? "&prepaid=1&cost=" + Cart.order.items_price  : "";
    let query = $('#shipping_address_full_locality_name').val();
    //$('body').append(`<iframe style="position: fixed;top: 100px;left: 10vw;width: 80vw;height: 75vh;" src="http://insales.imbapower.club/delivery/map?query=${query}${prepaid}"></iframe>`);
    myFrame(query, prepaid);
})


var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
    if(e.origin == "https://insales.imbapower.club"){
        console.log(e.data);
        $('[name="shipping_address[full_locality_name]"]').val(e.data.city)
        $('[name="shipping_address[zip]"]').val(e.data.address.split(',').shift())
        $('[name="shipping_address[address]"]').val('Отделение #' + e.data.code + ", " +e.data.address)
        $('[name="order[delivery_price]"]').val(e.data.cost)
        $('#delivery_price').text(`+ ${e.data.cost} ₽`)
        $("#total_price").text((Cart.order.total_price + e.data.cost ) + " руб")
        $('.map-popup').hide();
        $('.blur').hide();
    }
},false);
