$(function(){
    var width = $(window).width();
    var i = 0;
    var mn = $('.menuWrap');
    var acoli = $('.mnTop li');
    var btn = $('.btns>.btn');
    var gr = $('.artGroup');
    var cnt02 = $('.cnt02');
    var cnt01 = $('.cnt01');

    function slide01(){
        i++;
        gr.eq(0).stop().animate({
            marginLeft : '-58%'
        },400,function(){
            gr.eq(0).find('.article:first').appendTo('.artGroup:eq(0)');
            gr.eq(0).css('margin-left','-29%');
            gr.eq(0).find('.article').removeClass('show');
            gr.eq(0).find('.article:eq(1)').addClass('show');
            gr.eq(0).find('.texts').removeClass('show');
            gr.eq(0).find('.texts:eq(1)').addClass('show');
        });
    }
    function accordion(){
        acoli.removeClass('show');
        $(this).addClass('show');
        acoli.find('span').text(' +')
        $(this).find('span').text(' -')
    }
    function open(){
        mn.css({
            width :'100%',
            opacity : 1
        });
    }
    function close(){
        mn.css({
            width :'0%',
            opacity : 0
        });
    }
    // mob ver.....
    if (width<420){
        // 메뉴 tab
        $('.header li').last().click(open);
        $('.btn').eq(0).click(close);
        acoli.even().click(accordion);
    }
    // tab ver.....
    else if(width<=1024){
        // 메뉴 tab
        $('.header li').last().click(open);
        $('.btn').eq(0).click(close);
        acoli.even().click(accordion);
        // 컨텐츠01 슬라이드
        gr.eq(0).find('.article:eq(0)').addClass('show');
        gr.eq(0).find('.texts:eq(0)').addClass('show');
        gr.eq(0).find('.article:last').prependTo('.artGroup:eq(0)')
        gr.eq(0).css('margin-left','-29%');
        btn.eq(0).click(slide01);
    }
    // pc ver.....
    else if(width>1024){
        // 컨텐츠01 슬라이드
        gr.eq(0).find('.article:eq(0)').addClass('show');
        gr.eq(0).find('.texts:eq(0)').addClass('show');
        gr.eq(0).find('.article:last').prependTo('.artGroup:eq(0)')
        gr.eq(0).css('margin-left','-29%');
        btn.eq(0).click(slide01);
        gr.eq(1).find('.article:last').prependTo('.artGroup:eq(1)');
        gr.eq(1).css('margin-right','-100%');
        btn.eq(1).click(function(){
            gr.eq(1).stop().animate({
                marginRight : '-200%'
            },500,function(){
                gr.eq(1).find('.article:first').appendTo('.artGroup:eq(1)');
                gr.eq(1).css('margin-right','-100%');
            });
        });
    }
});