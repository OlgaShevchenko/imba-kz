let zipContainer = '.constructor__list-container';
let shakerContainer = '.constructor__shakers-list';
let emptyShakerImg = document.querySelector('#emptyShakerSrc').value;

let zipTemplate = (id,img,name)=>{
    return `<div class="constructor__taste-item" data-product-id="${id}">
			<div class="constructor__taste-image"><img src="${img}" alt=""/></div>
			<div class="constructor__taste-name">${name}</div>
		</div>`;
}

let shakerTemplate = (id,img,name)=>{
    return `<div class="constructor__shaker-item"data-product-id="${id}"  data-large-img="${img}">
			<img  src="${img}"  class="constructor__shaker-img-big" alt=""/>
			<div class="constructor__shaker-name">${name}</div> 
		</div>`;
}

let constructorPropertyId = 28564203;

let filterProducts = (products) => {
	return products.filter( product => {
        let property = product.characteristics.filter(characteristic => characteristic.property_id == constructorPropertyId).pop();
        return property && product.available;
    }).map(product => {
        let property = product.characteristics.filter(characteristic => characteristic.property_id == constructorPropertyId).pop();
        return {
            id:product.variants[0].id,
            name: product.title,
            image: property.title
        }
    });
}

let getZips = async()=>{
    return new Promise(resolve=>{
        $.get('/search.json', {q: 'дойпак'}, function(_zips) {
            resolve(filterProducts(_zips));
        });
    })
}
let getShakers = async()=>{
    return new Promise(resolve=>{
        $.get('/search.json', {
            q: 'шейкер'
        }, function(_shakers) {
            resolve(filterProducts(_shakers));
        });
    }
    )
}
let zip_orders = ["IMBA Лесные ягоды",
"IMBA  Яблоко-киви",
"IMBA Арбуз-Дыня",
"IMBA Груша",
"IMBA Манго-Маракуйя",
"IMBA Тропик",
"IMBA Малина",
"IMBA Вишня",
"IMBA Мохито",
"IMBA Клюква",
"IMBA Апельсин-Корица",
"IMBA Цитрусовый микс"];

let setProducts = async()=>{
    let zips = await getZips();
    let shakers = await getShakers();
  	
    let zipHtml = zips.sort(function(a, b){
                          return zip_orders.indexOf(a.name) - zip_orders.indexOf(b.name)
                      }).map(zip => zipTemplate(zip.id, zip.image, zip.name)).join("");
    document.querySelector(zipContainer).innerHTML = zipHtml;
    
  	let shakersHtml = shakers.map(shaker => shakerTemplate(shaker.id, shaker.image, shaker.name)).join("");
    shakersHtml += shakerTemplate("",emptyShakerImg,"Не нужен");
    document.querySelector(shakerContainer).innerHTML = shakersHtml;
}

setProducts();

let added = false;
let buildToCart = async (event) => {
  let cart = {};
  	document.querySelectorAll('.constructor__item-image,.constructor__item-shaker').forEach( (e) => {
    	let productId = $(e).data('product-id');
      if(productId)
      	if(cart[productId]) {
        	cart[productId] += 1;
        } else {
        	cart[productId] = 1;
        }
    })
  if(!added){
    added = true;
    console.log("add items:", cart);
	await Cart.add({items:cart});
    let btn = $('.constructor__button--tocart')
    let dots = 0;
    setInterval(() => { if(++dots >3) dots=1; $(btn).text("Добавляем" + ".".repeat(dots))},300)
  }
  setTimeout(() => {window.location.href = '/cart_items?lang=ru'}, 600);
}

$(document).on('click','.constructor__button--tocart', buildToCart);
