<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="顾航(Rexhang)全身心致力于Web前端编程以及java编程技术的研究包括javascript脚本，Jquery，Bootstrap等前端框架的研究，并不断完善自我争取更促进互联网与现实世界的更和谐并到更贴近的交互体验！">
    <meta name="keywords" content="顾航,网页设计,平面设计,UI界面设计,视觉传达,用户体验,炫酷效果,英语,Rexhang,Web,Javaweb,Java,Javascript,HTML5,CSS3,Jquery,Android,Mysql">
    <title>顾航Web前端 - 官方网站</title>
	<script src='./loginCooike.js'></script>
    <link rel="shortcut icon" href="./favicon.ico" />
    <link rel="bookmark" href="./favicon.ico" />
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/main-style.css" rel="stylesheet">
    <!-- 判断浏览器内核 -->
    <script type="text/javascript">
    if (window.navigator.userAgent.indexOf("Chrome") == -1) window.location = "./browser.html";
    </script>
</head>

<body>
<?php
header("Content-type: text/html; charset=utf-8");
/**
 * Created by PhpStorm.
 * User: rexhang
 * Date: 2016年3月3日0003
 * Time: 9:20
 */
include "count.php";
?>
    <!-- bootstrap组件-模态框 start -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">恭喜您收到 来自高大上并且无敌酷炫吊炸天的[顾航Web前端网]的消息</h4>
                </div>
                <div class="modal-body">
                    <p>博客：http://test.rexhang.com/blog
                    <br>
                    微博：http://weibo.com/u/5763561654
                    <br>
                    QQ：1134916452
                    <br>
                    微信：wings-hang
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">喔喔喔！</button>
                </div>
            </div>
        </div>
    </div>
    <!-- bootstrap组件-模态框 end -->
    <!-- moveId-->
    <div id="moveId" onclick="alert('哇塞~你居然点了我！');"><img src="./img/doubi.jpg" style="margin-right: 20px;border-radius:25px;" alt="摇媳妇儿" width="50" height="50" />哼~ 就是不让你右键！</div>
    <!-- 头部 -->
    <header>
        <div class="ctn">
            <!-- 导航栏logo组件-left -->
            <div class="web-logo">
                <a href="http://test.rexhang.com/" class="iconsbody" data-toggle="tooltip" data-placement="bottom" title="欢迎您来到顾航Web前端网"></a>
            </div>
            <!-- 导航块组件 -->
            <div class="nav-body">
                <a href="http://test.rexhang.com/main.php" class="navs">首页</a>
                <a href="./share" class="navs">分享</a>
                <a href="http://test.rexhang.com/blog" class="navs">我的博客</a>
                <a href="http://tguide.qq.com/main/standard.htm" class="navs">代码编写规范[腾讯]</a>
                <a href="http://test.rexhang.com/blog/rexhang/jishushipin/" class="navs">视频</a>
                <a href="javascript:void(0);" class="navs" data-toggle="modal" data-target="#myModal">关于本站</a>
            </div>
        </div>
    </header>
    <!-- 轮播图组件 -->
    <div class="banners">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators" style="bottom:0px;">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="img/bannerPic1.png" alt="banner1" width="100%" height="100%" />
                    <div class="carousel-caption">
                    </div>
                </div>
                <div class="item">
                    <img src="img/bannerPic2.png" alt="banner2" width="100%" height="100%" />
                    <div class="carousel-caption">
                    </div>
                </div>
                <div class="item">
                    <img src="img/bannerPic3.png" alt="banner3" width="100%" height="100%" />
                    <div class="carousel-caption">
                    </div>
                </div>
            </div>
            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="clouds">
            <img src="img/clouds.png" alt="clouds" width="107" height="71" />
        </div>
    </div>
    <!-- 内容 分享 -->
    <div class="ctnall">
        <div class="cnt_share">
            <span class="share_fonts">项目源码分享区</span>
            <!-- 分割线 -->
            <p class="line-bottom"></p>
            <!-- 项目盒子容器 -->
            <!-- 第一行布局系统 开始 -->
            <div class="proj_ctn">
                <div class="ctn_content c_1">
                    <img src="img/blank.gif" data-echo="img/share_13.png" alt="share_13" width="100%" height="" onclick="window.open('./demo/xibu/index2.html');" />
                    <p class="tit_use">用bootstrap模板迅速构建页面</p>
                    <p class="tit_use_info">如何使用bootstrap框架在5分钟内迅速构建页面</p>
                </div>
                <div class="ctn_content c_2">
                    <img src="img/blank.gif" data-echo="img/share_14.png" alt="share_14" width="100%" height="" onclick="window.open('./demo/ke_qq');" />
                    <p class="tit_use">腾讯课堂官网</p>
                    <p class="tit_use_info">腾讯课堂(ke.qq.com)，最大的在线学习平台</p>
                </div>
                <div class="ctn_content c_3">
                    <img src="img/blank.gif" data-echo="img/share_15.png" alt="share_15" width="100%" height="" onclick="window.open('./demo/fullpagejs');" />
                    <p class="tit_use">fullpage插件制作的全屏网站</p>
                    <p class="tit_use_info">fullpage插件制作的全屏网站,是不是很萌呀~</p>
                </div>
                <div class="ctn_content c_4">
                    <img src="img/blank.gif" data-echo="img/share_16.png" alt="share_16" width="100%" height="" onclick="window.open('./demo/fenqidayappstore');" />
                    <p class="tit_use">天天分期APP下载宣传页</p>
                    <p class="tit_use_info">全页面使用了大量CSS3动画帧完成,第三页有手机版本的动画页面</p>
                </div>
            </div>
            <!-- 信息采集来源系统 -->
            <div class="infofrom">
                <div class="infos">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>大型网站系统</span>
                    </p>
                </div>
                <div class="infos">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>大型网站系统</span>
                    </p>
                </div>
                <div class="infos">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>大型网站系统</span>
                    </p>
                </div>
                <div class="infos infos4">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>大型网站系统</span>
                    </p>
                </div>
            </div>
            <!-- 用户浏览系统 -->
            <div class="users">
                <div class="isuser">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>999</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>999</span>
                    </p>
                </div>
                <div class="isuser">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>999</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>999</span>
                    </p>
                </div>
                <div class="isuser">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>999</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>999</span>
                    </p>
                </div>
                <div class="isuser user4">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>999</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>999</span>
                    </p>
                </div>
            </div>
            <!-- 第一行布局系统 结束 -->
            <!-- 第二行布局系统 开始 -->
            <div class="proj_ctn" style="margin-top: 2em;">
                <div class="ctn_content c_1">
                    <img src="img/blank.gif" data-echo="img/share_17.png" alt="share_17" width="100%" height="" onclick="window.open('http://fenqiday.com');" />
                    <p class="tit_use">天天分期</p>
                    <p class="tit_use_info">比较完整的项目,整套网站的所有前端页面由我一人完成</p>
                </div>
                <div class="ctn_content c_2">
                    <img src="img/blank.gif" data-echo="img/share_18.png" alt="share_18" width="100%" height="" onclick="window.open('./demo/jianianhua');" />
                    <p class="tit_use">嘉年华活动页</p>
                    <p class="tit_use_info">主要的技术是scrollTop的控制以及css3技术</p>
                </div>
                <div class="ctn_content c_3">
                    <img src="img/blank.gif" data-echo="img/share_19.png" alt="share_19" width="100%" height="" onclick="window.open('./demo/danmu');" />
                    <p class="tit_use">弹幕发射系统</p>
                    <p class="tit_use_info">目前视频网站的新鲜技术,加强在线观影交流</p>
                </div>
                <div class="ctn_content c_4">
                    <img src="img/blank.gif" data-echo="img/share_20.png" alt="share_20" width="100%" height="" onclick="window.open('./demo/skin');" />
                    <p class="tit_use">换肤系统</p>
                    <p class="tit_use_info">仿百度首页换肤,使用了HTML5本地存储技术</p>
                </div>
            </div>
            <!-- 信息采集来源系统 -->
            <div class="infofrom">
                <div class="infos">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>大型网站系统</span>
                    </p>
                </div>
                <div class="infos">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>大型网站系统</span>
                    </p>
                </div>
                <div class="infos">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>大型网站系统</span>
                    </p>
                </div>
                <div class="infos infos4">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>大型网站系统</span>
                    </p>
                </div>
            </div>
            <!-- 用户浏览系统 -->
            <div class="users">
                <div class="isuser">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>453</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>684</span>
                    </p>
                </div>
                <div class="isuser">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>323</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>489</span>
                    </p>
                </div>
                <div class="isuser">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>434</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>756</span>
                    </p>
                </div>
                <div class="isuser user4">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>456</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>365</span>
                    </p>
                </div>
            </div>
            <!-- 第二行布局系统 结束 -->
            <!-- 第三行布局系统 开始 -->
            <div class="proj_ctn" style="margin-top: 2em;">
                <div class="ctn_content c_1">
                    <img src="img/blank.gif" data-echo="img/share_21.png" alt="share_21" width="100%" height="" onclick="window.open('./demo/lazyload');" />
                    <p class="tit_use">图片延时加载技术</p>
                    <p class="tit_use_info">利用插件完成的延时加载展示，原理很简单……</p>
                </div>
                <div class="ctn_content c_2">
                    <img src="img/blank.gif" data-echo="img/share_22.png" alt="share_22" width="100%" height="" onclick="window.open('./demo/tanzhouteacher');" />
                    <p class="tit_use">CSS3平滑切入效果</p>
                    <p class="tit_use_info">利用最新的CSS3及jquery实现的动画效果</p>
                </div>
                <div class="ctn_content c_3">
                    <img src="img/blank.gif" data-echo="img/share_23.png" alt="share_23" width="100%" height="" onclick="window.open('./demo/cardChange');" />
                    <p class="tit_use">某APP卡包切换效果</p>
                    <p class="tit_use_info">某App的卡包切换功能，需要一定JS基础才能掌握</p>
                </div>
                <div class="ctn_content c_4">
                    <img src="img/blank.gif" data-echo="img/share_24.png" alt="share_24" width="100%" height="" onclick="window.open('./demo/qqmusic');" />
                    <p class="tit_use">QQ音乐在线播放系统</p>
                    <p class="tit_use_info">使用CSS旋转外加js操作mp3进行播放音乐的控件</p>
                </div>
            </div>
            <!-- 信息采集来源系统 -->
            <div class="infofrom">
                <div class="infos">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>中级特效集锦</span>
                    </p>
                </div>
                <div class="infos">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>中级特效集锦</span>
                    </p>
                </div>
                <div class="infos">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>中级特效集锦</span>
                    </p>
                </div>
                <div class="infos infos4">
                    <p>
                        <span class="glyphicon glyphicon-list" aria-hidden="true"></span>
                        <span>中级特效集锦</span>
                    </p>
                </div>
            </div>
            <!-- 用户浏览系统 -->
            <div class="users">
                <div class="isuser">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>453</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>684</span>
                    </p>
                </div>
                <div class="isuser">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>323</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>489</span>
                    </p>
                </div>
                <div class="isuser">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>434</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>756</span>
                    </p>
                </div>
                <div class="isuser user4">
                    <p class="user_icons">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span>456</span>
                        <span class="glyphicon glyphicon-fire" aria-hidden="true" style="text-indent: 2em;"></span>
                        <span>365</span>
                    </p>
                </div>
            </div>
            <!-- 第三行布局系统 结束 -->
        </div>
    </div>
    <!-- 分页导航 -->
    <nav style="text-align: center;">
      <ul class="pagination">
        <li>
          <a href="./main.php" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class=""><a href="./main.php">1</a></li>
        <li class="active"><a href="./main2.php">2</a></li>
        <li><a href="./main3.php">3</a></li>
        <li><a href="./main4.php">4</a></li>
        <li><a href="./main5.php">5</a></li>
        <li>
          <a href="./main3.php" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
