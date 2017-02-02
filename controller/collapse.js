$(document).ready(function()
{
    $(window).resize(function(){
      eventLoading();
    });
    eventLoading();
});
function eventLoading() {
  if($( window ).width()<768)
  {
      $(".collid").attr("data-target","#hr-nav");
      $(".collid").attr("data-toggle","collapse");
 }else {
       $(".collid").removeAttr("data-toggle");
       $(".collid").removeAttr("data-target");
 }
}
