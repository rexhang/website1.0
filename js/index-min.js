/**
 * [initBannerHeight description]   初始化文字上下居中
 * @author [rexhang]
 * @dateTime 2016-10-18T13:56:52+0800
 * @return   {[type]}                 [description]
 */
function initBannerHeight(){
    var bannerTxtHeight = parseInt($(".banner-txt").css("height"));
    $(".banner-txt").css({
        'margin-top': - (bannerTxtHeight) / 2
    });
};
function initBannerHeightResize(){
    $(window).resize(function(){
        imgHover();
    });
};
/**
 * [addNavBg description]   navbar样式添加
 * @author
 * @dateTime 2016-10-18T14:25:37+0800
 */
function addNavBg(){
    var scrollHeight = $("body").height();
    console.log("scrollHeight="+scrollHeight)
    /**
     * [add description]    添加操作
     * @author
     * @dateTime 2016-10-18T14:26:00+0800
     */
    function add(){
        var is_scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(is_scrollTop >= scrollHeight){
            $(".nav-bg").addClass("rex-bg-color-fff");
            $(".logo-tit").css("color","#666");
            $("#listset li a").addClass("important666");
            $("#backTop").show();
        } else{
            $(".nav-bg").removeClass("rex-bg-color-fff");
            $(".logo-tit").css("color","#fff");
            $("#listset li a").removeClass("important666");
            $("#backTop").hide();
        };
        /*console.log(is_scrollTop);*/
    };
    $(window).scroll(function(){
        add();
        /*console.log(is_scrollTop);*/
    });
};


function isPc(){
    if($(window).width() > 768){
        return true;
    } else{
        return false;
    }
}
/**
 * [bannerCtrlClick description]    banner控制按钮
 * @author
 * @dateTime 2016-10-18T15:47:22+0800
 * @return   {[type]}                 [description]
 */
function bannerCtrlClick(){


    if(isPc()){
        $("#banner_ctrl div a").click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active");
        });
    } else{

        $("#banner_ctrl div a").on("touchstart" ,function(){
            $(this).parent().addClass("active").siblings().removeClass("active");
        });
    }


};
function triggerClick(){
    $("#banner_ctrl .clickitem").click(function(){
        var _index = $(this).parent().index();
        $(".swiper-pagination").find(".swiper-pagination-bullet").eq(_index).trigger("click");
    });
};

function requestAnimationFrameCount(){
    var percent1 = 0, percent1_end = 100;
    var percent2 = 0, percent2_end = 26;
    var percent3 = 0, percent3_end = 12;
    var percent4 = 1400, percent4_end = 1600;
    var ele = $("#numcount").find(".items");
    (function step1(){
        percent1++;
        (function (){
            ele.eq(0).find("h3 b").text(percent1);
            if(percent1 < percent1_end){
                window.requestAnimationFrame(step1);
            };
        })();
    })();
    (function step2(){
        percent2++;
        (function (){
            ele.eq(1).find("h3 b").text(percent2);
            if(percent2 < percent2_end){
                window.requestAnimationFrame(step2);
            };
        })();
    })();
    (function step3(){
        percent3++;
        (function (){
            ele.eq(2).find("h3 b").text(percent3);
            if(percent3 < percent3_end){
                window.requestAnimationFrame(step3);
            };
        })();
    })();
    (function step4(){
        percent4++;
        (function (){
            ele.eq(3).find("h3 b").text(percent4);
            if(percent4 < percent4_end){
                window.requestAnimationFrame(step4);
            };
        })();
    })();
};
/**
 * [showSidebar description]    点击文案显示右侧的sidebar
 * @author
 * @dateTime 2016-10-19T11:17:02+0800
 * @return   {[type]}                 [description]
 */
function showSidebar(){
    $(".showinfo, .dsg").click(function(){
        var winWidth = $(window).width();
        console.log(winWidth);
        /*如果是pc显示侧边栏 否则显示全屏组件*/
        if(winWidth > 768){
            $(".zhezhao").show();
            $(".fixinfobox").animate({
                "right":0
            });

            $("body").css("overflow-y","hidden");

            $(".zhezhao").click(function(){
                if($(".fixinfobox").is(":animated")){
                    console.warn('DOM对象正处于动画中，请稍候操作！……');
                } else{
                    $(".fixinfobox").animate({
                        "right":"-46%"
                    });
                    $(".zhezhao").hide();
                    $("body").css("overflow-y","auto");
                };
            });
            $(".closebtn0").click(function(){
                $(".zhezhao").trigger("click");
            });
        } else{
            // 显示全屏组件
            $("#curtain").fadeIn().addClass("m-show");
            $("#backTop").hide();

            $("#close-m-modal").click(function(){
                $("#curtain").fadeOut().removeClass("m-show");;
            })

        };
    });
    console.log("sideBarShow success!");
};
/**
 * [hoverShowText description]  悬浮人物显示对话信息
 * @author
 * @dateTime 2016-10-19T16:49:18+0800
 * @return   {[type]}                 [description]
 */
