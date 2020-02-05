/**
 * Created by rexhang on 2016年10月30日0024.
 */

// 百度地图API功能
var map = new BMap.Map('map-container');
var poi = new BMap.Point(108.87709,34.202745);
map.setCurrentCity("西安");          // 设置地图显示的城市 此项是必须设置的
map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.centerAndZoom(poi, 16);
map.enableScrollWheelZoom();
var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
    '<img src="./img/logo-map.png" alt="" style="float:right;zoom:1;overflow:hidden;width:50px;height:50px;margin-left:3px;"/>' +
    '地址：西安市丈八四路绿地世纪城A区16号楼2302室<br/>电话：(029)81108850<br/><p title="烛照科技是一家自主创新型的科技企业，专注于安全的高校网站群管理平台研发，同时提供应用创新平台与高校网站安全解决方案。">简介：烛照科技是一家自主创新型的科技企业，专注于安全的高……</p>' +
    '</div>';
//创建检索信息窗口对象
var searchInfoWindow = null;
searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    title  : "西安烛照信息科技有限公司",      //标题
    width  : 290,             //宽度
    height : 105,              //高度
    panel  : "panel",         //检索结果面板
    enableAutoPan : true,     //自动平移
    searchTypes   :[
        BMAPLIB_TAB_SEARCH,   //周边检索
        BMAPLIB_TAB_TO_HERE,  //到这里去
        BMAPLIB_TAB_FROM_HERE //从这里出发
    ]
});
var marker = new BMap.Marker(poi); //创建marker对象
marker.enableDragging(); //marker可拖拽

marker.addEventListener("click", function(e){
    //searchInfoWindow.open(marker);
})

searchInfoWindow.open(marker); // 直接展示

map.addOverlay(marker); //在地图中添加marker

marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画






