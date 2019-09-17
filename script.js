$(function()
{
  $('.head_image > .message span#msg1').hide().delay(0).fadeIn(1000);
  $('.head_image > .message span#msg2').hide().delay(1500).fadeIn(1000);
  $('.head_image > .message span#msg3').hide().delay(3000).fadeIn(1000);
  $('.head_image > .message span#msg4').hide().delay(4500).fadeIn(1000);
  $('.head_image > .message span#msg5').hide().delay(6000).fadeIn(1000);
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
      _header = $('header');
      animationClass = 'is-animation-2';
      animationClass3 = 'is-animation-3';
      bottom = $('.head_image').height();
  _window.on('scroll', function() {
    var value = _window.scrollTop();
    var logo = $('.logo');
    var pos2 = logo.get(0).getBoundingClientRect();
    $("#Debug span#b").text(pos2.bottom.toString());
    $("#Debug span#a").text(value.toString());
    if ( value > bottom)
    {
      _header.addClass(animationClass);
    }
    else
    {
      _header.removeClass(animationClass);
    }
  });
});
