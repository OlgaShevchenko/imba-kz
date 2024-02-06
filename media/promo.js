$(function () {
  "use strict";


  // Подставляю данные в модальное окно
  function switchDataModal(element) {
    const cashbackType = element.data('cashback-type');
    const cashbackAmount = element.data('max-cashback');
    const promokod = element.data('kod')
      ? `<span class="input-field__cod">${element.data('kod')}</span>`
      : 'Не требуется'
   
    const textDefaultLabel = "Скопируйте и вставтье этот код на ";
    const cashbacktText = `Получите до ${cashbackType === 'percent'
      ? cashbackAmount + '%'
      : cashbackType === 'fixed'
        ? cashbackAmount + '₽'
        : '40%'
      } кэшбэка дополнительно`;

   

    $('.modal-title').text(element.data('title'))

    setTimeout(() => {
      const $description = document.querySelector('.modal-description');
      const heightDescription = $description.clientHeight;
      const $modalDescriptionMore = document.querySelector('.modal-description-more')
      if (heightDescription > 45) {
        $description.style.height = '45px';
        $modalDescriptionMore.classList.toggle('modal-description-more--visible')
        $modalDescriptionMore.addEventListener('click', () => {
          $modalDescriptionMore.classList.toggle('modal-description-more--open')
          if ($modalDescriptionMore.classList.contains('modal-description-more--open')) {
            $description.style.height = heightDescription + 'px';
            $modalDescriptionMore.textContent = $modalDescriptionMore.dataset.textHidden;
          } else {
            $description.style.height = '45px';
            $modalDescriptionMore.textContent = $modalDescriptionMore.dataset.textStart;
          }
        })
      }
    }, 100)

    console.log($(promokod).length)
    $(promokod).length <= 3
      ? $('.modal-form.row .input-field').addClass('input-field--visible')
      : $('.modal-form.row .input-field').removeClass('input-field--visible')
    $('.modal-form.row .input-field').html(promokod)
    
   
    $('.modal-body .input-label').text(textDefaultLabel + element.data('shop-domain'))
    $('.modal-cashback-text').text(cashbacktText)

    $('.modal').data('id-coupon-modal', element.data('id'))
    element.data('answer-by-question') === 'true' && $('.modal-question').addClass('modal-question--hidden')

  }
  // /Подставляю данные в модальное окно

  /* Открыть модальное окно
  ------------------------------------------------------- */
  $(".js-open-modal").on("click", function () {
    let _element = this.closest('.coupon2.style1')
      ? this.closest('.coupon2.style1')
      : this
    let $modal = $($(_element).data("modalId"));
    $modal.show().removeClass("bounceOutDown").addClass("bounceInUp");
    $("#page").addClass("form-open");

    switchDataModal($(_element))



    if (_element.classList.contains('coupon4--coupons') || _element !== this) {
      // В новом попап

      if (!localStorage.getItem("modal-id")) {
        localStorage.setItem("modal-id", JSON.stringify($(_element).data('id')))
      }
      
     
      // /В новом попап
    } else {
      
    }


    


    return false;
  });



  /* Закрыть модальное окно
  ------------------------------------------------------- */
  $(".js-close").on("click", function () {
    let $modal = $($(this).data("modalId"));
    closeModalWindow($modal); //закрываем модальное окно

    return false;
  });

  /* Закрыть модальное окно при клике вне его зоны
  ------------------------------------------------------- */
  $(function () {
    $(document).on("click touchstart", function (event) {
      if ($(".js-modal").is(":visible")) {
        if ($(event.target).closest(".js-modal").length) {
          return;
        }
        closeModalWindow($(".fs-box:visible")); //закрываем модальное окно
        event.stopPropagation();
      }
    });
  });

});

/* Закрыть модальное окно
------------------------------------------------------- */
function closeModalWindow($modal) {
  "use strict";

  $modal.removeClass("bounceInUp").addClass("bounceOutDown");
  $("#page").removeClass("form-open");

  setTimeout(function () {
    $modal.hide();
    $('.modal-question--hidden').removeClass('modal-question--hidden')
  }, 700);


}

