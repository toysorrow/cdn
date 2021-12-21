require.config({
    baseUrl: window.config.Require.baseUrl,
    waitSeconds: window.config.Require.waitSeconds,
    map: {
        '*': {
            'css': 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/css.min.js'
        }
    },
    paths: {
        //-- Rotate
        Rotate: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/jquery.rotate.min',
        //-- Snap Svg
        SnapSvg: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/snap.svg-min',
        //-- Menu
        Classie: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/classie',
        Menu: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/menu',
        //-- Search
        InstantSearch: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/instantsearch.min',
        Search: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/search',
        //-- Lazy Load
        LazyLoad: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/jquery.lazyload.min',
        //-- Home Animation
        CircleMagic: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/circleMagic',
        //-- Article Animation
        TweenMax: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/TweenMax.min',
        Tween: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/Tween',
        //-- Donate
        Donate: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/donate',
        //-- ProgressBar
        ToProgress: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/ToProgress.min',
	    //-- Ribbons
        RibbonsEffect: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/RibbonsEffect',
        //-- Tocbot
        Tocbot: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/tocbot',
        //-- LeanCloud Storage
        LeanCloud: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/av-min',
        //-- Valine
        Valine: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/Valine.min',
        //-- Tools
        Tools: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/tools',
        //-- Clipboard
        Clipboard: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/clipboard.min',
        //-- FancyBox
        FancyBox: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/jquery.fancybox',
        //-- Gsap
        Gsap: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/gsap.min',
        //-- Mouse
        Mouse: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/mouse',
        //-- Base
        Base: 'https://cdn.jsdelivr.net/gh/toysorrow/cdn@1.1/superlist/js/base'
    },
    shim:{
        Classie: {
            deps: ['SnapSvg'],
        },
        Menu: {
            deps: [
                'SnapSvg', 
                'Classie', 
                'css!' + window.config.Style.menuBubble
            ]
        },
        Search: {
            deps: [
                'InstantSearch', 
                'css!' + window.config.Style.search
            ]
        },
        Tween: {
            deps: ['TweenMax']
        },
        Donate: {
            deps: ['css!' + window.config.Style.donate]
        },
        Valine: {
            deps: ['LeanCloud']
        },
        Tocbot: {
            deps: ['css!' + window.config.Style.tocbot]
        },
        Clipboard: {
            deps: ['css!' + window.config.Style.clipboard]
        },
        FancyBox: {
            deps: ['css!' + window.config.Style.fancybox]
        },
        Mouse: {
            deps: ['css!' + window.config.Style.mouse]
        },
        Base: {
            deps: [
                'Tools',
                'css!' + window.config.Style.footer, 
                'css!' + window.config.Style.iconfont // 阿里云字体图标
            ]
        }
    }
});
