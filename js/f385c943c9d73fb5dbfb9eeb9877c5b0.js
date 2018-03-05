$(".js_cart_one_click_form, .cart_one_click_form").on('click',":button",function(){var self=$(this).parents(".js_cart_one_click_form, .cart_one_click_form");$('.js_shop_form_param input, .js_shop_form_param select, .shop_form_param input, .shop_form_param select, input[name=count]','form[one_click=true]').each(function(){$("input[name="+$(this).attr('name')+"]",self).remove();self.prepend('<input type="hidden" name="'+$(this).attr('name')+'" value="'+$(this).val()+'">');});self.submit();});$("[action=one_click]").click(function(){$('form[one_click=true]').removeAttr('one_click');$(this).parents('form').attr('one_click','true');$(".popups__overlay").trigger('click');centralize($(".js_cart_one_click[data-id="+$(this).attr('data-id')+"]"));});function select_param_price(th)
{var param_code='';th.find(" js_shop_depend_param, .depend_param").each(function(){param_code=param_code+'['+$(this).attr('name')+'='+$(this).val()+']';});if(th.find('.js_shop_param_price, .shop_param_price').length)
{th.find('.js_shop_param_price, .shop_param_price').hide();if(th.find('.js_shop_param_price'+param_code+', .shop_param_price'+param_code).length)
{th.find('.js_shop_param_price'+param_code+', .shop_param_price'+param_code).show();var image_id=th.find('.js_shop_param_price'+param_code+', .shop_param_price'+param_code).attr('image_id');if(image_id)
{th.parents('.js_shop, .shop').find('.js_shop_img, .shop-item-big-images a, .shop-photo img').each(function(){if($(this).attr('image_id')==image_id)
{$(this).show();}
else
{if(th.find('.js_shop_param_price[image_id='+$(this).attr('image_id')+'], .shop_param_price[image_id='+$(this).attr('image_id')+']').length)
{$(this).hide();}}});}
if(th.find('.js_shop_param_price'+param_code+', .shop_param_price'+param_code).find('.js_shop_no_buy, .shop_no_buy').length)
{th.find('.js_show_waitlist, .shop_waitlist').show();th.find('.js_shop_buy, .to-cart').hide();th.find('.js_shop_one_click, .shop_one_click').hide();}
else
{if(th.find('.js_shop_no_buy_good, .shop_no_buy_good').length)
{th.find('.js_shop_waitlist, .shop_waitlist').show();}
else
{th.find('.js_shop_waitlist, .shop_waitlist').hide();}
th.find('.js_shop_buy, .to-cart').show();th.find('.js_shop_one_click, .shop_one_click').show();}}
else
{th.parents('.js_shop, .shop').find('.js_shop_img, .shop_img img, .shop_all_img img').each(function(){if(th.find('.js_shop_param_price[image_id='+$(this).attr('image_id')+'], .shop_param_price[image_id='+$(this).attr('image_id')+']').length)
{$(this).hide();}});th.find('.js_shop_buy, .to-cart').hide();th.find('.js_shop_one_click, .shop_one_click').hide();th.find('.js_shop_waitlist. .shop_waitlist').hide();}}}