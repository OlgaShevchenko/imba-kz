let hidePush = (id)=>{
    $(`#${id}`).fadeOut(()=>{
            $(`#${id}`).remove();
        }
    );
}
let genPush = ()=>{
    $.ajax({
        method:"POST",
        url:"https://insales.imbapower.club/orders/ru-random",
        success: data => {
    let name = data.name;
            let city = data.city;
    let img = data.item.img;
    let item = data.item.name;
            let now = new Date();
            let time = now.getHours() + ":" + (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes());
            let id = "push_n" + now.getTime();
    let buy_txt = data.is_male ? "купил" : "купила"
    $('footer').append(`
    <div class="push-popup" id="${id}" style="display: none;">
        <div class="push-popup__close" data-id='${id}'></div>
        <div class="push-popup__image" id="${img}"></div>
        <div class="push-popup__text">
            <div class="push-popup__name">${name} </br> из ${city} ${buy_txt}</div>
            <div class="push-popup__product">${item}</div>
            <div class="push-popup__time">${time}</div>
        </div>
    </div>`);
    $(`#${id}`).fadeIn();
    setTimeout(
        ()=>{
            hidePush(id);
        },
        4000
    );
}
    });

}

let pusher = () => {
    genPush();
    let tmot = Math.ceil(Math.random() * 40000 + 50000);
    setTimeout(()=>{
            pusher();
        }
        , tmot);
}

$(document).ready( () => {
    /*setTimeout(()=>{
            if(clientCountry == "RU" && false) {pusher();}
        }
        , 20000);
    $(document).on('click', '.push-popup .push-popup__close', e=> {
        hidePush($(e.currentTarget).data('id'));
    })*/
});
