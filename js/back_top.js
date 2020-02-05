var scrollHeight = $("body").height();
function showBackToTop(){
    var is_scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(is_scrollTop >= scrollHeight){
        $("#backTop").show();
    } else{
        $("#backTop").hide();
    }
};
showBackToTop()
$(window).scroll(function(){
    showBackToTop();
});
function backToTop(){
    /*var is_scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;*/
    $("#backTop").click(function(){
        $("html, body").animate({
            scrollTop:0
        });
    });
};
backToTop();