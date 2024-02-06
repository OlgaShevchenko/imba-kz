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

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

$(document).ready(function() {
	  
	let user_url = new URL(window.location.href)
    if(user_url.searchParams.get('invited_from')){
      setCookie('invited_from',user_url.searchParams.get('invited_from'), {secure: true, 'max-age': 9419200});
    } else if(window.location.pathname.indexOf('/orders/')  === 0) { 
      deleteCookie('invited_from');
    } else if(window.location.pathname.indexOf('/new_order')  === 0){
    	$('#order_field_12956599').val(getCookie('invited_from'));
	}
});