/* Old functions
---------------------------------------------------- */

jQuery(document).ready(function ($) {
  $(document).on("click", ".js-promocode", function (e) {
    e.preventDefault();

    var couponId = $(this).data("coupon-id");


    

    return false;
  });


  var _timer = 0;

  function DelayedCallMe(tada) {
    if (_timer) {
      window.clearTimeout(_timer);
    }
    _timer = window.setTimeout(function () {
      callMe(tada);
    }, 500);
  }

  function callMe(tada) {
    $.ajax({
      type: "POST",
      url: "/promokod/site/shops-list/",
      data: tada,
      success: function (result) {
        var $searchResult = $(".search-result");
        $searchResult.html("");
        if (result.length > 0) {
          $.each(result, function (index, value) {
            var href = (parseInt(value.is_shop) == 1) ? 'shop/' + value.slug : value.slug;
            var item = "";
            item =
              "<a class='search-result-item row2' href='/promokod/" +
              href +
              "/'><span class='search-result-item-text'>" +
              value.name +
              "</span>" +
              "<img  src ='/promokod/img/" +
              value.logo_base_path +
              "'style='max-width: 100px'>" +
              "</a>";
            $(".search-result").append(item);
          });
          $searchResult.addClass("open");
        } else {
          $searchResult.html('<div class="search-result-item row2">Ничего не найдено...</div>');
          $searchResult.addClass("open");
        }
      },
      error: function (xhr, str) {
        console.log("Возникла ошибка: " + xhr.responseCode);
      },
    });
  }

  $(document).on("keyup", ".js-search", function (evt) {
    var val = $(evt.target).val();
    var tada = {
      val: val,
    };
    DelayedCallMe(tada);
  });
  document.addEventListener('click', (e) => {
    e.target === document.querySelector('.input-field.js-search') && document.querySelector('.input-field.js-search').value !== ''
      ? $('.search-result').addClass('open')
      : $('.search-result').removeClass('open')
  })
  document.querySelector("#switch-item-promo") && document.querySelector("#switch-item-promo").addEventListener("click", function (e) {
    e.preventDefault();
    $(".switch-item").removeClass("active");
    this.classList.add("active");
    $(".coupon-list--main .coupon4--discounts").addClass("coupon--hidden");
    $(".coupon-list--main .coupon4--coupons").removeClass("coupon--hidden");
  });
  document.querySelector("#switch-item-share") && document.querySelector("#switch-item-share").addEventListener("click", function (e) {
    e.preventDefault();
    $(".switch-item").removeClass("active");
    this.classList.add("active");
    $(".coupon-list--main .coupon4--coupons").addClass("coupon--hidden");
    $(".coupon-list--main .coupon4--discounts").removeClass("coupon--hidden");
  });
  document.querySelector("#switch-item-all") && document.querySelector("#switch-item-all").addEventListener("click", function (e) {
    e.preventDefault();
    $(".switch-item").removeClass("active");
    this.classList.add("active");
    $(".coupon-list--main .coupon4--coupons").removeClass("coupon--hidden");
    $(".coupon-list--main .coupon4--discounts").removeClass("coupon--hidden");
  });


  document.querySelector('.swiper-b') && document.documentElement.clientWidth > 970 && new Swiper('.swiper-b', {
    slidesPerView: 'auto',
    grabCursor: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
    },
    watchOverflow: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    loop: true,
  });


  var copyTextareaBtn = document.querySelector('.copy');
  copyTextareaBtn.addEventListener('click', function(event) {
    var $temp = $("<input>");
    $("body").append($temp);

    var copyTextarea = document.querySelector('.input-field__cod');

    $temp.val(copyTextarea.textContent).select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);

      sendCouponCode(copyTextarea.textContent);

      $temp.remove();
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });

 



});