</nav>
<!-- 分页导航 -->
<!-- 导入通用底部 -->
<?php
include "./common/index.html";
?>
<!-- 导入通用底部 -->
	<script src="script/jquery-1.11.1.min.js"></script>
    <script src="script/bootstrap.min.js"></script>
    <script type="text/javascript">
    $(function() {
        /*tooltip start*/
        $('[data-toggle="tooltip"]').tooltip();
        /*tooltip end*/
        /*轮播图bootstrap start*/
        $('.carousel').carousel({
            interval: 2600
        });
        /*轮播图bootstrap end*/
    });
    </script>
    <script>
    /*离站提示 start*/
    /*window.onbeforeunload = function(event) {
            return "★★★★★ 哥哥姐姐弟弟妹妹们，真的舍得离开高大上并且无敌酷炫吊炸天的[顾航Web前端网]吗？ ★★★★★"
        }*/
        /*离站提示 end*/
        /*禁止右键菜单以及右键菜单自定义 start*/
    document.oncontextmenu = function() {
        return false;
    }
    document.onmousedown = function() {
            if (event.button == 2) {
                var x = event.clientX;
                var y = event.clientY;
                document.getElementById("moveId").style.display = "block";
                document.getElementById("moveId").style.position = "fixed";
                document.getElementById("moveId").style.left = x + "px";
                document.getElementById("moveId").style.top = y + "px";
            }
            // else if(event.button == 1){
            //     alert("1是中键");
            // }
            // else if(event.button == 0){
            //     alert("0是左键");
            // }
        }
        /*禁止右键菜单 end*/
    document.body.onclick = function() {
            document.getElementById("moveId").style.display = "none";
        }
    </script>
    <script src="js/echo.min.js"></script>
        <script>
            Echo.init({
                offset: 0, // 距离可是区域多少的时候开始替换src
                throttle: 800 // 延时时间(单位毫秒)
            });
        </script>
</body>

</html>
<?php
    if(is_file('main2.shtml') && (time() - filemtime('main2.shtml')) < 60){
        header('Location:main2.shtml');
    } else{
            if(file_put_contents('main2.shtml',ob_get_clean())){
            header('Location:main2.shtml');
        } else{
            die('文件缓冲失败！');
        }
    }
 ?>
