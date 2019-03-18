$(function(){
  //console.log("hello");
  var $width   = $('#width'),
      $height  = $('#height'),
      $btnCal  = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area    = $('#area');
$btnCal.click(function(){
  /*
  var w = Number($width.val()),
      h = Number($height.val());
  
  var p = 2 * (w + h),
      a = w * h;
  
  $perimeter.val(p);
  $area.val(a);
  */
  var w=$width.val(),

      h=$height.val();
  var rect = rectangle();
  $perimeter.val(rect.perimeter($width.val(),$height.val()));
  $area.val(rect.area($width.val(),$height.val()));
})
});
