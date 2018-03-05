$(function () {
    $('.scroll_href').click(function () {
        var top = $('.wrap[data-href="' + $(this).attr('data-href') + '"]').offset().top;

        $('body, html').animate({
            scrollTop: top
        }, top < 300 ? 750 : 1500);

        return false;
    });

    $('.popups__close, .popups__overlay').click(function () {
        var popups_wrap = $(this).closest('.popups');

        popups_wrap.fadeOut('fast', function () {
            popups_wrap.children('[class*=_pp]').hide();
            popups_wrap.children('.popup').hide();
        });
    });

    /*$('.btn_hd_cb').click(function (e) {
     e.preventDefault();
     
     centralize($('.form_pp_cb'))
     });*/
    
    $(".popups").append($(".popup, .form_pp_cb"));

    $('.multi__item__desc').click(function (e) {
        e.preventDefault();


        //centralize( $('.popup_desc_'+$(this).closest('.multi__item').index()) );
        centralize($('.popup_multi[data-id=' + $(this).attr('data-id') + ']'));
    });


    $('.btn_hd_ord').click(function () {
        $('html, body').animate({
            'scrollTop': $('.wrap_anc_1').offset().top
        }, 600);
    });
    $('.btn_action').click(function () {
        $('html, body').animate({
            'scrollTop': $('.multi__crop').offset().top - 26
        }, 600);
    });

    bd_max_height = 0;
    $('.multi__crop .multi__unit').each(function () {
        var $this = $(this);
        if ($this.outerHeight() > bd_max_height) {
            bd_max_height = $this.outerHeight();
        }
    })

    $('.multi__crop .multi__unit').outerHeight(bd_max_height);
});

// функция центрирует по высоте передоваемый ей элемент а так же вызывает попапы.
function centralize(elem) {
    elem.add('.popups').fadeIn('fast');
    var diff = ($(window).height() - elem.outerHeight());

    if (diff < 0)
        diff = 20;

    var elem_top = $(document).scrollTop() + (diff / 2);
    elem.css('top', elem_top);
}
;