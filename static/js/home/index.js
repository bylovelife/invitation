'use strict';

function hideMenu() {
    WeixinJSBridge.call('hideToolbar');
    WeixinJSBridge.invoke('sendAppMessage', {
        "appid": "", //appid 设置空就好了。
        "img_url": 'http://www.yaya12.com/wedding/static/img/img.png', //分享时所带的图片路径
        "img_width": "120", //图片宽度
        "img_height": "120", //图片高度
        "link": 'http://www.yaya12.com/wedding/html/index.html', //分享附带链接地址
        "desc": "今生今世，之子之后，与子偕老；每天每夜，静观花开花落，笑看云卷云舒！", //分享内容介绍
        "title": "婚礼邀请函-白杨&李思奇"
    }, function (res) {/*** 回调函数，最好设置为空 ***/});
    WeixinJSBridge.invoke('shareTimeline', {
        "appid": "", //appid 设置空就好了。
        "img_url": 'http://www.yaya12.com/wedding/static/img/img.png', //分享时所带的图片路径
        "img_width": "120", //图片宽度
        "img_height": "120", //图片高度
        "link": 'http://www.yaya12.com/wedding/html/index.html', //分享附带链接地址
        "desc": "今生今世，之子之后，与子偕老；每天每夜，静观花开花落，笑看云卷云舒！", //分享内容介绍
        "title": "婚礼邀请函-白杨&李思奇"
    }, function (res) {/*** 回调函数，最好设置为空 ***/});
}
if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', hideMenu, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', hideMenu);
        document.attachEvent('onWeixinJSBridgeReady', hideMenu);
    }
} else {
    hideMenu();
}
require(['../require-config'], function () {
    require(["jquery", "jqueryui", "fullpage"], function ($, jqueryui, fullpage) {
        if ($.browser.msie && $.browser.version < 10) {
            $('body').addClass('ltie10');
        }
        var myVideo = document.getElementById("media");
        $('.js_music').on('click', function () {
            var da_c = $(this).attr('data-click');
            if (da_c == '1') {
                $(this).attr('data-click', '0');
                $(this).removeClass('dong');
                myVideo.pause();
            } else {
                $(this).attr('data-click', '1');
                $(this).addClass('dong');
                myVideo.play();
            }
        });
        $(document).ready(function () {
            $('#fullpage').fullpage({
                //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', '8thpage', '9thpage', 'tenthpage', 'eleventhpage'],
                //menu: '#menu',//文字导航
                scrollingSpeed: 1000, //滑动速度
                //slidesNavigation:true,//幻灯片底部远点导航
                loopBottom: false, //滚动到最底部后是否滚回顶部
                css3: true, //是否使用 CSS3 transforms 滚动--页面切换的滑动效果
                // paddingTop:10px,//默认的页面头部间距
                // paddingBottom:10px,//默认的页面底部间距
                // fixedElements:'.js_music',//固定的元素,滚动式不动
                // keyboardScrolling:true,//键盘操纵滚动
                // touchSensitivity:5,//值越大，越难滚动
                // continuousVertical:false,//是否循环滚动
                // animateAnchor:true,//锚链接是否可以控制滚动动画，如果是false，则通过锚链接定位到某个页面不再显示动画效果
                // recordHistory:true,//增加浏览器历史记录，可以点击后退前进会看浏览页面
                // navigation:false,//是否显示导航，true--小圆点导航
                // navigationPosition:'right',//导航位置
                // navigationTooltips:['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', '8thpage', '9thpage', 'tenthpage', 'eleventhpage'],//鼠标在小圆点上的提示
                // showActiveTooltip:false,//true,滚动那个页面，对应的小圆点显示提示
                // slidesNavigation:false,//是否显示横向幻灯片导航
                // slidesNavPosition:bottom,//横向幻灯片导航位置
                scrollOverflow: true, //内容超过慢跑后是否显示滚动条，true--jquery.slimscroll插件
                afterRender: function afterRender() {
                    $('#loading_mask').hide();
                },
                onLeave: function onLeave(index, nextIndex, direction) {
                    console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " + direction);
                    if (index == 1) {
                        //顶部花加载
                        $('.js_page_top').find('img').hide().removeClass('dong');
                        //中间图片加载
                        $('.js_img_round_out').hide().removeClass('dong');
                        //中间图片周边花树枝加载
                        $('.js_round_flo').hide().removeClass('dong');
                        //文字加载
                        $('.js_word_out').hide().removeClass('dong');
                        $('.js_word_out').find('span').removeClass('dong');
                        //底部花加载
                        $('.js_page_b').find('img').hide().removeClass('dong');
                    } else if (index == 2) {
                        //顶部花
                        $('.js_page2_top').find('.img').hide().removeClass('dong');
                        $('.js_page2_top').find('.js_li_l').hide().removeClass('dong');
                        $('.js_page2_top').find('.js_li_r').hide().removeClass('dong');
                        //中间文字
                        $('.js_page2_title').find('span').hide().removeClass('dong');
                        $('.js_page2_word').hide().removeClass('dong');
                        //底部图片
                        $('.js_img_b_left').hide().removeClass('dong');
                        $('.js_img_b_right').hide().removeClass('dong');
                    } else if (index == 3) {
                        //顶部花
                        $('.js_page3_top').hide().removeClass('dong');
                        $('.js_page3_img_l').hide().removeClass('dong');
                        $('.js_page3_img_t').hide().removeClass('dong');
                        //中间文字
                        $('.js_page3_bdl').find('dt').find('img').hide().removeClass('dong');
                        $('.js_page3_bdl').find('dd').hide().removeClass('dong');
                        //底部花加载
                        $('.js_page3_b').find('img').hide().removeClass('dong');
                    } else if (index == 4) {
                        //顶部花
                        $('.js_page4_top').hide().removeClass('dong');
                        $('.js_page4_img_l').hide().removeClass('dong');
                        $('.js_page4_img_t').hide().removeClass('dong');
                        //中间文字
                        $('.js_page4_bdl').find('dt').find('img').hide().removeClass('dong');
                        $('.js_page4_bdl').find('dd').show().hide().removeClass('dong');
                        //底部花加载
                        $('.js_page4_b').find('img').hide().removeClass('dong');
                    } else if (index == 5) {
                        //顶部花
                        $('.js_page5_top').hide().removeClass('dong');
                        //中间文字
                        $('.js_page5_img_l').hide().removeClass('dong');
                        $('.js_page5_img_t').hide().removeClass('dong');
                        $('.js_page5_midt').hide().removeClass('dong');
                        $('.js_page5_midm').hide().removeClass('dong');
                        $('.js_page5_midb').hide().removeClass('dong');
                        //底部花                        
                        $('.js_page5_ul').find('.js_li_l').hide().removeClass('dong');
                        $('.js_page5_ul').find('.js_li_r').hide().removeClass('dong');
                    } else if (index == 6) {
                        //顶部花
                        $('.js_page6_top').hide().removeClass('dong');
                        //底部花
                        $('.js_page6_b').find('img').hide().removeClass('dong');
                        //中间画
                        $('.js_page6_img').hide().removeClass('dong');
                        $('.js_tm_bg').hide().removeClass('dong');
                        $('.js_page6_word_l').hide().removeClass('dong');
                        $('.js_page6_word_r').hide().removeClass('dong');
                        $('.js_page6_word').find('p').hide().removeClass('dong');
                    } else if (index == 7) {
                        //顶部花
                        $('.js_page7_t').hide().removeClass('dong');
                        $('.js_page7_m').find('img').hide().removeClass('dong');
                        $('.js_page7_b').hide().removeClass('dong');
                        $('.js_page7_heart').find('img').hide().removeClass('dong');
                    } else if (index == 8) {
                        //顶部花
                        $('.js_page8_top').find('img').hide().removeClass('dong');
                        $('.js_page8_b').find('img').hide().removeClass('dong');
                        //中间图片加载
                        $('.js_page8_word').hide().removeClass('dong');
                        $('.js_page8_img_in').hide().removeClass('dong');
                        $('.js_page8_word').find('p').hide().removeClass('dong');
                        $('.js_ul8').find('li').hide().removeClass('dong');
                        $('.js_ul_flower').hide().removeClass('dong');
                        //中间图片周边花树枝加载
                        $('.js_round8_flo').hide().removeClass('dong');
                    } else if (index == 9) {
                        //顶部花加载 
                        $('.js_page9_l').hide().removeClass('dong');
                        $('.js_page9_r').hide().removeClass('dong');
                        //文字
                        $('.js_page9_title').find('span').hide().removeClass('dong');
                        $('.js_page9_body').hide().removeClass('dong');
                        $('.js_page9_body').find('.page9_b_t').hide().removeClass('dong');
                        $('.js_page9_body').find('dl').hide().removeClass('dong');
                        $('.js_page9_body').find('.cage').hide().removeClass('dong');
                        //底部花加载
                        $('.js_page9_b').find('img').hide().removeClass('dong');
                    } 
                    // else if (index == 10) {
                    //     //顶部花加载 
                    //     $('.js_page10_l').hide().removeClass('dong');
                    //     $('.js_page10_r').hide().removeClass('dong');
                    //     //文字
                    //     $('.js_page10_title').find('span').hide().removeClass('dong');
                    //     $('.js_page10_body').hide().removeClass('dong');
                    //     $('.js_page10_body').find('.cage').hide().removeClass('dong');
                    //     //底部花加载
                    //     $('.js_page10_b').find('img').hide().removeClass('dong');
                    // }
                },
                afterLoad: function afterLoad(anchorLink, index) {
                    if (index == 1) {
                        //顶部花加载
                        $('.js_page_top').find('img').show().addClass('dong');
                        //中间图片加载
                        $('.js_img_round_out').show().addClass('dong');
                        //中间图片周边花树枝加载
                        $('.js_round_flo').show().addClass('dong');
                        //文字加载
                        setTimeout(function () {
                            $('.js_word_out').show().addClass('dong');
                            $('.js_word_out').find('span').addClass('dong');
                        }, 1200);
                        //底部花加载
                        setTimeout(function () {
                            //$('.js_word_out').find('span').addClass('dong');
                            $('.js_page_b').find('img').show().addClass('dong');
                        }, 800);
                    } else if (index == 2) {
                        //顶部花
                        $('.js_page2_top').find('.img').show().addClass('dong');
                        $('.js_page2_top').find('.js_li_l').show().addClass('dong');
                        $('.js_page2_top').find('.js_li_r').show().addClass('dong');
                        //中间文字
                        $('.js_page2_title').find('span').css({ 'display': 'block' }).addClass('dong');
                        $('.js_page2_word').show().addClass('dong');
                        //底部图片
                        setTimeout(function () {
                            $('.js_img_b_left').show().addClass('dong');
                            $('.js_img_b_right').show().addClass('dong');
                        }, 1200);
                    } else if (index == 3) {
                        //顶部花
                        $('.js_page3_top').show().addClass('dong');
                        setTimeout(function () {
                            $('.js_page3_img_l').show().addClass('dong');
                            $('.js_page3_img_t').show().addClass('dong');
                        }, 1200);
                        //中间文字
                        setTimeout(function () {
                            $('.js_page3_bdl').find('dt').find('img').show().addClass('dong');
                            $('.js_page3_bdl').find('dd').show().addClass('dong');
                        }, 800);
                        //底部花加载
                        setTimeout(function () {
                            $('.js_page3_b').find('img').show().addClass('dong');
                        }, 2000);
                    } else if (index == 4) {
                        //顶部花
                        $('.js_page4_top').show().addClass('dong');
                        setTimeout(function () {
                            $('.js_page4_img_l').show().addClass('dong');
                            $('.js_page4_img_t').show().addClass('dong');
                        }, 1200);
                        //中间文字
                        setTimeout(function () {
                            $('.js_page4_bdl').find('dt').find('img').show().addClass('dong');
                            $('.js_page4_bdl').find('dd').show().addClass('dong');
                        }, 800);
                        //底部花加载
                        setTimeout(function () {
                            $('.js_page4_b').find('img').show().addClass('dong');
                        }, 2000);
                    } else if (index == 5) {
                        //顶部花
                        $('.js_page5_top').show().addClass('dong');
                        //中间文字
                        setTimeout(function () {
                            $('.js_page5_img_l').show().addClass('dong');
                            $('.js_page5_img_t').show().addClass('dong');
                        }, 800);
                        setTimeout(function () {
                            $('.js_page5_midt').show().addClass('dong');
                            $('.js_page5_midm').show().addClass('dong');
                            $('.js_page5_midb').show().addClass('dong');
                        }, 1000);
                        //底部花                        
                        $('.js_page5_ul').find('.js_li_l').show().addClass('dong');
                        $('.js_page5_ul').find('.js_li_r').show().addClass('dong');
                    } else if (index == 6) {
                        //顶部花
                        $('.js_page6_top').show().addClass('dong');
                        //底部花
                        $('.js_page6_b').find('img').show().addClass('dong');
                        //中间画
                        $('.js_page6_img').show().addClass('dong');
                        $('.js_tm_bg').show().addClass('dong');
                        setTimeout(function () {
                            $('.js_page6_word_l').show().addClass('dong');
                            $('.js_page6_word_r').show().addClass('dong');
                            $('.js_page6_word').find('p').show().addClass('dong');
                        }, 1000);
                    } else if (index == 7) {
                        //顶部花
                        $('.js_page7_t').show().addClass('dong');
                        $('.js_page7_m').find('img').show().addClass('dong');
                        $('.js_page7_b').show().addClass('dong');
                        setTimeout(function () {
                            $('.js_page7_heart').find('img').show().addClass('dong');
                        }, 1000);
                    } else if (index == 8) {
                        //顶部花加载
                        $('.js_page8_top').find('img').show().addClass('dong');
                        //中间图片加载
                        $('.js_page8_img_in').show().addClass('dong');
                        //中间图片周边花树枝加载
                        $('.js_round8_flo').show().addClass('dong');
                        //文字加载
                        $('.js_page8_word').show().addClass('dong');
                        $('.js_page8_word').find('p').show().addClass('dong');
                        setTimeout(function () {
                            $('.js_ul8').find('li').show().addClass('dong');
                            $('.js_ul_flower').show().addClass('dong');
                        }, 1000);
                        //底部花加载
                        $('.js_page8_b').find('img').show().addClass('dong');
                    } else if (index == 9) {
                        //顶部花加载  
                        $('.js_page9_l').show().addClass('dong');
                        $('.js_page9_r').show().addClass('dong');
                        //文字
                        $('.js_page9_title').find('span').css({ 'display': 'block' }).addClass('dong');
                        $('.js_page9_body').show().addClass('dong');
                        setTimeout(function () {
                            $('.js_page9_body').find('.cage').show().addClass('dong');
                            $('.js_page9_body').find('.page9_b_t').hide().show().addClass('dong');
                            $('.js_page9_body').find('dl').show().addClass('dong');
                        }, 1000);
                        //底部花加载
                        $('.js_page9_b').find('img').show().addClass('dong');
                    }
                }
            });
        });
    });
});
