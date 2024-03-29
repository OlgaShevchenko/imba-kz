(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! alertifyjs - v1.10.0 - Mohammad Younes <Mohammad@alertifyjs.com> (http://alertifyjs.com) */
!function(a){"use strict";function b(a,b){a.className+=" "+b}function c(a,b){for(var c=a.className.split(" "),d=b.split(" "),e=0;e<d.length;e+=1){var f=c.indexOf(d[e]);f>-1&&c.splice(f,1)}a.className=c.join(" ")}function d(){return"rtl"===a.getComputedStyle(document.body).direction}function e(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function f(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function g(a){for(;a.lastChild;)a.removeChild(a.lastChild)}function h(a){if(null===a)return a;var b;if(Array.isArray(a)){b=[];for(var c=0;c<a.length;c+=1)b.push(h(a[c]));return b}if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return b=new RegExp(a.source),b.global=a.global,b.ignoreCase=a.ignoreCase,b.multiline=a.multiline,b.lastIndex=a.lastIndex,b;if("object"==typeof a){b={};for(var d in a)a.hasOwnProperty(d)&&(b[d]=h(a[d]));return b}return a}function i(a,b){var c=a.elements.root;c.parentNode.removeChild(c),delete a.elements,a.settings=h(a.__settings),a.__init=b,delete a.__internal}function j(a,b){return function(){if(arguments.length>0){for(var c=[],d=0;d<arguments.length;d+=1)c.push(arguments[d]);return c.push(a),b.apply(a,c)}return b.apply(a,[null,a])}}function k(a,b){return{index:a,button:b,cancel:!1}}function l(a,b){return"function"==typeof b.get(a)?b.get(a).call(b):void 0}function m(){function a(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function b(a){var b=d[a].dialog;return b&&"function"==typeof b.__init&&b.__init(b),b}function c(b,c,e,f){var g={dialog:null,factory:c};return void 0!==f&&(g.factory=function(){return a(new d[f].factory,new c)}),e||(g.dialog=a(new g.factory,t)),d[b]=g}var d={};return{defaults:o,dialog:function(d,e,f,g){if("function"!=typeof e)return b(d);if(this.hasOwnProperty(d))throw new Error("alertify.dialog: name already exists");var h=c(d,e,f,g);f?this[d]=function(){if(0===arguments.length)return h.dialog;var b=a(new h.factory,t);return b&&"function"==typeof b.__init&&b.__init(b),b.main.apply(b,arguments),b.show.apply(b)}:this[d]=function(){if(h.dialog&&"function"==typeof h.dialog.__init&&h.dialog.__init(h.dialog),0===arguments.length)return h.dialog;var a=h.dialog;return a.main.apply(h.dialog,arguments),a.show.apply(h.dialog)}},closeAll:function(a){for(var b=p.slice(0),c=0;c<b.length;c+=1){var d=b[c];(void 0===a||a!==d)&&d.close()}},setting:function(a,c,d){if("notifier"===a)return u.setting(c,d);var e=b(a);return e?e.setting(c,d):void 0},set:function(a,b,c){return this.setting(a,b,c)},get:function(a,b){return this.setting(a,b)},notify:function(a,b,c,d){return u.create(b,d).push(a,c)},message:function(a,b,c){return u.create(null,c).push(a,b)},success:function(a,b,c){return u.create("success",c).push(a,b)},error:function(a,b,c){return u.create("error",c).push(a,b)},warning:function(a,b,c){return u.create("warning",c).push(a,b)},dismissAll:function(){u.dismissAll()}}}var n={ENTER:13,ESC:27,F1:112,F12:123,LEFT:37,RIGHT:39},o={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,frameless:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:"pulse",notifier:{delay:5,position:"bottom-right",closeButton:!1},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"}},p=[],q=function(){return document.addEventListener?function(a,b,c,d){a.addEventListener(b,c,d===!0)}:document.attachEvent?function(a,b,c){a.attachEvent("on"+b,c)}:void 0}(),r=function(){return document.removeEventListener?function(a,b,c,d){a.removeEventListener(b,c,d===!0)}:document.detachEvent?function(a,b,c){a.detachEvent("on"+b,c)}:void 0}(),s=function(){var a,b,c=!1,d={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(a in d)if(void 0!==document.documentElement.style[a]){b=d[a],c=!0;break}return{type:b,supported:c}}(),t=function(){function m(a){if(!a.__internal){delete a.__init,a.__settings||(a.__settings=h(a.settings)),null===za&&document.body.setAttribute("tabindex","0");var c;"function"==typeof a.setup?(c=a.setup(),c.options=c.options||{},c.focus=c.focus||{}):c={buttons:[],focus:{element:null,select:!1},options:{}},"object"!=typeof a.hooks&&(a.hooks={});var d=[];if(Array.isArray(c.buttons))for(var e=0;e<c.buttons.length;e+=1){var f=c.buttons[e],g={};for(var i in f)f.hasOwnProperty(i)&&(g[i]=f[i]);d.push(g)}var k=a.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:d,focus:c.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclosing:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},l={};l.root=document.createElement("div"),l.root.className=Ca.base+" "+Ca.hidden+" ",l.root.innerHTML=Ba.dimmer+Ba.modal,l.dimmer=l.root.firstChild,l.modal=l.root.lastChild,l.modal.innerHTML=Ba.dialog,l.dialog=l.modal.firstChild,l.dialog.innerHTML=Ba.reset+Ba.commands+Ba.header+Ba.body+Ba.footer+Ba.resizeHandle+Ba.reset,l.reset=[],l.reset.push(l.dialog.firstChild),l.reset.push(l.dialog.lastChild),l.commands={},l.commands.container=l.reset[0].nextSibling,l.commands.pin=l.commands.container.firstChild,l.commands.maximize=l.commands.pin.nextSibling,l.commands.close=l.commands.maximize.nextSibling,l.header=l.commands.container.nextSibling,l.body=l.header.nextSibling,l.body.innerHTML=Ba.content,l.content=l.body.firstChild,l.footer=l.body.nextSibling,l.footer.innerHTML=Ba.buttons.auxiliary+Ba.buttons.primary,l.resizeHandle=l.footer.nextSibling,l.buttons={},l.buttons.auxiliary=l.footer.firstChild,l.buttons.primary=l.buttons.auxiliary.nextSibling,l.buttons.primary.innerHTML=Ba.button,l.buttonTemplate=l.buttons.primary.firstChild,l.buttons.primary.removeChild(l.buttonTemplate);for(var m=0;m<a.__internal.buttons.length;m+=1){var n=a.__internal.buttons[m];ya.indexOf(n.key)<0&&ya.push(n.key),n.element=l.buttonTemplate.cloneNode(),n.element.innerHTML=n.text,"string"==typeof n.className&&""!==n.className&&b(n.element,n.className);for(var o in n.attrs)"className"!==o&&n.attrs.hasOwnProperty(o)&&n.element.setAttribute(o,n.attrs[o]);"auxiliary"===n.scope?l.buttons.auxiliary.appendChild(n.element):l.buttons.primary.appendChild(n.element)}a.elements=l,k.resetHandler=j(a,X),k.beginMoveHandler=j(a,aa),k.beginResizeHandler=j(a,ga),k.bringToFrontHandler=j(a,B),k.modalClickHandler=j(a,R),k.buttonsClickHandler=j(a,T),k.commandsClickHandler=j(a,F),k.transitionInHandler=j(a,Y),k.transitionOutHandler=j(a,Z);for(var p in k.options)void 0!==c.options[p]?a.set(p,c.options[p]):v.defaults.hasOwnProperty(p)?a.set(p,v.defaults[p]):"title"===p&&a.set(p,v.defaults.glossary[p]);"function"==typeof a.build&&a.build()}document.body.appendChild(a.elements.root)}function o(){wa=f(),xa=e()}function t(){a.scrollTo(wa,xa)}function u(){for(var a=0,d=0;d<p.length;d+=1){var e=p[d];(e.isModal()||e.isMaximized())&&(a+=1)}0===a&&document.body.className.indexOf(Ca.noOverflow)>=0?(c(document.body,Ca.noOverflow),w(!1)):a>0&&document.body.className.indexOf(Ca.noOverflow)<0&&(w(!0),b(document.body,Ca.noOverflow))}function w(d){v.defaults.preventBodyShift&&document.documentElement.scrollHeight>document.documentElement.clientHeight&&(d?(Ea=xa,Da=a.getComputedStyle(document.body).top,b(document.body,Ca.fixed),document.body.style.top=-xa+"px"):(xa=Ea,document.body.style.top=Da,c(document.body,Ca.fixed),t()))}function x(a,d,e){"string"==typeof e&&c(a.elements.root,Ca.prefix+e),b(a.elements.root,Ca.prefix+d),za=a.elements.root.offsetWidth}function y(a){a.get("modal")?(c(a.elements.root,Ca.modeless),a.isOpen()&&(pa(a),N(a),u())):(b(a.elements.root,Ca.modeless),a.isOpen()&&(oa(a),N(a),u()))}function z(a){a.get("basic")?b(a.elements.root,Ca.basic):c(a.elements.root,Ca.basic)}function A(a){a.get("frameless")?b(a.elements.root,Ca.frameless):c(a.elements.root,Ca.frameless)}function B(a,b){for(var c=p.indexOf(b),d=c+1;d<p.length;d+=1)if(p[d].isModal())return;return document.body.lastChild!==b.elements.root&&(document.body.appendChild(b.elements.root),p.splice(p.indexOf(b),1),p.push(b),W(b)),!1}function C(a,d,e,f){switch(d){case"title":a.setHeader(f);break;case"modal":y(a);break;case"basic":z(a);break;case"frameless":A(a);break;case"pinned":O(a);break;case"closable":Q(a);break;case"maximizable":P(a);break;case"pinnable":K(a);break;case"movable":ea(a);break;case"resizable":ka(a);break;case"transition":x(a,f,e);break;case"padding":f?c(a.elements.root,Ca.noPadding):a.elements.root.className.indexOf(Ca.noPadding)<0&&b(a.elements.root,Ca.noPadding);break;case"overflow":f?c(a.elements.root,Ca.noOverflow):a.elements.root.className.indexOf(Ca.noOverflow)<0&&b(a.elements.root,Ca.noOverflow);break;case"transition":x(a,f,e)}"function"==typeof a.hooks.onupdate&&a.hooks.onupdate.call(a,d,e,f)}function D(a,b,c,d,e){var f={op:void 0,items:[]};if("undefined"==typeof e&&"string"==typeof d)f.op="get",b.hasOwnProperty(d)?(f.found=!0,f.value=b[d]):(f.found=!1,f.value=void 0);else{var g;if(f.op="set","object"==typeof d){var h=d;for(var i in h)b.hasOwnProperty(i)?(b[i]!==h[i]&&(g=b[i],b[i]=h[i],c.call(a,i,g,h[i])),f.items.push({key:i,value:h[i],found:!0})):f.items.push({key:i,value:h[i],found:!1})}else{if("string"!=typeof d)throw new Error("args must be a string or object");b.hasOwnProperty(d)?(b[d]!==e&&(g=b[d],b[d]=e,c.call(a,d,g,e)),f.items.push({key:d,value:e,found:!0})):f.items.push({key:d,value:e,found:!1})}}return f}function E(a){var b;S(a,function(a){return b=a.invokeOnClose===!0}),!b&&a.isOpen()&&a.close()}function F(a,b){var c=a.srcElement||a.target;switch(c){case b.elements.commands.pin:b.isPinned()?H(b):G(b);break;case b.elements.commands.maximize:b.isMaximized()?J(b):I(b);break;case b.elements.commands.close:E(b)}return!1}function G(a){a.set("pinned",!0)}function H(a){a.set("pinned",!1)}function I(a){l("onmaximize",a),b(a.elements.root,Ca.maximized),a.isOpen()&&u(),l("onmaximized",a)}function J(a){l("onrestore",a),c(a.elements.root,Ca.maximized),a.isOpen()&&u(),l("onrestored",a)}function K(a){a.get("pinnable")?b(a.elements.root,Ca.pinnable):c(a.elements.root,Ca.pinnable)}function L(a){var b=f();a.elements.modal.style.marginTop=e()+"px",a.elements.modal.style.marginLeft=b+"px",a.elements.modal.style.marginRight=-b+"px"}function M(a){var b=parseInt(a.elements.modal.style.marginTop,10),c=parseInt(a.elements.modal.style.marginLeft,10);if(a.elements.modal.style.marginTop="",a.elements.modal.style.marginLeft="",a.elements.modal.style.marginRight="",a.isOpen()){var d=0,g=0;""!==a.elements.dialog.style.top&&(d=parseInt(a.elements.dialog.style.top,10)),a.elements.dialog.style.top=d+(b-e())+"px",""!==a.elements.dialog.style.left&&(g=parseInt(a.elements.dialog.style.left,10)),a.elements.dialog.style.left=g+(c-f())+"px"}}function N(a){a.get("modal")||a.get("pinned")?M(a):L(a)}function O(a){a.get("pinned")?(c(a.elements.root,Ca.unpinned),a.isOpen()&&M(a)):(b(a.elements.root,Ca.unpinned),a.isOpen()&&!a.isModal()&&L(a))}function P(a){a.get("maximizable")?b(a.elements.root,Ca.maximizable):c(a.elements.root,Ca.maximizable)}function Q(a){a.get("closable")?(b(a.elements.root,Ca.closable),ua(a)):(c(a.elements.root,Ca.closable),va(a))}function R(a,b){var c=a.srcElement||a.target;return Fa||c!==b.elements.modal||b.get("closableByDimmer")!==!0||E(b),Fa=!1,!1}function S(a,b){for(var c=0;c<a.__internal.buttons.length;c+=1){var d=a.__internal.buttons[c];if(!d.element.disabled&&b(d)){var e=k(c,d);"function"==typeof a.callback&&a.callback.apply(a,[e]),e.cancel===!1&&a.close();break}}}function T(a,b){var c=a.srcElement||a.target;S(b,function(a){return a.element===c&&(Ga=!0)})}function U(a){if(Ga)return void(Ga=!1);var b=p[p.length-1],c=a.keyCode;return 0===b.__internal.buttons.length&&c===n.ESC&&b.get("closable")===!0?(E(b),!1):ya.indexOf(c)>-1?(S(b,function(a){return a.key===c}),!1):void 0}function V(a){var b=p[p.length-1],c=a.keyCode;if(c===n.LEFT||c===n.RIGHT){for(var d=b.__internal.buttons,e=0;e<d.length;e+=1)if(document.activeElement===d[e].element)switch(c){case n.LEFT:return void d[(e||d.length)-1].element.focus();case n.RIGHT:return void d[(e+1)%d.length].element.focus()}}else if(c<n.F12+1&&c>n.F1-1&&ya.indexOf(c)>-1)return a.preventDefault(),a.stopPropagation(),S(b,function(a){return a.key===c}),!1}function W(a,b){if(b)b.focus();else{var c=a.__internal.focus,d=c.element;switch(typeof c.element){case"number":a.__internal.buttons.length>c.element&&(d=a.get("basic")===!0?a.elements.reset[0]:a.__internal.buttons[c.element].element);break;case"string":d=a.elements.body.querySelector(c.element);break;case"function":d=c.element.call(a)}"undefined"!=typeof d&&null!==d||0!==a.__internal.buttons.length||(d=a.elements.reset[0]),d&&d.focus&&(d.focus(),c.select&&d.select&&d.select())}}function X(a,b){if(!b)for(var c=p.length-1;c>-1;c-=1)if(p[c].isModal()){b=p[c];break}if(b&&b.isModal()){var d,e=a.srcElement||a.target,f=e===b.elements.reset[1]||0===b.__internal.buttons.length&&e===document.body;f&&(b.get("maximizable")?d=b.elements.commands.maximize:b.get("closable")&&(d=b.elements.commands.close)),void 0===d&&("number"==typeof b.__internal.focus.element?e===b.elements.reset[0]?d=b.elements.buttons.auxiliary.firstChild||b.elements.buttons.primary.firstChild:f&&(d=b.elements.reset[0]):e===b.elements.reset[0]&&(d=b.elements.buttons.primary.lastChild||b.elements.buttons.auxiliary.lastChild)),W(b,d)}}function Y(a,b){clearTimeout(b.__internal.timerIn),W(b),t(),Ga=!1,l("onfocus",b),r(b.elements.dialog,s.type,b.__internal.transitionInHandler),c(b.elements.root,Ca.animationIn)}function Z(a,b){clearTimeout(b.__internal.timerOut),r(b.elements.dialog,s.type,b.__internal.transitionOutHandler),da(b),ja(b),b.isMaximized()&&!b.get("startMaximized")&&J(b),v.defaults.maintainFocus&&b.__internal.activeElement&&(b.__internal.activeElement.focus(),b.__internal.activeElement=null),"function"==typeof b.__internal.destroy&&b.__internal.destroy.apply(b)}function $(a,b){var c=a[Ka]-Ia,d=a[La]-Ja;Na&&(d-=document.body.scrollTop),b.style.left=c+"px",b.style.top=d+"px"}function _(a,b){var c=a[Ka]-Ia,d=a[La]-Ja;Na&&(d-=document.body.scrollTop),b.style.left=Math.min(Ma.maxLeft,Math.max(Ma.minLeft,c))+"px",Na?b.style.top=Math.min(Ma.maxTop,Math.max(Ma.minTop,d))+"px":b.style.top=Math.max(Ma.minTop,d)+"px"}function aa(a,c){if(null===Pa&&!c.isMaximized()&&c.get("movable")){var d,e=0,f=0;if("touchstart"===a.type?(a.preventDefault(),d=a.targetTouches[0],Ka="clientX",La="clientY"):0===a.button&&(d=a),d){var g=c.elements.dialog;if(b(g,Ca.capture),g.style.left&&(e=parseInt(g.style.left,10)),g.style.top&&(f=parseInt(g.style.top,10)),Ia=d[Ka]-e,Ja=d[La]-f,c.isModal()?Ja+=c.elements.modal.scrollTop:c.isPinned()&&(Ja-=document.body.scrollTop),c.get("moveBounded")){var h=g,i=-e,j=-f;do i+=h.offsetLeft,j+=h.offsetTop;while(h=h.offsetParent);Ma={maxLeft:i,minLeft:-i,maxTop:document.documentElement.clientHeight-g.clientHeight-j,minTop:-j},Oa=_}else Ma=null,Oa=$;return l("onmove",c),Na=!c.isModal()&&c.isPinned(),Ha=c,Oa(d,g),b(document.body,Ca.noSelection),!1}}}function ba(a){if(Ha){var b;"touchmove"===a.type?(a.preventDefault(),b=a.targetTouches[0]):0===a.button&&(b=a),b&&Oa(b,Ha.elements.dialog)}}function ca(){if(Ha){var a=Ha;Ha=Ma=null,c(document.body,Ca.noSelection),c(a.elements.dialog,Ca.capture),l("onmoved",a)}}function da(a){Ha=null;var b=a.elements.dialog;b.style.left=b.style.top=""}function ea(a){a.get("movable")?(b(a.elements.root,Ca.movable),a.isOpen()&&qa(a)):(da(a),c(a.elements.root,Ca.movable),a.isOpen()&&ra(a))}function fa(a,b,c){var e=b,f=0,g=0;do f+=e.offsetLeft,g+=e.offsetTop;while(e=e.offsetParent);var h,i;c===!0?(h=a.pageX,i=a.pageY):(h=a.clientX,i=a.clientY);var j=d();if(j&&(h=document.body.offsetWidth-h,isNaN(Qa)||(f=document.body.offsetWidth-f-b.offsetWidth)),b.style.height=i-g+Ta+"px",b.style.width=h-f+Ta+"px",!isNaN(Qa)){var k=.5*Math.abs(b.offsetWidth-Ra);j&&(k*=-1),b.offsetWidth>Ra?b.style.left=Qa+k+"px":b.offsetWidth>=Sa&&(b.style.left=Qa-k+"px")}}function ga(a,c){if(!c.isMaximized()){var d;if("touchstart"===a.type?(a.preventDefault(),d=a.targetTouches[0]):0===a.button&&(d=a),d){l("onresize",c),Pa=c,Ta=c.elements.resizeHandle.offsetHeight/2;var e=c.elements.dialog;return b(e,Ca.capture),Qa=parseInt(e.style.left,10),e.style.height=e.offsetHeight+"px",e.style.minHeight=c.elements.header.offsetHeight+c.elements.footer.offsetHeight+"px",e.style.width=(Ra=e.offsetWidth)+"px","none"!==e.style.maxWidth&&(e.style.minWidth=(Sa=e.offsetWidth)+"px"),e.style.maxWidth="none",b(document.body,Ca.noSelection),!1}}}function ha(a){if(Pa){var b;"touchmove"===a.type?(a.preventDefault(),b=a.targetTouches[0]):0===a.button&&(b=a),b&&fa(b,Pa.elements.dialog,!Pa.get("modal")&&!Pa.get("pinned"))}}function ia(){if(Pa){var a=Pa;Pa=null,c(document.body,Ca.noSelection),c(a.elements.dialog,Ca.capture),Fa=!0,l("onresized",a)}}function ja(a){Pa=null;var b=a.elements.dialog;"none"===b.style.maxWidth&&(b.style.maxWidth=b.style.minWidth=b.style.width=b.style.height=b.style.minHeight=b.style.left="",Qa=Number.Nan,Ra=Sa=Ta=0)}function ka(a){a.get("resizable")?(b(a.elements.root,Ca.resizable),a.isOpen()&&sa(a)):(ja(a),c(a.elements.root,Ca.resizable),a.isOpen()&&ta(a))}function la(){for(var a=0;a<p.length;a+=1){var b=p[a];b.get("autoReset")&&(da(b),ja(b))}}function ma(b){1===p.length&&(q(a,"resize",la),q(document.body,"keyup",U),q(document.body,"keydown",V),q(document.body,"focus",X),q(document.documentElement,"mousemove",ba),q(document.documentElement,"touchmove",ba),q(document.documentElement,"mouseup",ca),q(document.documentElement,"touchend",ca),q(document.documentElement,"mousemove",ha),q(document.documentElement,"touchmove",ha),q(document.documentElement,"mouseup",ia),q(document.documentElement,"touchend",ia)),q(b.elements.commands.container,"click",b.__internal.commandsClickHandler),q(b.elements.footer,"click",b.__internal.buttonsClickHandler),q(b.elements.reset[0],"focus",b.__internal.resetHandler),q(b.elements.reset[1],"focus",b.__internal.resetHandler),Ga=!0,q(b.elements.dialog,s.type,b.__internal.transitionInHandler),b.get("modal")||oa(b),b.get("resizable")&&sa(b),b.get("movable")&&qa(b)}function na(b){1===p.length&&(r(a,"resize",la),r(document.body,"keyup",U),r(document.body,"keydown",V),r(document.body,"focus",X),r(document.documentElement,"mousemove",ba),r(document.documentElement,"mouseup",ca),r(document.documentElement,"mousemove",ha),r(document.documentElement,"mouseup",ia)),r(b.elements.commands.container,"click",b.__internal.commandsClickHandler),r(b.elements.footer,"click",b.__internal.buttonsClickHandler),r(b.elements.reset[0],"focus",b.__internal.resetHandler),r(b.elements.reset[1],"focus",b.__internal.resetHandler),q(b.elements.dialog,s.type,b.__internal.transitionOutHandler),b.get("modal")||pa(b),b.get("movable")&&ra(b),b.get("resizable")&&ta(b)}function oa(a){q(a.elements.dialog,"focus",a.__internal.bringToFrontHandler,!0)}function pa(a){r(a.elements.dialog,"focus",a.__internal.bringToFrontHandler,!0)}function qa(a){q(a.elements.header,"mousedown",a.__internal.beginMoveHandler),q(a.elements.header,"touchstart",a.__internal.beginMoveHandler)}function ra(a){r(a.elements.header,"mousedown",a.__internal.beginMoveHandler),r(a.elements.header,"touchstart",a.__internal.beginMoveHandler)}function sa(a){q(a.elements.resizeHandle,"mousedown",a.__internal.beginResizeHandler),q(a.elements.resizeHandle,"touchstart",a.__internal.beginResizeHandler)}function ta(a){r(a.elements.resizeHandle,"mousedown",a.__internal.beginResizeHandler),r(a.elements.resizeHandle,"touchstart",a.__internal.beginResizeHandler)}function ua(a){q(a.elements.modal,"click",a.__internal.modalClickHandler)}function va(a){r(a.elements.modal,"click",a.__internal.modalClickHandler)}var wa,xa,ya=[],za=null,Aa=a.navigator.userAgent.indexOf("Safari")>-1&&a.navigator.userAgent.indexOf("Chrome")<0,Ba={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},Ca={animationIn:"ajs-in",animationOut:"ajs-out",base:"alertify",basic:"ajs-basic",capture:"ajs-capture",closable:"ajs-closable",fixed:"ajs-fixed",frameless:"ajs-frameless",hidden:"ajs-hidden",maximize:"ajs-maximize",maximized:"ajs-maximized",maximizable:"ajs-maximizable",modeless:"ajs-modeless",movable:"ajs-movable",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",pin:"ajs-pin",pinnable:"ajs-pinnable",prefix:"ajs-",resizable:"ajs-resizable",restore:"ajs-restore",shake:"ajs-shake",unpinned:"ajs-unpinned"},Da="",Ea=0,Fa=!1,Ga=!1,Ha=null,Ia=0,Ja=0,Ka="pageX",La="pageY",Ma=null,Na=!1,Oa=null,Pa=null,Qa=Number.Nan,Ra=0,Sa=0,Ta=0;return{__init:m,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(Ca.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(Ca.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(Ca.unpinned)<0},maximize:function(){return this.isMaximized()||I(this),this},restore:function(){return this.isMaximized()&&J(this),this},pin:function(){return this.isPinned()||G(this),this},unpin:function(){return this.isPinned()&&H(this),this},bringToFront:function(){return B(null,this),this},moveTo:function(a,b){if(!isNaN(a)&&!isNaN(b)){l("onmove",this);var c=this.elements.dialog,e=c,f=0,g=0;c.style.left&&(f-=parseInt(c.style.left,10)),c.style.top&&(g-=parseInt(c.style.top,10));do f+=e.offsetLeft,g+=e.offsetTop;while(e=e.offsetParent);var h=a-f,i=b-g;d()&&(h*=-1),c.style.left=h+"px",c.style.top=i+"px",l("onmoved",this)}return this},resizeTo:function(a,b){var c=parseFloat(a),d=parseFloat(b),e=/(\d*\.\d+|\d+)%/;if(!isNaN(c)&&!isNaN(d)&&this.get("resizable")===!0){l("onresize",this),(""+a).match(e)&&(c=c/100*document.documentElement.clientWidth),(""+b).match(e)&&(d=d/100*document.documentElement.clientHeight);var f=this.elements.dialog;"none"!==f.style.maxWidth&&(f.style.minWidth=(Sa=f.offsetWidth)+"px"),f.style.maxWidth="none",f.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",f.style.width=c+"px",f.style.height=d+"px",l("onresized",this)}return this},setting:function(a,b){var c=this,d=D(this,this.__internal.options,function(a,b,d){C(c,a,b,d)},a,b);if("get"===d.op)return d.found?d.value:"undefined"!=typeof this.settings?D(this,this.settings,this.settingUpdated||function(){},a,b).value:void 0;if("set"===d.op){if(d.items.length>0)for(var e=this.settingUpdated||function(){},f=0;f<d.items.length;f+=1){var g=d.items[f];g.found||"undefined"==typeof this.settings||D(this,this.settings,e,g.key,g.value)}return this}},set:function(a,b){return this.setting(a,b),this},get:function(a){return this.setting(a)},setHeader:function(b){return"string"==typeof b?(g(this.elements.header),this.elements.header.innerHTML=b):b instanceof a.HTMLElement&&this.elements.header.firstChild!==b&&(g(this.elements.header),this.elements.header.appendChild(b)),this},setContent:function(b){return"string"==typeof b?(g(this.elements.content),this.elements.content.innerHTML=b):b instanceof a.HTMLElement&&this.elements.content.firstChild!==b&&(g(this.elements.content),this.elements.content.appendChild(b)),this},showModal:function(a){return this.show(!0,a)},show:function(a,d){if(m(this),this.__internal.isOpen){da(this),ja(this),b(this.elements.dialog,Ca.shake);var e=this;setTimeout(function(){c(e.elements.dialog,Ca.shake)},200)}else{if(this.__internal.isOpen=!0,p.push(this),v.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),"function"==typeof this.prepare&&this.prepare(),ma(this),void 0!==a&&this.set("modal",a),o(),u(),"string"==typeof d&&""!==d&&(this.__internal.className=d,b(this.elements.root,d)),this.get("startMaximized")?this.maximize():this.isMaximized()&&J(this),N(this),c(this.elements.root,Ca.animationOut),b(this.elements.root,Ca.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,s.supported?1e3:100),Aa){var f=this.elements.root;f.style.display="none",setTimeout(function(){f.style.display="block"},0)}za=this.elements.root.offsetWidth,c(this.elements.root,Ca.hidden),"function"==typeof this.hooks.onshow&&this.hooks.onshow.call(this),l("onshow",this)}return this},close:function(){return this.__internal.isOpen&&l("onclosing",this)!==!1&&(na(this),c(this.elements.root,Ca.animationIn),b(this.elements.root,Ca.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,s.supported?1e3:100),b(this.elements.root,Ca.hidden),za=this.elements.modal.offsetWidth,"undefined"!=typeof this.__internal.className&&""!==this.__internal.className&&c(this.elements.root,this.__internal.className),"function"==typeof this.hooks.onclose&&this.hooks.onclose.call(this),l("onclose",this),p.splice(p.indexOf(this),1),this.__internal.isOpen=!1,u()),this},closeOthers:function(){return v.closeAll(this),this},destroy:function(){return this.__internal.isOpen?(this.__internal.destroy=function(){i(this,m)},this.close()):i(this,m),this}}}(),u=function(){function d(a){a.__internal||(a.__internal={position:v.defaults.notifier.position,delay:v.defaults.notifier.delay},l=document.createElement("DIV"),h(a)),l.parentNode!==document.body&&document.body.appendChild(l)}function e(a){a.__internal.pushed=!0,m.push(a)}function f(a){m.splice(m.indexOf(a),1),a.__internal.pushed=!1}function h(a){switch(l.className=n.base,a.__internal.position){case"top-right":b(l,n.top+" "+n.right);break;case"top-left":b(l,n.top+" "+n.left);break;case"bottom-left":b(l,n.bottom+" "+n.left);break;default:case"bottom-right":b(l,n.bottom+" "+n.right)}}function i(d,h){function i(a,b){b.__internal.closeButton&&"true"!==a.target.getAttribute("data-close")||b.dismiss(!0)}function m(a,b){r(b.element,s.type,m),l.removeChild(b.element)}function o(a){return a.__internal||(a.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},a.__internal.clickHandler=j(a,i),a.__internal.transitionEndHandler=j(a,m)),a}function p(a){clearTimeout(a.__internal.timer),clearTimeout(a.__internal.transitionTimeout)}return o({element:d,push:function(a,c){if(!this.__internal.pushed){e(this),p(this);var d,f;switch(arguments.length){case 0:f=this.__internal.delay;break;case 1:"number"==typeof a?f=a:(d=a,f=this.__internal.delay);break;case 2:d=a,f=c}return this.__internal.closeButton=v.defaults.notifier.closeButton,"undefined"!=typeof d&&this.setContent(d),u.__internal.position.indexOf("top")<0?l.appendChild(this.element):l.insertBefore(this.element,l.firstChild),k=this.element.offsetWidth,b(this.element,n.visible),q(this.element,"click",this.__internal.clickHandler),this.delay(f)}return this},ondismiss:function(){},callback:h,dismiss:function(a){return this.__internal.pushed&&(p(this),("function"!=typeof this.ondismiss||this.ondismiss.call(this)!==!1)&&(r(this.element,"click",this.__internal.clickHandler),"undefined"!=typeof this.element&&this.element.parentNode===l&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,s.supported?1e3:100),c(this.element,n.visible),"function"==typeof this.callback&&this.callback.call(this,a)),f(this))),this},delay:function(a){if(p(this),this.__internal.delay="undefined"==typeof a||isNaN(+a)?u.__internal.delay:+a,this.__internal.delay>0){var b=this;this.__internal.timer=setTimeout(function(){b.dismiss()},1e3*this.__internal.delay)}return this},setContent:function(c){if("string"==typeof c?(g(this.element),this.element.innerHTML=c):c instanceof a.HTMLElement&&this.element.firstChild!==c&&(g(this.element),this.element.appendChild(c)),this.__internal.closeButton){var d=document.createElement("span");b(d,n.close),d.setAttribute("data-close",!0),this.element.appendChild(d)}return this},dismissOthers:function(){return u.dismissAll(this),this}})}var k,l,m=[],n={base:"alertify-notifier",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",visible:"ajs-visible",hidden:"ajs-hidden",close:"ajs-close"};return{setting:function(a,b){if(d(this),"undefined"==typeof b)return this.__internal[a];switch(a){case"position":this.__internal.position=b,h(this);break;case"delay":this.__internal.delay=b}return this},set:function(a,b){return this.setting(a,b),this},get:function(a){return this.setting(a)},create:function(a,b){d(this);var c=document.createElement("div");return c.className=n.message+("string"==typeof a&&""!==a?" ajs-"+a:""),i(c,b)},dismissAll:function(a){for(var b=m.slice(0),c=0;c<b.length;c+=1){var d=b[c];(void 0===a||a!==d)&&d.dismiss()}}}}(),v=new m;v.dialog("alert",function(){return{main:function(a,b,c){var d,e,f;switch(arguments.length){case 1:e=a;break;case 2:"function"==typeof b?(e=a,f=b):(d=a,e=b);break;case 3:d=a,e=b,f=c}return this.set("title",d),this.set("message",e),this.set("onok",f),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(a){this.setContent(a)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(a,b,c){switch(a){case"message":this.setMessage(c);break;case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=c)}},callback:function(a){if("function"==typeof this.get("onok")){var b=this.get("onok").call(this,a);"undefined"!=typeof b&&(a.cancel=!b)}}}}),v.dialog("confirm",function(){function a(a){null!==c.timer&&(clearInterval(c.timer),c.timer=null,a.__internal.buttons[c.index].element.innerHTML=c.text)}function b(b,d,e){a(b),c.duration=e,c.index=d,c.text=b.__internal.buttons[d].element.innerHTML,c.timer=setInterval(j(b,c.task),1e3),c.task(null,b)}var c={timer:null,index:null,text:null,duration:null,task:function(b,d){if(d.isOpen()){if(d.__internal.buttons[c.index].element.innerHTML=c.text+" (&#8207;"+c.duration+"&#8207;) ",c.duration-=1,-1===c.duration){a(d);var e=d.__internal.buttons[c.index],f=k(c.index,e);"function"==typeof d.callback&&d.callback.apply(d,[f]),f.close!==!1&&d.close()}}else a(d)}};return{main:function(a,b,c,d){var e,f,g,h;switch(arguments.length){case 1:f=a;break;case 2:f=a,g=b;break;case 3:f=a,g=b,h=c;break;case 4:e=a,f=b,g=c,h=d}return this.set("title",e),this.set("message",f),this.set("onok",g),this.set("oncancel",h),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ENTER,className:v.defaults.theme.ok},{text:v.defaults.glossary.cancel,key:n.ESC,invokeOnClose:!0,
className:v.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(a){this.setContent(a)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(a,b,c){switch(a){case"message":this.setMessage(c);break;case"labels":"ok"in c&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=c.ok,this.__internal.buttons[0].element.innerHTML=c.ok),"cancel"in c&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=c.cancel,this.__internal.buttons[1].element.innerHTML=c.cancel);break;case"reverseButtons":c===!0?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);break;case"defaultFocus":this.__internal.focus.element="ok"===c?0:1}},callback:function(b){a(this);var c;switch(b.index){case 0:"function"==typeof this.get("onok")&&(c=this.get("onok").call(this,b),"undefined"!=typeof c&&(b.cancel=!c));break;case 1:"function"==typeof this.get("oncancel")&&(c=this.get("oncancel").call(this,b),"undefined"!=typeof c&&(b.cancel=!c))}},autoOk:function(a){return b(this,0,a),this},autoCancel:function(a){return b(this,1,a),this}}}),v.dialog("prompt",function(){var b=document.createElement("INPUT"),c=document.createElement("P");return{main:function(a,b,c,d,e){var f,g,h,i,j;switch(arguments.length){case 1:g=a;break;case 2:g=a,h=b;break;case 3:g=a,h=b,i=c;break;case 4:g=a,h=b,i=c,j=d;break;case 5:f=a,g=b,h=c,i=d,j=e}return this.set("title",f),this.set("message",g),this.set("value",h),this.set("onok",i),this.set("oncancel",j),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ENTER,className:v.defaults.theme.ok},{text:v.defaults.glossary.cancel,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.cancel}],focus:{element:b,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){b.className=v.defaults.theme.input,b.setAttribute("type","text"),b.value=this.get("value"),this.elements.content.appendChild(c),this.elements.content.appendChild(b)},prepare:function(){},setMessage:function(b){"string"==typeof b?(g(c),c.innerHTML=b):b instanceof a.HTMLElement&&c.firstChild!==b&&(g(c),c.appendChild(b))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(a,c,d){switch(a){case"message":this.setMessage(d);break;case"value":b.value=d;break;case"type":switch(d){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":b.type=d;break;default:b.type="text"}break;case"labels":d.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=d.ok),d.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=d.cancel);break;case"reverseButtons":d===!0?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)}},callback:function(a){var c;switch(a.index){case 0:this.settings.value=b.value,"function"==typeof this.get("onok")&&(c=this.get("onok").call(this,a,this.settings.value),"undefined"!=typeof c&&(a.cancel=!c));break;case 1:"function"==typeof this.get("oncancel")&&(c=this.get("oncancel").call(this,a),"undefined"!=typeof c&&(a.cancel=!c)),a.cancel||(b.value=this.settings.value)}}}}),"object"==typeof module&&"object"==typeof module.exports?module.exports=v:"function"==typeof define&&define.amd?define([],function(){return v}):a.alertify||(a.alertify=v)}("undefined"!=typeof window?window:this);
},{}],2:[function(require,module,exports){
'use strict'
/*eslint-env browser */

module.exports = {
  /**
   * Create a <style>...</style> tag and add it to the document head
   * @param {string} cssText
   * @param {object?} options
   * @return {Element}
   */
  createStyle: function (cssText, options) {
    var container = document.head || document.getElementsByTagName('head')[0]
    var style = document.createElement('style')
    options = options || {}
    style.type = 'text/css'
    if (options.href) {
      style.setAttribute('data-href', options.href)
    }
    if (style.sheet) { // for jsdom and IE9+
      style.innerHTML = cssText
      style.sheet.cssText = cssText
    }
    else if (style.styleSheet) { // for IE8 and below
      style.styleSheet.cssText = cssText
    }
    else { // for Chrome, Firefox, and Safari
      style.appendChild(document.createTextNode(cssText))
    }
    if (options.prepend) {
      container.insertBefore(style, container.childNodes[0]);
    } else {
      container.appendChild(style);
    }
    return style
  }
}

},{}],3:[function(require,module,exports){
module.exports={
  "pinnable": false,
  "maximizable": false,
  "resizable": false,
  "movable": false,

  "notifier": {
    "delay": 3
  }
}

},{}],4:[function(require,module,exports){
module.exports={
  "cart": {
    "item_added": true,
    "item_removed": true
  },
  "compares": {
    "product_added": true,
    "product_removed": true,
    "overload": true
  }
}

},{}],5:[function(require,module,exports){
module.exports={
  "modal": {
    "ok": "Ok",
    "cancel": "Отмена"
  },
  "cart": {
    "item_added": "Товар добавлен в корзину",
    "item_removed": "Товар удален из корзину"
  },
  "compares": {
    "product_added": "Товар добавлен в сравнение",
    "product_removed": "Товар удален из сравнения",
    "overload": "Достигнут максимум товаров в сравнении"
  },
  "passwordRcovery": {
    "title": "Восстановление пароля",
    "inputTitle": "Введите e-mail",
    "ok": "Сменить",
    "cancel": "Отменить"
  }
}

},{}],6:[function(require,module,exports){
module.exports={
  "ok": "ajs-ok button is-primary",
  "cancel": "ajs-cancel button is-default"
}

},{}],7:[function(require,module,exports){
module.exports = function (instance, callbackName) {
  var _callback = instance.get(callbackName);
  var _body = instance.elements.content;

  setTimeout(function () {
    if (_.isFunction(_callback)) {
      _callback(_body, instance);
    }
    else if (_.isFunction(window[_callback])) {
      window[_callback](_body, instance);
    }
  }, 0);

  return;
};
},{}],8:[function(require,module,exports){

var Destroy = function () {
  var self = this;
  
  return;
};

Destroy.shredder = function () {
  var isIOS = (/iPhone|iPad|iPod/i).test(navigator.userAgent);

  if (isIOS) {
    document.body.classList.add('destroyiOS');
  }

  return;
};

Destroy.reestablish = function () {
  var isIOS = (/iPhone|iPad|iPod/i).test(navigator.userAgent);

  if (isIOS) {
    document.body.classList.remove('destroyiOS');
  }

  return;
};

module.exports = Destroy;
},{}],9:[function(require,module,exports){
module.exports = function (instance) {
  instance.set(instance.__settings);
  instance.setContent('');
  return;
};
},{}],10:[function(require,module,exports){
module.exports = function (type) {
  var _defaults = _.cloneDeep(require('defaults/event-bus'));
  var _events = _.get(alertify, 'defaults.eventBus.' + type, {});

  _events = _.merge({}, _defaults[type], _events);

  return _events;
};
},{"defaults/event-bus":4}],11:[function(require,module,exports){
module.exports = function (type) {
  var _defaults = _.cloneDeep(require('defaults/glossary'));
  var _glossary = _.get(alertify, 'defaults.glossary.' + type, {});

  _glossary = _.merge({}, _defaults[type], _glossary);

  return _glossary;
};
},{"defaults/glossary":5}],12:[function(require,module,exports){
module.exports = function (params, settings, glossary) {
  var _defaultSettings = _.cloneDeep(settings);
  var _glossary = _.cloneDeep(glossary);
  var _params = _.merge({},
    _defaultSettings,
    params
  );

  if (_glossary) {
    _params.glossary = _.merge({}, _glossary, _params.glossary);
  }

  return _params;
};
},{}],13:[function(require,module,exports){
var DATA_PREFIX = 'alertify-';

module.exports = function (options) {
  return _.chain(options)
    .reduce(function (res, value, key) {
      var _key = _.chain(key)
        .kebabCase(key)
        .replace(DATA_PREFIX, '')
        .camelCase()
        .value();

      res[_key] = value;

      return res;
    }, [])
    .value();
};
},{}],14:[function(require,module,exports){
module.exports = function (instance) {
  var _modal = $(instance.elements.modal);

  _modal.on('scroll_to:insales', function (event, eventData) {
    event.stopPropagation();
  });
};
},{}],15:[function(require,module,exports){
var closePanel = function (event) {
  var instance = event.data;

  if ($(document).width() >= instance.get('hideAfter')) {
    instance.close();
  }
};

var onCheckResize = function (instance) {
  var _hideAfter = instance.get('hideAfter');

  if (_hideAfter) {
    $(window).on('resize', instance, closePanel);
  }
};

var offCheckResize = function (instance) {
  var _hideAfter = instance.get('hideAfter');

  if (_hideAfter) {
    $(window).off('resize', closePanel);
  }
};

module.exports = {
  closePanel: closePanel,
  onCheckResize: onCheckResize,
  offCheckResize: offCheckResize
};
},{}],16:[function(require,module,exports){
(function (window) {
  var alertify = require('alertifyjs');
  var _theme = require('defaults/theme');
  var _defaults = _.get(window, 'Site.alertifyConfig', {});
  var _initDefaults = require('defaults/defaults');

  _.merge(alertify.defaults.theme, _theme);
  _.merge(alertify.defaults, _initDefaults, _defaults);

  window.alertify = alertify;

  require('styles/main.scss');

  require('ui/events')(alertify);

  require('types/panel')(alertify);
  require('types/checkout-recovery')(alertify);
  require('types/modal')(alertify);
})(window);
},{"alertifyjs":1,"defaults/defaults":3,"defaults/theme":6,"styles/main.scss":17,"types/checkout-recovery":18,"types/modal":21,"types/panel":24,"ui/events":29}],17:[function(require,module,exports){
module.exports.tag = require('scssify').createStyle(".ajs-no-overflow {\n  overflow: hidden !important;\n  outline: none; }\n  .ajs-no-overflow.ajs-fixed {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow-y: scroll !important; }\n\n.ajs-no-selection,\n.ajs-no-selection * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.alertify {\n  /*\n  &.ajs-maximized {\n    .ajs-dialog {\n      width: 100% !important;\n      height: 100% !important;\n      max-width: none !important;\n      max-height: 100% !important;\n      margin: 0 auto !important;\n      top: 0 !important;\n      left: 0 !important;\n    }\n  }\n  */\n  /*\n  &.ajs-movable {\n    .ajs-header {\n      cursor: move;\n    }\n  }\n  */\n  /*\n  &.ajs-no-padding {\n    .ajs-body {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n  */\n  /*\n  &.ajs-no-overflow {\n    .ajs-body {\n      overflow: hidden !important;\n    }\n  }\n  */ }\n\n.ajs-dimmer {\n  position: fixed;\n  z-index: 1981;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  background-color: #252525;\n  opacity: 0.5; }\n  .ajs-hidden .ajs-dimmer {\n    visibility: hidden;\n    opacity: 0; }\n  .ajs-modeless .ajs-dimmer {\n    display: none; }\n\n.ajs-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  padding: 0;\n  overflow-y: auto;\n  z-index: 1981;\n  min-width: 320px; }\n  .ajs-maximized .ajs-modal {\n    margin: 0 !important;\n    position: fixed !important; }\n  .ajs-hidden .ajs-modal {\n    visibility: hidden;\n    opacity: 0; }\n  .ajs-modeless .ajs-modal {\n    position: fixed;\n    min-height: 100%;\n    max-height: none;\n    margin: 0; }\n  .ajs-modeless.ajs-unpinned .ajs-modal {\n    position: absolute; }\n\n.ajs-dialog {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 2rem auto;\n  max-width: 500px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n  outline: 0;\n  background-color: #fff; }\n  @media (max-width: 640px) {\n    .ajs-dialog {\n      width: 100% !important;\n      max-width: none !important;\n      min-height: 100% !important;\n      margin: 0 auto !important;\n      top: 0 !important;\n      left: 0 !important; } }\n  .ajs-dialog.ajs-capture:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: block;\n    z-index: 1; }\n  .ajs-maximized .ajs-dialog {\n    width: 100% !important;\n    height: 100% !important;\n    max-width: none !important;\n    max-height: 100% !important;\n    margin: 0 auto !important;\n    top: 0 !important;\n    left: 0 !important; }\n\n.ajs-panel {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 0;\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n  outline: 0;\n  background-color: #fff; }\n  .ajs-panel.at-left-position {\n    width: 270px;\n    top: 0;\n    left: 0;\n    bottom: 0; }\n  .ajs-panel.at-right-position {\n    width: 270px;\n    top: 0;\n    right: 0;\n    bottom: 0; }\n  .ajs-panel.at-top-position {\n    top: 0;\n    left: 0;\n    right: 0; }\n  .ajs-panel.at-bottom-position {\n    right: 0;\n    left: 0;\n    bottom: 0; }\n  .ajs-panel .ajs-body {\n    min-height: 0;\n    margin: 0;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    overflow-y: auto !important; }\n  .ajs-panel .ajs-close {\n    display: none !important; }\n\n.ajs-reset {\n  position: absolute !important;\n  display: inline !important;\n  width: 0 !important;\n  height: 0 !important;\n  opacity: 0 !important; }\n  .ajs-modeless .ajs-reset {\n    display: none; }\n\n.ajs-commands {\n  position: absolute;\n  right: 0;\n  z-index: 2; }\n  .ajs-commands button {\n    display: none;\n    border: none;\n    width: 2rem;\n    height: 2rem;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: center;\n    cursor: pointer; }\n\n.ajs-close {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAh0lEQVQYlY2QsQ0EIQwEB9cBAR1CJUaI/gigDnwR6NBL/7/xWLNrZ2b8EwGotVpr7eOitWa1VjugiNB7R1UPrKrWe0dEAHBbXUqxMQbeewDmnHjvyTm7C3zDwAUd9c63YQdUVdu6EAJzzquz7HXvTiklt+H9DQFYaxFjvDqllFyMkbXWvfpXHjJrWFgdBq/hAAAAAElFTkSuQmCC\"); }\n  .ajs-closable .ajs-close {\n    display: inline-block; }\n\n.ajs-maximize {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAOUlEQVQYlWP8//8/AzGAhYGBgaG4uBiv6t7eXkYmooxjYGAgWiELsvHYFMCcRX2rSXcjoSBiJDbAAeD+EGu+8BZcAAAAAElFTkSuQmCC\"); }\n  .ajs-maximizable .ajs-maximize {\n    display: inline-block; }\n  .ajs-maximized .ajs-maximize {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAASklEQVQYlZWQ0QkAMQhDtXRincOZX78KVtrDCwgqJNEoIB3MPLj7lRUROlpyVXGzby6zWuY+kz6tj5sBMTMAyVV3/595RbOh3cAXsww1raeiOcoAAAAASUVORK5CYII=\"); }\n\n.ajs-pin {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQklEQVQYlcWPMQ4AIAwCqU9u38GbcbHRWN1MvKQDhQFMEpKImGJA0gCgnYw0V0rwxseg5erT4oSkQVI5d9f+e9+xA0NbLpWfitPXAAAAAElFTkSuQmCC\"); }\n  .ajs-pinnable .ajs-pin {\n    display: inline-block; }\n  .ajs-unpinned .ajs-pin {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAO0lEQVQYlWP8//8/AzGAiShV6AqLi4txGs+CLoBLMYbC3t5eRmyaWfBZhwwYkX2NTxPRvibKjRhW4wMAhxkYGbLu3pEAAAAASUVORK5CYII=\"); }\n\n.ajs-button {\n  padding: 0.4rem;\n  border: none;\n  margin: 0.4rem;\n  background-color: transparent;\n  cursor: pointer; }\n\n.ajs-primary {\n  margin: -0.4rem;\n  text-align: right; }\n\n.ajs-auxiliary {\n  margin: -0.4rem;\n  float: left;\n  text-align: left; }\n\n.ajs-handle {\n  position: absolute;\n  display: none;\n  width: 10px;\n  height: 10px;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMS8xNEDQYmMAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQ0lEQVQYlaXNMQoAIAxD0dT7H657l0KX3iJuUlBUNOsPPCGJm7VDp6ryeMxMuDsAQH7owW3pyn3RS26iKxERMLN3ugOaAkaL3sWVigAAAABJRU5ErkJggg==\");\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n  cursor: se-resize; }\n  .ajs-resizable .ajs-handle {\n    display: block; }\n\n.ajs-header {\n  padding: 1rem;\n  margin-bottom: 1rem;\n  margin-right: 6rem;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  line-height: 2rem;\n  font-size: 1.6rem; }\n  .ajs-movable .ajs-header {\n    cursor: move; }\n  .ajs-frameless .ajs-header {\n    display: none; }\n\n.destroyiOS {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  position: fixed; }\n\n.ajs-body {\n  min-height: 10rem;\n  padding: 0 1rem;\n  margin: 1rem 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  overflow-y: auto;\n  overflow-x: hidden; }\n  .ajs-no-padding .ajs-body {\n    padding-left: 0;\n    padding-right: 0; }\n  .ajs-no-overflow .ajs-body {\n    overflow: hidden; }\n  .ajs-frameless .ajs-body {\n    margin-top: 2rem; }\n\n.ajs-footer {\n  padding: 1rem;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n  .ajs-frameless .ajs-footer {\n    display: none; }\n\n.alertify-notifier {\n  position: fixed;\n  width: 0;\n  overflow: visible;\n  z-index: 1982; }\n  @media (max-width: 480px) {\n    .alertify-notifier {\n      width: 100%; } }\n  .alertify-notifier.ajs-top {\n    top: 10px; }\n  .alertify-notifier.ajs-bottom {\n    bottom: 10px; }\n  .alertify-notifier.ajs-right {\n    right: 10px; }\n    @media (max-width: 480px) {\n      .alertify-notifier.ajs-right {\n        right: 0px; } }\n    .alertify-notifier.ajs-right .ajs-message {\n      right: -320px; }\n    .alertify-notifier.ajs-right .ajs-message.ajs-visible {\n      right: 290px; }\n      @media (max-width: 480px) {\n        .alertify-notifier.ajs-right .ajs-message.ajs-visible {\n          right: 10px;\n          left: 10px;\n          width: calc(100% - 20px); } }\n  .alertify-notifier.ajs-left {\n    left: 10px; }\n    @media (max-width: 480px) {\n      .alertify-notifier.ajs-left {\n        left: 0px; } }\n    .alertify-notifier.ajs-left .ajs-message {\n      left: -300px; }\n    .alertify-notifier.ajs-left .ajs-message.ajs-visible {\n      left: 0; }\n      @media (max-width: 480px) {\n        .alertify-notifier.ajs-left .ajs-message.ajs-visible {\n          right: 10px;\n          left: 10px;\n          width: calc(100% - 20px); } }\n\n.ajs-message {\n  position: relative;\n  width: 260px;\n  max-height: 0;\n  padding: 0;\n  opacity: 0;\n  margin: 0; }\n  .ajs-message.ajs-visible {\n    opacity: 1;\n    max-height: 100%;\n    padding: 15px;\n    margin-top: 10px; }\n  .ajs-message.ajs-success {\n    background: rgba(91, 189, 114, 0.95); }\n  .ajs-message.ajs-error {\n    background: rgba(217, 92, 92, 0.95); }\n  .ajs-message.ajs-warning {\n    background: rgba(252, 248, 215, 0.95); }\n  .ajs-message.ajs-info {\n    background: rgba(91, 189, 114, 0.95); }\n\n/*# sourceMappingURL=to.css.map */", {"href":false,"prepend":true});
},{"scssify":2}],18:[function(require,module,exports){
var _glossary = require('helpers/get-glossary')('passwordRcovery');
var destroy = require('helpers/destroy');

var formDefination = {
  fields: [
    {
      title: _glossary.inputTitle,
      name: 'email',
      required: true
    },
    {
      title: '',
      name: 'utf8',
      type: 'hidden',
      value: '✓'
    }
  ],
  sendTo: ajaxAPI.shop.password.reset
};

var Recover = {
  main: function () {
    var _form = null;

    _form = InSalesUI.Form.create($(this.elements.content), formDefination);

    this.setting('form', _form);
  },

  setup: function () {
    return require('./setup')();
  },
  settings: require('./settings'),

  prepare: function () {
    var _form = this.get('form');

    _form.clear();
  },

  callback: function (closeEvent) {
    var self = this;
    var _form = self.get('form');

    switch (closeEvent.index) {
      case 0:
        closeEvent.cancel = true;

        _form.validate()
          .done(function (response) {
            alertify.success(response.message);
            self.close();
          });

        break;
    }
  },

  hooks: {
    onshow: function () {
      var _form = this.get('form');
      var _input = _form.getFirstInput();

      _input.$node.focus();
    },
    onclose: function () {
      destroy(this);
    }
  }
};

module.exports = function (alertify) {
  alertify.dialog('checkoutRecover', function factory () {
    return Recover;
  });
};
},{"./settings":19,"./setup":20,"helpers/destroy":9,"helpers/get-glossary":11}],19:[function(require,module,exports){
module.exports={
  "form": null
}

},{}],20:[function(require,module,exports){
module.exports = function () {
  var _glossary = require('helpers/get-glossary')('passwordRcovery');

  return {
    buttons: [
      {
        key: 13,
        invokeOnClose: false,
        text: _glossary.ok,
        className: alertify.defaults.theme.ok
      },
      {
        key: 27,
        invokeOnClose: true,
        text: _glossary.cancel,
        className: alertify.defaults.theme.cancel
      }
    ],
    options: {
      maximizable: false,
      resizable: false,
      movable: false,

      title: _glossary.title
    },
  };
};
},{"helpers/get-glossary":11}],21:[function(require,module,exports){
var callCalback = require('helpers/callbacks');
var destroy = require('helpers/destroy');

var getSettings = require('helpers/get-settings');
var glossary = require('helpers/get-glossary')('modal');
var scrollForm = require('helpers/scroll-form');
var destroyiOS = require('helpers/destroy-ios');

var Modal = {
  main: function (params) {
    var _params = getSettings(params, require('./settings'), glossary);

    this.setting(_params);
  },
  setup: function () {
    return require('./setup')();
  },
  settings: require('./settings'),

  prepare: function () {
    var _content = $(this.elements.content);
    var _target = this.get('target');
    var _formDefination = this.get('formDefination');
    var _form = null;

    if (_target) {
      _content.html($(_target).clone()[0]);
    }
    else {
      _form = InSalesUI.Form.create(_content, _formDefination);
    }

    this.set('form', _form);

    callCalback(this, 'onOpen');
  },

  settingUpdated: function (key, oldValue, newValue) {
    var self = this;
    var _buttons = self.__internal.buttons;

    switch (key) {
      case 'glossary':
        if (newValue) {
          $(_buttons[0].element).text(newValue.ok);
          $(self.elements.header).text(newValue.title);
          break;
        }
      case 'target':
        self.setContent($(newValue).clone()[0]);
        break;
    }
  },

  callback: function (closeEvent) {
    var self = this;
    var _form = this.get('form');

    switch (closeEvent.index) {
      case 0:
        closeEvent.cancel = true;

        if (!_form) {
          return;
        }

        _form.validate()
          .done(function (response) {
            alertify.success(_.get(_form.messages, 'success', response.notice));
            self.close();
          });
        break;
    }
  },

  hooks: {
    onshow: function () {
      var _form = this.get('form');
      var _input = null;

      if (!_form) {
        return;
      }

      _input = _form.getFirstInput();
      _input.$node.focus();
      scrollForm(this);
      destroyiOS.shredder();
    },
    onclose: function () {
      destroy(this);
      destroyiOS.reestablish();
    }
  }
};

module.exports = function (alertify) {
  alertify.dialog('modal', function factory () {
    return Modal;
  });
};
},{"./settings":22,"./setup":23,"helpers/callbacks":7,"helpers/destroy":9,"helpers/destroy-ios":8,"helpers/get-glossary":11,"helpers/get-settings":12,"helpers/scroll-form":14}],22:[function(require,module,exports){
module.exports={
  "target": null,
  "formDefination": null,
  "form": null,
  "onOpen": null,
  "glossary": null
}

},{}],23:[function(require,module,exports){
module.exports = function () {
  var _glossary = require('helpers/get-glossary')('modal');

  return {
    buttons: [
      {
        key: 13,
        invokeOnClose: false,
        text: _glossary.ok,
        className: alertify.defaults.theme.ok
      }
    ],
    focus: {},
    options: {}
  };
};
},{"helpers/get-glossary":11}],24:[function(require,module,exports){
var winControl = require('helpers/window-control');

var callCalback = require('helpers/callbacks');
var destroy = require('helpers/destroy');

var _defaultSettings = _.clone(require('./settings'));

var Panel = {
  main: function (params) {
    var _params = _.merge({},
      _defaultSettings,
      params
    );

    this.setting(_params);
  },

  setup: function () {
    return require('./setup')();
  },

  settings: require('./settings'),

  prepare: function () {
    callCalback(this, 'onOpen');
  },

  build: function () {
    $(this.elements.root).addClass('ajs-panel-placeholder');
    $(this.elements.dialog)
      .removeClass('ajs-dialog')
      .addClass('ajs-panel');
    $(this.elements.header).hide();
    $(this.elements.footer).hide();
    $(this.elements.commands).hide();
  },

  settingUpdated: function (key, oldValue, newValue) {
    
    switch (key) {
      case 'position':
      case 'classes':
        $(this.elements.dialog)
          .removeClass('at-' + oldValue + '-position')
          .addClass('at-' + newValue + '-position');
        break;
      case 'target':
        this.setContent($(newValue).clone()[0]);
        break;
    }
  },

  hooks: {
    onshow: function () {
      winControl.onCheckResize(this);
    },
    onclose: function () {
      destroy(this);

      winControl.offCheckResize(this);
    }
  }
};

module.exports = function (alertify) {
  alertify.dialog('panel', function factory () {
    return Panel;
  });
};
},{"./settings":25,"./setup":26,"helpers/callbacks":7,"helpers/destroy":9,"helpers/window-control":15}],25:[function(require,module,exports){
module.exports={
  "target": null,
  "panel": null,
  "position": null,
  "hideAfter": 764,
  "onOpen": null
}

},{}],26:[function(require,module,exports){
module.exports = function () {
  return {
    options: {
      title: null,
      modal: true,
      movable: false,
      resizable: false,
      maximizable: false,
      pinnable: false,
      closable: true
    }
  };
};
},{}],27:[function(require,module,exports){
module.exports = function (alertify) {
  var _glossary = require('helpers/get-glossary')('cart');
  var _events = require('helpers/get-events')('cart');

  if (_events.item_added) {
    EventBus.subscribe('add_items:insales:cart', function () {
      alertify.success(_.get(_glossary, 'item_added'));
    });
  }

  if (_events.remove_item) {
    EventBus.subscribe('delete_items:insales:cart', function () {
      alertify.warning(_.get(_glossary, 'item_removed'));
    });
  }
};
},{"helpers/get-events":10,"helpers/get-glossary":11}],28:[function(require,module,exports){
module.exports = function (alertify) {
  var _glossary = require('helpers/get-glossary')('compares');
  var _events = require('helpers/get-events')('compares');

  if (_events.product_added) {
    EventBus.subscribe('add_item:insales:compares', function () {
      alertify.success(_.get(_glossary, 'product_added'));
    });
  }

  if (_events.product_removed) {
    EventBus.subscribe('remove_item:insales:compares', function () {
      alertify.success(_.get(_glossary, 'product_removed'));
    });
  }

  if (_events.overload) {
    EventBus.subscribe('overload:insales:compares', function () {
      alertify.warning(_.get(_glossary, 'overload'));
    });
  }
};
},{"helpers/get-events":10,"helpers/get-glossary":11}],29:[function(require,module,exports){
module.exports = function (alertify) {
  require('./cart')(alertify);
  require('./compares')(alertify);
  require('./open-triggers')(alertify);
};
},{"./cart":27,"./compares":28,"./open-triggers":30}],30:[function(require,module,exports){
var _mutateOptions = require('helpers/mutate-options');

module.exports = function (alertify) {
  $(function () {
    $(document).on('click', '[data-alertify-open]', function (event) {
      var _options = _mutateOptions($(this).data());

      event.preventDefault();

      alertify[_options.type](_options);
    });

    $('a[onclick*="$.facebox"]')
      .attr('onclick', '')
      .on('click', function (event) {
        event.preventDefault();
        alertify.checkoutRecover({ ajax: '/client_account/session/new.json' });
      });
  });
};
},{"helpers/mutate-options":13}]},{},[16]);
