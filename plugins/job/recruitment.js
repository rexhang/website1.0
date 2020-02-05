;(function (){
  var tabs = function (){
    var idHeight =  $('.recruitment_detail li').eq(0).height();
    var iHeight =  $('.recruitment_detail dl').eq(0).height()
         * $('.recruitment_detail dl').length;
    $('.recruitment_detail').height(iHeight);
    $('.recruitment_detail').height(750);
    $('.recruitment_detail li').children('h2').click(function (){
      var initHeight = $('.recruitment_detail li').height();
      $('.recruitment_detail li:lt('+ $(this).closest('li').index()+')').animate(
        {
          'height' : 0
        },
        function (){
          $('.recruitment_detail li').eq($(this).closest('li').index())
            .appendTo('.recruitment_detail').height(initHeight);
        }
      );
      if($(this).hasClass('on')) {
        $(this).removeClass('on').siblings('.detail_require').find('dl').slideUp();
      } else{
        $(this).addClass('on').parent().siblings().find('h2').removeClass('on');
        $(this).siblings('.detail_require').find('dl').slideDown();
        $(this).parent().siblings().find('.detail_require dl').hide();
      }
    });
  };
  var clickToTop = function (){
    var icon = $('<div class="toTop">\
          <img src="./img/click2Top.png" alt="" />\
        </div>');
    $(icon).css('position','fixed').css('bottom','30px').css('left','95%').css('cursor','pointer').hide();
    $(icon).appendTo('body');
    $(icon).click(function (){
      $('html,body').animate({'scrollTop': 0},500);
    })
    $(window).scroll(function (){
      $(window).scrollTop() > $(window).height() ? $(icon).show() : $(icon).hide().css('zIndex',2)
    });
  };
  $(function (){
    tabs();
    clickToTop();
   });
})();