function hoverShowText(){
    if(isPc()){
        $("#selrount-c li").mouseover(function(){
            var _index = $(this).index();
            var dom = $("#selrount li").eq(_index);
            dom.css("display",'block');
            $("#selrount-c li").eq(_index).mouseleave(function(){
                dom.css('display','none');
            });
        });
    }
};
/**
 * [AnimateautoH description]   自动化高度
 * @author rexhang
 * @dateTime 2016-10-31T10:39:07+0800
 */
function AnimateautoH(){
    var _height = $(".autoimgs").height();
    $(".bg-hover").css({
        "height":_height
    });
}
function imgHover(){
        $(".padding-box .bg-hover").mouseover(function(){
            if($(this).children(".round-box").hasClass("doing")){
                console.log('animating……');
                return false;
            } else{
                $(this).animate({
                    "opacity": 1
                },100);
                $(this).children(".round-box").addClass("doing").animate({
                    "top": "50%"
                },300);
            }
        });
        $(".padding-box .bg-hover").mouseleave(function(){
            var vm = $(this);
            vm.find(".round-box").removeClass("doing").animate({
                "top": "-50%"
            },300);
            $(".bg-hover").animate({
                "opacity": 0
            },100);
        });
}
function backToTop(){
    /*var is_scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;*/
    $("#backTop").click(function(){
        $("html, body").animate({
            scrollTop:0
        });
    });
};

/**
 * [clickToPage description]    点击跳转一屏幕
 * @author
 * @dateTime 2016-10-25T16:18:01+0800
 * @return   {[type]}                 [description]
 */
function clickToPage(){
    $(".sth").click(function(){
        console.log('next screen');
        var win_height = $(window).height();
        $("html, body").animate({
            scrollTop:win_height+1
        });
        add();
    });
};

/**
 * [showMaps description]   显示地图模块
 * @author rexhang
 * @dateTime 2016-10-28T15:10:01+0800
 * @return   {[type]}                 [description]
 */
function showMaps(){
    $("#showAddress").click(function(){
        $(".map-modal").css("visibility", "visible").animate({
            "opacity": 1
        }, 200, function(){
            $(".map-div").css("visibility", "visible").animate({
                "top": "20%"
            }, 600);
        });

        /*$(".showMaps").css({
            "visibility": "visible",
            "transform":"scale(1)",
            "-webkit-transform":"scale(1)",
            "-ms-transform":"scale(1)"
        });*/
    });
    $(".map-modal").click(function(){

        $(".map-div").animate({
            "top": "24%"
        }, 600, function(){
            $(".map-div").css("visibility", "hidden");
            $(".map-modal").animate({
                "opacity": 1
            }, 200, function(){
                $(".map-modal").css("visibility", "hidden");
            });
        });

    });
}
/**
 * [prohover description]   产品文字hover效果
 * @author
 * @dateTime 2016-10-31T16:36:53+0800
 * @return   {[type]}                 [description]
 */
function prohover(){
    $("#hov-font .item-box .c_right").mouseover(function(){
        var vm = $(this);
        vm.siblings(".c_left").find(".loadfonts").css({
            "opacity": 1,
            "transform": "translateY(0)"
        });
    });
    $("#hov-font .item-box .c_right").mouseleave(function(){
        var vm = $(this);
        vm.siblings(".c_left").find(".loadfonts").css({
            "opacity": 0,
            "transform": "translateY(20px)"
        });
    });
}

/**
 * [iclick description] 按钮点击展开处理
 * @author
 * @dateTime 2016-11-02T14:14:54+0800
 * @return   {[type]}                 [description]
 */
function iclick(){
    var flag = false;
    $("#iclick").click(function(){

        var vm = $(this);

        if(!flag){
            if($("#curtain").hasClass("m-show")){
                return false;
            } else {
                vm.parent().css("background-color", "#fff");flag = !flag;
                $(".logo-tit").css("color", "#666");
                vm.children('img').attr("src", "./img/menu-up.png");
                $("body").on('touchmove',function(event) { event.preventDefault(); }, false);
            }

        } else if(flag){
            setTimeout(function(){
                vm.parent().css("background-color", "transparent");flag = !flag;
                $(".logo-tit").css("color", "#fff");
                vm.children('img').attr("src", "./img/menu.png");
                var winH = $(window).height();
                var is_scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                if( is_scrollTop > winH ){
                    $(".logo-tit").css("color", "#666");
                }
            },300);
            $("body").unbind('touchmove');
        }

    })

    if(flag){

        $(body).click(function(){
            $("#iclick").trigger("click");
        })
    }
}

/*页面框架加载完成*/
$(function(){
    /*open loading*/
    animate.open();
    initBannerHeight();
    addNavBg();
    bannerCtrlClick();
    triggerClick();
    showSidebar();
    requestAnimationFrameCount();
    hoverShowText();
    backToTop();
    clickToPage();
    prohover();
    iclick();
});

$(window).load(function() {
    initBannerHeightResize();
    AnimateautoH();
    imgHover();
    /*setTimeout(function(){
        animate.close();
    },1000);*/
    /*loading close*/
    requestAnimationFrame(function(){
        animate.close();
    });
    /*animate.close();*/
    showMaps();
    console.info("assets all ready !");

    if(!isPc()){
        $(".modals").hide();
    }
});
