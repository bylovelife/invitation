require.config({
    baseUrl: "../static/js",
    paths: {
        "jquery": ["plug/jquery-1.8.3.min", "plug/jquery-2.1.4.min", "plug/jquery-1.7.2.min", "http://libs.baidu.com/jquery/2.0.3/jquery"],
        "zepto": "plug/zepto.min",
        "vue": "plug/vue", //vue
        "vue_resource": "plug/vue-resource", //vue
        "jqueryui": "plug/jquery-ui-1.9.1.min",
        "fullpage": "plug/jquery.fullpage",
        "scrolloverflow": "plug/scrolloverflow", //如果 scrollOverflow 设置为 true，则需要引入 jquery.slimscroll.min.js，一般情况下不需要
        "easings": "plug/jquery.easings.min", //jquery.easings.min.js 是必须的，用于 easing 参数，也可以使用完整的 jQuery UI 代替
        "slimscroll": "plug/jquery.slimscroll.min", //scrollOverflow:true,//内容超过慢跑后是否显示滚动条，true--jquery.slimscroll插件
        "iscroll": "plug/iscroll", //scrollOverflow:true,//内容超过慢跑后是否显示滚动条，true--jquery.slimscroll插件
        "wx": "plug/jweixin-1.2.0",//微信菜单屏蔽
    },
    shim: {　
        'zepto': {　　　　　　　　　　　　　　　　
            exports: '$'　　　　　　
        },
        'vue_resource': {　　　　　　　　
            deps: ['vue'],
            exports: 'vue_resource'　　　　　　
        },
        'jqueryui': {　　　　　　　　
            deps: ['jquery'],
            exports: 'jqueryui'　　　　　　
        },
    }
});
