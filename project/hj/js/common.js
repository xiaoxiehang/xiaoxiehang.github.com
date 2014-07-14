define(function(require,exprots,module){
    //var jquery = require('jquery');
    jquery = require('./plugins/tabs');
    
    $(window).bind('scroll',function(){
        var w_s_top = $(this).scrollTop();
        var g_hd = $('div.g-header') , g_st = $('div.g-sites'), m_fixed = $('div.m-fixed'), m_gotop = $('a.m-gotop');
        if(w_s_top >= g_hd.offset().top + g_hd.outerHeight(true)){
            g_st.css({'position':'fixed'});
            if(!g_st.find('.g-sites-logo').length){
                g_st.find('.layout').prepend('<div class="g-sites-logo"><a href="#">HJ</a></div>');
            }
            if(m_fixed.length){
                m_fixed.css({'position':'fixed','top':60});
            }
            
            if(m_gotop.length){
                m_gotop.addClass('m-gotop-show');
            }else{
                $(document.body).append('<a class="m-gotop" href="#"></a>');
            }
            var win_w = $(window).width(), blank = (win_w - 1000)/2;
            if(blank > m_gotop.outerWidth()){
                m_gotop.css('right',blank - m_gotop.outerWidth() - 10);
            }
        }else{
            g_st.removeAttr('style').find('.g-sites-logo').remove();
            if(m_fixed.length){
                m_fixed.css({'position':'absolute','top':242});
            }
            if(m_gotop.length){
                m_gotop.removeClass('m-gotop-show');
            }
        }
    })
    
    $('.g-nav').find('dt a').mouseover(function(){
        $(this).parents('li').addClass('nav-crt');
    })
    
    $(document.body).on('mouseover',function(e){
        var el = $(e.target);
        if(!el.closest('.nav-crt').length){
            $('.nav-crt').removeClass('nav-crt');
        }
    })
    
    
    $('.m-tab').tabs();
    
})