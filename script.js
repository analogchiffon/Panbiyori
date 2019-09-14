$(function()
{
  //$('.head_image > .message span#msg1').hide().delay(2000).fadeIn(1000);
  //$('.head_image > .message span#msg2').hide().delay(3000).fadeIn(1000);
  //$('.head_image > .message span#msg3').hide().delay(4000).fadeIn(1000);
  //$('.head_image > .message span#msg4').hide().delay(5000).fadeIn(1000);
  //$('.head_image > .message span#msg5').hide().delay(6000).fadeIn(1000);
}
);


$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $("." + href.slice(1));
    $("#Debug span#b").text(target.toString());
    var position = target.offset().top;
    var header_height = $("header").height() + 10;
    $("html, body").animate({scrollTop:position - header_height}, speed, "swing");
    return false;
  });
});


$(function(){
  var _window = $(window),
      _header = $('header'),
      animationClass = 'is-animation';
  _window.on('scroll', function() {
    var value = _window.scrollTop();
    if ( value > 100 )
    {
      _header.addClass(animationClass);
      //$('header .logo').hide(1000);

    }else
    {
      _header.removeClass(animationClass);
      //$('header .logo').show(1000);
    }
  });
});
